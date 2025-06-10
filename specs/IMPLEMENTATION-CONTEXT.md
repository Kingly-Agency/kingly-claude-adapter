# IMPLEMENTATION CONTEXT - COMPLETE DECISION RECORD
*Written for future-Claude with zero context assumption*

## 🎯 CORE ARCHITECTURAL DECISIONS

### **Decision: /kingly Replaces $agent (EVOLUTION, NOT ADDITION)**
**Context:** Existing $agent system works but needs intelligent routing
**Decision:** `/kingly` completely replaces `$agent` - deprecate old system
**Rationale:** 
- Natural language routing > manual agent selection
- Intelligent context analysis > static template display
- Progressive disclosure > overwhelming 44+ agent menu
**Implementation:** Keep agent/pattern/workflow structure, enhance with smart routing

### **Decision: Simple Template Processing (NOT Complex Variables)**
**Context:** CLAUDE.md needs to be template-generated for modularity
**Decision:** Simple file copy + @ reference resolution, NO complex variables
**Rationale:**
- Maintainability > fancy features
- @ references provide clean separation
- Complex variable systems create template contamination
**Implementation:** `cp templates/CLAUDE.md ./CLAUDE.md` + resolve `@~/.claude/memory/*.md`

### **Decision: Static Memory Modules (NOT Generated)**
**Context:** Need modular CLAUDE.md architecture
**Decision:** Memory modules are static instruction files, not build-generated
**Rationale:**
- User behavioral preferences are static
- No need to regenerate interaction patterns
- Clean separation of concerns
**Implementation:** 
```
memory/
├── interaction-framework.md     → PLAN→VERIFY→ACT→FOLLOW-UP model
├── tool-discipline.md          → Desktop Commander priority, file discipline
├── auto-triggers.md            → Python/package/git auto-detection
├── response-style.md           → CLI optimization, ≤4 lines, results>process
└── development-workflow.md     → Git discipline, quality assurance
```

### **Decision: Assets vs Commands Architecture**
**Context:** Commands need data but shouldn't embed everything in CLAUDE.md
**Decision:** Commands load pre-generated assets dynamically
**Rationale:**
- CLAUDE.md stays clean and focused
- Assets can be large (44+ agents) without bloating core system
- Commands can filter/route based on domain
**Implementation:**
- `/kingly` → loads intelligence, provides smart routing
- `/doc` → loads DOC.md (documentation domain subset)
- `/validate` → loads validation frameworks
- `$agent` → **DEPRECATED**, replaced by `/kingly`

## 🧠 /KINGLY INTELLIGENCE ENGINE SPECIFICATION

### **Context Analysis Engine**
```gherkin
Feature: Intelligent query analysis for agent routing
  As future-Claude implementing /kingly
  I need to understand what user actually needs
  So I can provide relevant recommendations without overwhelming them

  Scenario: Architecture Decision Record (ADR) request
    Given user query contains "ADR", "architecture decision", or "design document"
    When analyzing context
    Then classify as: domain=architecture+documentation, complexity=medium
    And recommend primary agent: Development Engineer:architect (1i)
    And recommend secondary agent: CEO:strategist (1f) for document synthesis
    And suggest patterns: decision-matrix (2c), reversibility-check (2k)
    And offer cross-domain routing: /doc for writing, /validate for checking

  Scenario: Performance optimization request  
    Given user query contains "slow", "performance", "optimize", "bottleneck"
    When analyzing context
    Then classify as: domain=development, complexity=high, urgency=medium
    And recommend primary agent: Development Engineer:performance (1h)
    And recommend secondary agent: Development Engineer:architect (1i)
    And suggest patterns: noise-analysis (2h), extreme-examples (2e)
    And suggest workflows: multi-expert-validation (3h)

  Scenario: Creative problem solving request
    Given user query contains "brainstorm", "ideas", "creative", "alternatives"
    When analyzing context  
    Then classify as: domain=strategy, complexity=variable, creativity=high
    And recommend primary agent: CEO:strategist (1f)
    And suggest patterns: figure-storming (2f), scamper-framework (2m), reverse-brainstorming (2j)
    And suggest workflows: cognitive-parliament (3a)
```

### **Progressive Disclosure Logic**
```typescript
// Pseudo-code for future-Claude implementation
class KinglyEngine {
  analyzeQuery(query: string, conversationContext: string) {
    const analysis = {
      domain: extractDomain(query, conversationContext),
      complexity: assessComplexity(query),
      urgency: detectUrgency(query),
      keywords: extractKeywords(query)
    };
    
    return {
      primaryAgents: matchAgents(analysis, maxResults: 2),
      secondaryAgents: matchAgents(analysis, maxResults: 1, secondary: true),
      patterns: matchPatterns(analysis, maxResults: 3),
      workflows: matchWorkflows(analysis, maxResults: 2),
      crossDomainRouting: suggestDomainCommands(analysis)
    };
  }
}
```

### **Agent Capability Mapping**
```yaml
# Agent capabilities for routing logic
agents:
  "1i_architect":
    domains: [architecture, system-design, technical-decisions]
    keywords: [design, architecture, system, structure, ADR, technical-decision]
    patterns: [decision-matrix, reversibility-check, swot-analysis]
    
  "1f_strategist": 
    domains: [strategy, documentation, long-term-planning]
    keywords: [strategy, document, synthesis, planning, vision]
    patterns: [document-synthesis, soar-analysis, 10-10-10-framework]
    
  "1h_engineer":
    domains: [development, performance, implementation]
    keywords: [code, performance, optimize, debug, implement]
    patterns: [noise-analysis, extreme-examples, vibe-coding]

domain_commands:
  architecture: ["/validate", "/doc"]
  documentation: ["/doc"]
  performance: ["/validate"]
  strategy: ["/doc", "/validate"]
```

## 🏗️ BUILD SYSTEM ARCHITECTURE

### **Build Process Decision Tree**
```
Build Trigger: npm run build
├── build:assets (cache regeneration)
│   ├── Scan mcp-ceo contexts (44+ agents)
│   ├── Scan Kingly contexts (existing)
│   ├── Generate AGENTS.md (complete catalog)
│   ├── Generate DOC.md (documentation domain)
│   ├── Generate FULL.md (comprehensive)
│   └── Generate INDEX.md (directory)
│
├── build:claude (template processing)
│   ├── Read templates/CLAUDE.md
│   ├── Resolve @ references to memory/*.md
│   ├── Simple copy + include resolution
│   └── Output final CLAUDE.md (gitignored)
│
└── validate (system integrity)
    ├── Check @ references exist
    ├── Verify asset structure
    ├── Test command routing
    └── Validate agent organization
```

### **Cache Regeneration Enhancement**
```gherkin
Feature: 44+ agent context scanning and organization
  As build system
  I need to scan all agent contexts from multiple sources
  So that /kingly has complete intelligence to route from

  Scenario: Scan mcp-ceo contexts (primary source)
    Given ~/digital/mcp-ceo/contexts/ contains 44+ YAML files
    When cache regeneration runs
    Then scan all agent, pattern, workflow contexts
    And assign scalable codes: 1a-1z (26), then 2a-2z (18), then 3a-3r (3)
    And categorize by domain: development, documentation, design, business
    And preserve existing Kingly agent organization

  Scenario: Generate domain-specific assets
    Given agents categorized by primary domain
    When generating templates
    Then create DOC.md with documentation-focused agents only
    And create FULL.md with complete organized catalog  
    And create INDEX.md with directory structure
    And update AGENTS.md as comprehensive dashboard

  Scenario: Handle agent conflicts and deduplication
    Given agents from multiple sources (Kingly + mcp-ceo)
    When processing contexts
    Then detect duplicate capabilities
    And prefer mcp-ceo versions for enterprise patterns
    And preserve Kingly-specific customizations
    And maintain backward compatibility with existing codes
```

### **File Structure (Final State)**
```
~/.claude/
├── CLAUDE.md                  → Generated (gitignored)
├── package.json               → Build scripts and dependencies
├── templates/
│   └── CLAUDE.md             → Source template with @ references
├── memory/                   → Static instruction modules
│   ├── interaction-framework.md
│   ├── tool-discipline.md
│   ├── auto-triggers.md
│   ├── response-style.md
│   └── development-workflow.md
├── assets/                   → Generated intelligence assets
│   ├── AGENTS.md            → Complete 44+ agent catalog
│   ├── DOC.md               → Documentation domain dashboard
│   ├── FULL.md              → Comprehensive analysis interface
│   └── INDEX.md             → Directory interface
├── build/                    → Build scripts
│   ├── claude-builder.js    → Template processor
│   ├── asset-generator.js   → Cache regeneration enhancer
│   └── validate-system.js   → System integrity checker
├── test/                     → Testing framework
│   ├── unit/                → Build script tests
│   ├── bdd/                 → Behavior validation
│   └── integration/         → End-to-end workflows
└── workflows/               → Enhanced cache regeneration
    └── cache-regeneration/
        └── execute.js       → Updated for build integration
```

## 🧪 TESTING STRATEGY

### **BDD Test Scenarios for /kingly**
```gherkin
Feature: /kingly intelligent routing validation
  As quality assurance for the intelligence system
  I need to verify /kingly provides relevant recommendations
  So that users get valuable suggestions without cognitive overload

  Scenario: ADR agent recommendation accuracy
    Given user types "/kingly what agent is best for adrs"
    When /kingly processes the query
    Then recommend Development Engineer:architect as primary
    And recommend CEO:strategist as secondary
    And suggest decision-matrix and reversibility-check patterns
    And offer /doc and /validate cross-domain routing
    And provide confidence ratings for recommendations

  Scenario: Performance optimization routing
    Given user types "/kingly help optimize slow API"
    When /kingly analyzes context
    Then detect performance domain from "slow" and "optimize" keywords
    And recommend Development Engineer:performance and architect
    And suggest noise-analysis and extreme-examples patterns
    And provide actionable next steps

  Scenario: Progressive disclosure behavior
    Given user makes simple request
    When /kingly responds
    Then show 2-3 most relevant agents maximum
    And include 2-3 applicable patterns
    And offer "show full catalog" option
    And maintain ≤4 line response unless detail requested
```

### **Unit Tests for Build Scripts**
```javascript
// test/unit/claude-builder.test.js
describe('Template Processing', () => {
  test('should resolve @ references correctly', () => {
    const template = '@~/.claude/memory/tool-discipline.md';
    const resolved = resolveReference(template);
    expect(resolved).toContain('Desktop Commander priority');
  });

  test('should handle missing @ references gracefully', () => {
    const template = '@~/.claude/memory/missing.md';
    expect(() => resolveReference(template)).toThrow(/Reference not found/);
  });
});

// test/unit/asset-generator.test.js  
describe('Cache Regeneration', () => {
  test('should scan 44+ contexts from mcp-ceo', () => {
    const contexts = scanMcpCeoContexts();
    expect(contexts.agents.length).toBeGreaterThanOrEqual(44);
    expect(contexts).toHaveProperty('patterns');
    expect(contexts).toHaveProperty('workflows');
  });

  test('should generate proper agent codes for 44+ agents', () => {
    const codes = generateAgentCodes(44);
    expect(codes).toContain('1a', '1z', '2a', '2r');
    expect(codes.length).toBe(44);
    expect(new Set(codes).size).toBe(44); // All unique
  });
});
```

## 💾 CONTEXT PRESERVATION PROTOCOL

### **Enhanced Session Persistence**
```gherkin
Feature: Context loss prevention for complex architectural discussions
  As developer working on complex systems
  I need comprehensive context capture during planning
  So that session crashes don't lose critical architectural decisions

  Scenario: Architectural Decision Record capture
    Given complex architectural discussion with multiple decisions
    When user types "/save architecture" or system detects decision points
    Then extract decision context and rationale
    And document alternatives considered and rejected
    And record implementation approach and consequences  
    And save as ADR in specs/decisions/YYYY-MM-DD-[topic].md

  Scenario: Implementation checkpoint capture
    Given significant progress on multi-phase implementation
    When user types "/save checkpoint" or major milestone reached
    Then document current state and completed work
    And record next steps and dependencies
    And update project status with concrete progress markers
    And create recovery point for session restoration
```

### **Behavioral Context Documentation**
```markdown
# USER BEHAVIORAL PREFERENCES (for future-Claude)

## File Operations
- **ALWAYS** use Desktop Commander (mcp__desktop-commander__*) over standard tools
- **NEVER** create files unless explicitly required for goal achievement
- **ALWAYS** prefer editing existing files over creating new ones
- **ASK** before creating any new directories or file structures

## Communication Style  
- **CLI-optimized**: ≤4 lines unless detail explicitly requested
- **Results > process**: Actions over lengthy descriptions
- **Direct and concise**: One word answers when appropriate
- **Matrix hacker aesthetic**: Follow ~/.claude/style.md guidelines

## Development Workflow
- **Git discipline**: Only commit when explicitly requested
- **Package managers**: Check for lock files, prefer pnpm
- **Python environments**: Use domain-based conda envs, never create new venvs
- **Quality assurance**: Always run lint/typecheck after code changes

## Auto-Triggers (execute immediately when detected)
- **Python work** → Read ~/digital/_infra/PYTHON_ENVIRONMENTS.md
- **Package operations** → Detect lock files, use existing manager
- **Memory refresh** → Every 15 turns or before complex operations
- **Perplexity requests** → "perp"/"perp this" triggers enhanced prompting
```

## 🚀 IMPLEMENTATION PRIORITY MATRIX

### **Phase 1: Foundation (HIGH PRIORITY)**
1. **Fix cache regeneration** - Scan 44+ agents from mcp-ceo ✅ CRITICAL
2. **Build /kingly engine** - Context analysis + intelligent routing ✅ CRITICAL  
3. **Create static memory modules** - Tool discipline, auto-triggers, etc. ✅ HIGH
4. **Test /kingly simulation** - Verify ADR recommendation works ✅ HIGH

### **Phase 2: Integration (MEDIUM PRIORITY)**
5. **Template processing** - @ reference resolution for CLAUDE.md ✅ MEDIUM
6. **Domain assets** - Generate DOC.md, FULL.md, INDEX.md ✅ MEDIUM
7. **Command routing** - /doc, /validate implementations ✅ MEDIUM
8. **Build validation** - System integrity and health checks ✅ MEDIUM

### **Phase 3: Quality (ONGOING)**
9. **BDD testing** - /kingly behavior validation ✅ MEDIUM
10. **Context preservation** - Enhanced $save with ADR capture ✅ LOW
11. **Documentation** - Complete specs with decision rationale ✅ LOW

---

**RECOVERY INSTRUCTION FOR FUTURE-CLAUDE:**
If you find this file, you have complete context. The /kingly simulation showing "ADR → architect + strategist recommendation" was the breakthrough. Implement that first.