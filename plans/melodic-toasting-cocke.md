# RRF (Reciprocal Rank Fusion) Implementation Plan

## Executive Summary

**Goal**: Implement Reciprocal Rank Fusion (RRF) algorithm to intelligently combine search results from multiple providers (ck-lite, LEANN, mgrep, etc.) instead of simple score-based deduplication.

**Approach**: MVP inline implementation (~40 lines) in existing aggregation pipeline. No new files, no architectural changes. Opt-in via `request.options.ranking = 'rrf'`.

**Complexity**: LOW-MEDIUM (~1-2 hours implementation)

**Key Insight**: Existing deduplication pipeline at `router/index.ts:495` is perfect insertion point for RRF fusion.

---

## Context
Lev Unified Search POC has working structural search (ck-lite + orchestrator). Need to implement RRF fusion algorithm for combining results from multiple search providers (LEANN semantic at core/index, ck-lite structural, mgrep, etc).

## Architecture Understanding

**Current Flow:**
```
Query → Router.createQueryPlan() → Router.executeParallel() → Router.aggregateResults() → Response
                                     ↓
                              Multiple Daemons
                              (ck-lite, LEANN, mgrep)
```

**Current Aggregation** (router/index.ts:440-506):
1. Simple merge: concatenate all provider results
2. Deduplicate by `path:line:column` (keeps highest score)
3. Min-max normalize scores (0-1 per collection)
4. Return merged results

**Problem**: No ranking fusion across providers - just keeps highest score on collision.

## RRF Algorithm

**Formula**: `RRF_score = Σ(1 / (k + rank_i))`

Where:
- `k` = constant (typically 60)
- `rank_i` = position of result in provider i's result list
- Sum across all providers that returned the result

**Example**:
```
Result "auth.js:42" appears in:
- Provider A: rank 3 → 1/(60+3) = 0.0159
- Provider B: rank 8 → 1/(60+8) = 0.0147
- Provider C: rank 1 → 1/(60+1) = 0.0164
RRF score = 0.0159 + 0.0147 + 0.0164 = 0.0470
```

## Implementation Plan (Simplified MVP Approach)

### Step 1: Type System Updates

**File**: `/Users/jean-patricksmith/lev/core/bridge/orchestrator/src/types.ts`

1. Add `'rrf'` to `RankingStrategy` type (line ~155)
2. Add optional `RRFConfig` interface (start simple, extensible later):
```typescript
interface RRFConfig {
  k: number;                       // Default: 60 (only required field for MVP)
}
```

3. Update `SearchOptions` to include optional `rrfConfig?: RRFConfig`

**Rationale**: Start with minimal config (just k constant). Provider weighting and latency penalties can be added incrementally later.

### Step 2: Implement RRF Method (Inline - No New File)

**File**: `/Users/jean-patricksmith/lev/core/bridge/orchestrator/src/router/index.ts`

Add private method after `normalizeResultScores()` (around line 565):

```typescript
/**
 * Apply Reciprocal Rank Fusion to merged results
 * Formula: RRF_score = Σ(1 / (k + rank_i))
 */
private applyRRFFusion(
  results: SearchResult[],
  k: number = 60
): SearchResult[] {
  // Group results by unique location (dedup key)
  const resultsByLocation = new Map<string, SearchResult[]>();

  for (const result of results) {
    const key = `${result.location.path}:${result.location.startLine}:${result.location.startColumn}`;
    if (!resultsByLocation.has(key)) {
      resultsByLocation.set(key, []);
    }
    resultsByLocation.get(key)!.push(result);
  }

  // Calculate RRF scores
  const fusedResults: SearchResult[] = [];

  for (const [_key, duplicates] of resultsByLocation) {
    if (duplicates.length === 1) {
      // Single provider - keep original score
      fusedResults.push(duplicates[0]);
      continue;
    }

    // Multi-provider fusion
    let rrfScore = 0;
    for (const result of duplicates) {
      // Use providerRank if available, otherwise fallback to position in array
      const rank = result.providerRank ?? duplicates.indexOf(result);
      rrfScore += 1 / (k + rank);
    }

    // Keep first result, update score with RRF
    const fused = { ...duplicates[0] };
    fused.score = rrfScore;
    fused.rawScore = rrfScore;
    fusedResults.push(fused);
  }

  return fusedResults;
}
```

**Rationale**: Start inline, refactor to class if complexity grows. Simpler for MVP.

### Step 3: Integration Point

**File**: `/Users/jean-patricksmith/lev/core/bridge/orchestrator/src/router/index.ts`

**Location**: Line 495 (after score normalization, before return)

**Current code** (lines 482-506):
```typescript
// Deduplicate if enabled
let mergedResults: SearchResult[] | undefined;
if (request.options.deduplicate) {
  mergedResults = this.deduplicateResults(collections);
  totalCount = mergedResults.length;
}

// Normalize scores if enabled
if (this.config.normalizeScores) {
  this.normalizeScores(collections);
  if (mergedResults) {
    this.normalizeResultScores(mergedResults);
  }
}

return {
  requestId: request.requestId,
  collections,
  mergedResults,
  // ...
};
```

**Insert after line 495** (between normalization and return):
```typescript
// Apply RRF fusion if requested
if (request.options.ranking === 'rrf' && mergedResults) {
  const k = request.options.rrfConfig?.k ?? 60;
  mergedResults = this.applyRRFFusion(mergedResults, k);

  // Re-sort by RRF scores (descending)
  mergedResults.sort((a, b) => b.score - a.score);

  this.logger.debug(
    { resultCount: mergedResults.length, k },
    'Applied RRF fusion'
  );
}

return {
  // ... existing return
};
```

### Step 4: Update Registry Configuration (Optional)

**File**: `/Users/jean-patricksmith/lev/core/poly/registry.yaml`

Add RRF defaults section (optional, since it's driven by request options):
```yaml
# Defaults
defaults:
  debounce_ms: 100
  timeout_ms: 30000
  health_check_interval_ms: 30000
  circuit_breaker_threshold: 3
  circuit_breaker_timeout_ms: 30000
  rrf_k: 60  # ← Add this line
```

**Note**: Registry update is optional since RRF is request-driven. Can be added later for system-wide defaults.

## Critical Files to Modify

| File | Lines | Changes |
|------|-------|---------|
| `/Users/jean-patricksmith/lev/core/bridge/orchestrator/src/types.ts` | ~155 | Add `'rrf'` to RankingStrategy enum |
| `/Users/jean-patricksmith/lev/core/bridge/orchestrator/src/types.ts` | ~140-153 | Add `rrfConfig?: RRFConfig` to SearchOptions interface |
| `/Users/jean-patricksmith/lev/core/bridge/orchestrator/src/types.ts` | new | Define RRFConfig interface |
| `/Users/jean-patricksmith/lev/core/bridge/orchestrator/src/router/index.ts` | ~565 | Add applyRRFFusion() private method |
| `/Users/jean-patricksmith/lev/core/bridge/orchestrator/src/router/index.ts` | 495 | Insert RRF fusion call before return |
| `/Users/jean-patricksmith/lev/core/poly/registry.yaml` | optional | Add rrf_k to defaults section |

## Testing Strategy

1. **Unit Tests**: Test RRF formula with known rankings
2. **Integration Tests**: Query multiple providers, verify fusion
3. **Edge Cases**:
   - Single provider (RRF degrades to original scoring)
   - No overlap (all results unique across providers)
   - Full overlap (same result from all providers)
   - Missing providerRank field (fallback to position in array)

## Design Decisions Made (Simplified Approach)

1. **Provider Weighting**: NOT IMPLEMENTED in MVP
   - Start simple, add complexity later if needed
   - Future enhancement: weight by daemon health/priority

2. **Latency Consideration**: NOT IMPLEMENTED in MVP
   - Can be added as optional config later
   - Future enhancement: penalize slow providers

3. **K Constant**: Configurable via `RRFConfig.k`, default 60
   - Standard RRF constant, well-documented in literature
   - Allows experimentation if needed

4. **ProviderRank Fallback**: YES
   - If `result.providerRank` not set, use position in results array
   - Ensures robustness across all providers

5. **Architecture**: Inline method, NOT separate class
   - Simpler for MVP, easier to understand
   - Refactor to class if complexity grows

## Implementation Order

1. Update type definitions (types.ts)
2. Add applyRRFFusion() method (router/index.ts)
3. Insert RRF call in aggregateResults() (router/index.ts)
4. Optional: Update registry defaults (registry.yaml)
5. Test with multi-provider queries

## Estimated Complexity: LOW-MEDIUM

- Well-defined insertion point (line 495)
- Clear data structures available
- No architectural changes needed
- Inline implementation (no new files)
- ~40 lines of new code total
