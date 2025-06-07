# ADR 002: Agent Endpoint Optimization - Verbose vs YAML Keywords

## Status
Proposed

## Context
We discovered that the current AGENTS.md has verbose agent descriptions (200-300 chars each with personality, communication style, behavioral patterns) vs the real kingly dev agent which uses simple YAML endpoints with keywords.

Current research shows wordiness is wasteful in prompt engineering - keywords are more effective.

## Current State Analysis

### Scanner Results (Real Kingly Data)
- **2 Agents**: CEO, Development Engineer
- **16 Patterns**: SWOT, Decision Matrix, SCAMPER, etc.
- **8 Kingly Workflows**: Multi-expert validation, Document synthesis, etc.
- **3 Synths**: Marketing wizard, Technical book editor/writer
- **5 Claude Workflows**: Cache regeneration, Dynamic synthesis, etc.
- **Total Contexts**: 34

### Problem Identified
Cache regeneration workflow is documentation only - doesn't actually execute scanning. AGENTS.md shows "0 agents found" despite real agents existing.

## Comparison: Verbose vs Endpoint Approach

### Test Scenario 1: Security Analysis Request
**User**: "I need help securing my API endpoints"

**Verbose Agent Response** (Current):
```
*Loads Security Auditor* "I'm your Security Auditor agent - a vigilant guardian who thinks like an attacker. I'll help you secure your API endpoints with a security-first perspective and risk quantification. Let me start by scanning for vulnerabilities and implementing defense in depth strategies..."
```

**Endpoint Response** (Proposed):
```
*Loads dev.security* "Analyzing API security. I'll focus on vulnerability assessment, security patterns, and threat modeling. What specific endpoints need securing?"
```

### Test Scenario 2: Performance Issues
**User**: "My app is slow, help me optimize it"

**Verbose Agent Response**:
```
*Loads Performance Optimizer* "I'm your Performance Optimizer - an efficiency-focused engineer who eliminates waste. I'll help you with metrics-driven optimization using clear baselines and targets. Let me start with systematic bottleneck identification..."
```

**Endpoint Response**:
```
*Loads dev.performance* "Optimizing performance. I'll focus on bottleneck analysis, monitoring, and resource optimization. What specific performance issues are you seeing?"
```

### Test Scenario 3: Architecture Design
**User**: "I need to design a new microservice"

**Verbose Agent Response**:
```
*Loads LLM-First Architect* "I'm your LLM-First Architect - a visionary systems thinker who sees AI-native solutions first. Before we design anything, let me ask: where's the LLM in this? I'll help you with emergent system design using context-driven development..."
```

**Endpoint Response**:
```
*Loads dev.llm_first* "Designing microservice with AI-native approach. I'll focus on LLM integration, prompt engineering, and context design. What's the service purpose?"
```

## Analysis

### Verbose Approach (Current)
**Pros:**
- Rich personality and behavioral guidance
- Clear communication style definition
- Detailed tool preferences

**Cons:**
- ~200-300 chars per agent of verbose description
- Wastes tokens on personality details
- May constrain natural Claude capabilities
- Harder to maintain and update

### Endpoint Approach (YAML Keywords)
**Pros:**
- Minimal token usage (~50 chars per endpoint)
- Leverages Claude's natural capabilities
- Easy to maintain and extend
- Follows proven prompt engineering research
- Aligns with kingly architecture

**Cons:**
- Less explicit behavioral guidance
- May need refinement for edge cases

## Decision

**Recommend: Endpoint Approach with Selected Capabilities**

Optimal endpoint structure:
```yaml
dev:
  endpoints:
    llm_first:
      focus: "AI-native solutions"
      capabilities: ["llm_integration", "prompt_engineering", "context_design"]
    
    env:
      focus: "Environment management" 
      capabilities: ["env_analysis", "api_orchestration", "config_optimization"]
      
    repo:
      focus: "Codebase analysis"
      capabilities: ["code_analysis", "pattern_detection", "technical_debt"]
      
    bdd:
      focus: "Behavior-driven development"
      capabilities: ["feature_specification", "test_design", "acceptance_criteria"]
      
    performance:
      focus: "System optimization"
      capabilities: ["bottleneck_analysis", "monitoring", "resource_optimization"]
      
    debug:
      focus: "Problem-solving"
      capabilities: ["error_analysis", "stack_trace_reading", "profiling"]
      
    security:
      focus: "Vulnerability assessment"
      capabilities: ["security_patterns", "threat_modeling", "penetration_testing"]
```

## Consequences
- More efficient token usage
- Faster cache regeneration
- Easier maintenance
- Better alignment with kingly architecture
- May require testing to ensure behavior quality maintained

## Implementation
1. Update cache regeneration to use real kingly data
2. Replace verbose agents with YAML endpoints
3. Test endpoint behavior vs verbose behavior
4. Iterate based on quality assessment