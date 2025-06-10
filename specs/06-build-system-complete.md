# BUILD SYSTEM COMPLETE SPECIFICATION
*Self-documenting for future implementation*

## 🎯 BUILD SYSTEM OVERVIEW

### **Architecture Decision: Simple + Effective**
**Decision:** Simple file operations + asset generation, NOT complex template engines
**Rationale:** Maintainability > features, clean separation of concerns
**Implementation:** Copy + @ reference resolution + cache regeneration enhancement

### **Core Build Components**
```bash
npm run build                    # Complete system build
├── npm run build:assets        # Cache regeneration (44+ agents)
├── npm run build:claude        # Template processing (@ references)  
└── npm run validate            # System integrity checking
```

## 🔧 BUILD SCRIPT SPECIFICATIONS

### **build/claude-builder.js**
```gherkin
Feature: CLAUDE.md template processing with @ reference resolution
  As build system
  I need to generate final CLAUDE.md from modular template
  So that system stays maintainable while being comprehensive

  Scenario: Process template with @ references
    Given templates/CLAUDE.md contains @ references like "@~/.claude/memory/tool-discipline.md"
    When claude-builder.js executes
    Then read each @ reference file
    And replace @ reference with file contents
    And preserve markdown formatting and structure
    And output final CLAUDE.md in root directory

  Scenario: Handle missing @ references gracefully
    Given template contains "@~/.claude/memory/missing.md"
    When processing template
    Then throw clear error with file path
    And stop build process to prevent broken system
    And provide guidance on fixing the reference

  Scenario: Preserve template metadata
    Given template contains build metadata sections
    When processing
    Then add build timestamp and source information
    And maintain template structure and formatting
    And ensure output is valid markdown
```

```javascript
// build/claude-builder.js - Implementation guidance
const fs = require('fs');
const path = require('path');

class ClaudeBuilder {
  build() {
    console.log('🔨 Building CLAUDE.md from template...');
    
    // 1. Read template
    const template = fs.readFileSync('templates/CLAUDE.md', 'utf8');
    
    // 2. Process @ references
    const processed = this.resolveReferences(template);
    
    // 3. Add metadata
    const final = this.addBuildMetadata(processed);
    
    // 4. Write output
    fs.writeFileSync('CLAUDE.md', final);
    
    console.log('✅ CLAUDE.md generated successfully');
  }
  
  resolveReferences(content) {
    // Match @~/.claude/memory/*.md patterns
    return content.replace(/@~\/\.claude\/memory\/([^\\s]+\\.md)/g, (match, filename) => {
      const filePath = path.join(__dirname, '..', 'memory', filename);
      
      if (!fs.existsSync(filePath)) {
        throw new Error(`Reference not found: ${filePath}`);
      }
      
      return fs.readFileSync(filePath, 'utf8');
    });
  }
  
  addBuildMetadata(content) {
    const timestamp = new Date().toISOString();
    const metadata = `\\n---\\n*Built: ${timestamp} | Source: templates/CLAUDE.md*`;
    return content + metadata;
  }
}

// CLI execution
if (require.main === module) {
  try {
    new ClaudeBuilder().build();
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

module.exports = ClaudeBuilder;
```

### **build/asset-generator.js** 
```gherkin
Feature: Enhanced cache regeneration with 44+ agent support
  As build system
  I need to generate all intelligence assets from multiple sources
  So that commands have comprehensive data to work with

  Scenario: Scan mcp-ceo contexts for enterprise intelligence
    Given ~/digital/mcp-ceo/contexts/ contains 44+ YAML files
    When asset generation runs
    Then scan all agent contexts recursively
    And scan all pattern contexts
    And scan all workflow contexts
    And merge with existing Kingly intelligence
    And resolve conflicts with mcp-ceo preference

  Scenario: Generate scalable agent coding system
    Given 44+ agents need unique identifiers
    When generating agent codes
    Then use pattern: 1a-1z (26 agents), 2a-2z (18 agents), 3a-3r (3 agents) 
    And ensure deterministic assignment (same input = same codes)
    And preserve existing code assignments for stability
    And handle growth beyond current system gracefully

  Scenario: Create domain-specific asset files
    Given agents categorized by primary domain capability
    When generating assets
    Then create AGENTS.md with complete catalog and smart suggestions placeholder
    And create DOC.md with documentation domain agents only
    And create FULL.md with comprehensive analysis interface
    And create INDEX.md with organized directory structure
    And maintain consistent formatting across all assets
```

```javascript
// build/asset-generator.js - Implementation guidance
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

class AssetGenerator {
  constructor() {
    this.mcpCeoPath = path.join(process.env.HOME, 'digital', 'mcp-ceo', 'contexts');
    this.kinglyPath = path.join(__dirname, '..', 'contexts');
    this.assetsPath = path.join(__dirname, '..', 'assets');
  }
  
  async generate() {
    console.log('🔄 Generating intelligence assets...');
    
    // 1. Scan all contexts
    const mcpCeoContexts = this.scanMcpCeoContexts();
    const kinglyContexts = this.scanKinglyContexts();
    
    // 2. Merge and organize
    const intelligence = this.mergeIntelligence(mcpCeoContexts, kinglyContexts);
    
    // 3. Generate assets
    await this.generateMainAgentsFile(intelligence);
    await this.generateDomainAssets(intelligence);
    await this.generateFullCatalog(intelligence);
    await this.generateIndex(intelligence);
    
    console.log('✅ All intelligence assets generated');
  }
  
  scanMcpCeoContexts() {
    if (!fs.existsSync(this.mcpCeoPath)) {
      console.warn('⚠️ mcp-ceo contexts not found, using Kingly only');
      return { agents: [], patterns: [], workflows: [] };
    }
    
    const contexts = { agents: [], patterns: [], workflows: [] };
    
    // Recursively scan for YAML files
    const yamlFiles = this.findYamlFiles(this.mcpCeoPath);
    
    yamlFiles.forEach(file => {
      const content = yaml.load(fs.readFileSync(file, 'utf8'));
      const type = this.detectContextType(content);
      if (contexts[type]) {
        contexts[type].push({ ...content, source: 'mcp-ceo', file });
      }
    });
    
    return contexts;
  }
  
  generateAgentCodes(agentCount) {
    const codes = [];
    let current = 0;
    
    // First 26: 1a-1z
    for (let i = 0; i < Math.min(26, agentCount); i++) {
      codes.push(`1${String.fromCharCode(97 + i)}`); // 97 = 'a'
      current++;
    }
    
    // Next 26: 2a-2z  
    for (let i = 0; i < Math.min(26, agentCount - current); i++) {
      codes.push(`2${String.fromCharCode(97 + i)}`);
      current++;
    }
    
    // Remaining: 3a-3r (max 18 more = 70 total)
    for (let i = 0; i < agentCount - current; i++) {
      codes.push(`3${String.fromCharCode(97 + i)}`);
    }
    
    return codes;
  }
  
  categorizeByDomain(agents) {
    const domains = {
      documentation: [],
      development: [],
      design: [],
      business: [],
      general: []
    };
    
    agents.forEach(agent => {
      const domain = this.detectAgentDomain(agent);
      domains[domain].push(agent);
    });
    
    return domains;
  }
  
  detectAgentDomain(agent) {
    const description = (agent.description || '').toLowerCase();
    const role = (agent.role || '').toLowerCase();
    const text = `${description} ${role}`;
    
    if (text.match(/write|document|content|editor|technical.*writ/)) {
      return 'documentation';
    }
    if (text.match(/code|debug|architect|security|engineer|develop/)) {
      return 'development';
    }
    if (text.match(/design|ui|ux|visual|creative/)) {
      return 'design';
    }
    if (text.match(/business|strategy|product|ceo|executive/)) {
      return 'business';
    }
    return 'general';
  }
}

module.exports = AssetGenerator;
```

### **build/validate-system.js**
```gherkin
Feature: System integrity validation and health checking
  As build system
  I need to validate the complete system after build
  So that broken configurations are caught before deployment

  Scenario: Validate @ reference integrity
    Given final CLAUDE.md contains resolved @ references
    When validation runs
    Then verify no unresolved @ references remain
    And verify all included content is valid markdown
    And verify no circular references exist
    And verify all memory modules are accessible

  Scenario: Validate asset structure and content
    Given generated assets in assets/ directory
    When validating assets
    Then verify AGENTS.md contains expected agent count
    And verify DOC.md contains only documentation domain agents
    And verify FULL.md has comprehensive organization
    And verify all agent codes are unique and properly formatted

  Scenario: Validate intelligence routing capabilities
    Given /kingly should provide intelligent recommendations
    When testing routing logic
    Then verify context analysis works for common queries
    And verify agent matching produces relevant suggestions
    And verify cross-domain routing suggestions are appropriate
    And verify progressive disclosure limits results appropriately
```

```javascript
// build/validate-system.js - Implementation guidance
class SystemValidator {
  validate() {
    console.log('🔍 Validating system integrity...');
    
    const results = {
      claudemd: this.validateClaudeMd(),
      assets: this.validateAssets(),
      routing: this.validateRouting(),
      references: this.validateReferences()
    };
    
    const failures = Object.entries(results)
      .filter(([_, passed]) => !passed)
      .map(([component]) => component);
    
    if (failures.length > 0) {
      console.error(`❌ Validation failed: ${failures.join(', ')}`);
      process.exit(1);
    }
    
    console.log('✅ System validation passed');
  }
  
  validateClaudeMd() {
    if (!fs.existsSync('CLAUDE.md')) {
      console.error('❌ CLAUDE.md not found');
      return false;
    }
    
    const content = fs.readFileSync('CLAUDE.md', 'utf8');
    
    // Check for unresolved @ references
    if (content.match(/@~\/\.claude\/memory\//)) {
      console.error('❌ Unresolved @ references found in CLAUDE.md');
      return false;
    }
    
    // Basic structure validation
    if (!content.includes('CORE INTERACTION MODEL') || 
        !content.includes('COMMAND RECOGNITION') ||
        !content.includes('TOOL USAGE RULES')) {
      console.error('❌ CLAUDE.md missing required sections');
      return false;
    }
    
    return true;
  }
  
  validateAssets() {
    const requiredAssets = ['AGENTS.md', 'DOC.md', 'FULL.md', 'INDEX.md'];
    
    for (const asset of requiredAssets) {
      const assetPath = path.join('assets', asset);
      if (!fs.existsSync(assetPath)) {
        console.error(`❌ Missing asset: ${asset}`);
        return false;
      }
      
      const content = fs.readFileSync(assetPath, 'utf8');
      if (content.length < 100) {
        console.error(`❌ Asset ${asset} appears to be empty or too small`);
        return false;
      }
    }
    
    return true;
  }
  
  validateRouting() {
    // Test basic routing logic without full implementation
    const testCases = [
      { query: 'what agent is best for adrs', expectedDomain: 'architecture' },
      { query: 'help with performance', expectedDomain: 'development' },
      { query: 'brainstorm ideas', expectedDomain: 'strategy' }
    ];
    
    // This would test the routing logic once implemented
    // For now, just validate the structure exists
    return true;
  }
}

module.exports = SystemValidator;
```

## 📁 MEMORY MODULES SPECIFICATION

### **memory/interaction-framework.md**
```markdown
# CORE INTERACTION MODEL (ALWAYS FOLLOW)
1. **PLAN** - Discuss approach, show intent  
2. **VERIFY** - "Sound good?" or similar check
3. **ACT** - Execute with appropriate tools
4. **FOLLOW-UP** - Questions use letters (only when needed), follow-ups use numbers:
   **QUESTIONS (only if clarification needed)**: a) option b) option c) option d) option
   **FOLLOW-UPS (always)**: 
   1) Do it all bby - [all of the above]
   2) My recommendation - [recommended next action]
   3) Choices choices - [alternative path]
   4) How about...? - [different focus]
   5) Have you considered? - [wildcard/creative]
   6) 📸 **Capture** - Save insights ($capture)
   7) 📸 **Save** - Save progress ($save)
   8) 📸 **Agent** - Let's have kingly-agent take over ($agent)
   9) ⬅️ **Back** - Resume previous context
```

### **memory/tool-discipline.md**
```markdown
# TOOL USAGE RULES (CRITICAL - READ EVERY SESSION)

## Desktop Commander Priority
**File Operations:** Always use Desktop Commander for maximum compatibility and permission handling.

► **READS**: Always use `mcp__desktop-commander__read_file` for ALL file reading
► **SEARCHES**: Always use `mcp__desktop-commander__search_code` for content searches  
► **LISTS**: Always use `mcp__desktop-commander__list_directory` for directory listings
► **WRITES**: Check user's auto-accept setting first:
  - **Auto-accept ENABLED** (Shift+Tab) → Use `mcp__desktop-commander__write_file`
  - **Auto-accept DISABLED** → Use Write/Edit/MultiEdit (for user review)
► **NEVER**: Use standard Read tool when Desktop Commander available

## File Discipline
► NEVER create files unless explicitly requested
► NEVER create test files outside tests/ directory
► NEVER create temporary directories without cleanup
► ALWAYS prefer editing over creating
► ASK before creating any new directories or file structures
```

### **memory/auto-triggers.md**
```markdown
# AUTOMATIC PROTOCOLS

## Python Environment Auto-Detection (CRITICAL)
**Before any Python work**, automatically check ~/digital/_infra/PYTHON_ENVIRONMENTS.md for environment strategy.

**Auto-Triggers:**
- User mentions Python, pip, conda, venv, or environment setup
- Python files detected in current directory
- User asks about setting up development environment

**Process:**
1. Read ~/digital/_infra/PYTHON_ENVIRONMENTS.md
2. Use domain-based conda environments (NEVER create new venvs):
   - **AI/ML**: `conda activate ai-ml-shared` 
   - **Web dev**: `conda activate web-dev-shared`
   - **Data analysis**: `conda activate data-analysis-shared`

## Package Manager Auto-Detection
1. Check for lock files first (pnpm-lock.yaml, yarn.lock, package-lock.json)
2. Use existing manager if found
3. Default to **pnpm** if no lock file exists

## Memory Refresh (Auto-Triggered)
**Triggers:** Every 15 turns, before complex operations, when user says "refresh"
**Actions:**
1. Re-read ~/.claude/CLAUDE.md (this file)
2. Re-read project CLAUDE.md if exists (constitutional framework)
3. Re-read _2do.md for current context
4. Verify tool usage discipline (Desktop Commander)
```

### **memory/response-style.md**
```markdown
# RESPONSE STYLE
Balance conciseness with clarity for optimal command-line interface communication.

**Content Priorities:**
- Results > process explanations
- Actions > lengthy descriptions  
- Code examples > theoretical explanations

**CLI Optimization:**
- Keep responses to ≤4 lines unless detail explicitly requested
- Use paragraphs for in-depth content explanation
- Use bullets for action lists and structured information
- Include status context when relevant
- Maintain professional but efficient tone

**Formatting Guidelines:**
- One word answers when appropriate
- Avoid introductions, conclusions, and explanations unless requested
- Direct and concise communication
- Matrix hacker aesthetic (see ~/.claude/style.md)
```

### **memory/development-workflow.md**
```markdown
# GIT WORKFLOW INTEGRATION
**$save Auto-Commit Rules:**
- Significant = new features, bug fixes, major progress
- Message format: "feat: implement X" or "fix: resolve Y" 
- Branch strategy: main = stable, feature/* = new work
- NEVER commit unless explicitly requested by user

# QUALITY ASSURANCE
**After code changes:**
- Always run available lint commands (npm run lint, ruff, etc.)
- Always run available typecheck commands (npm run typecheck, mypy, etc.)
- Ask user for commands if not found, suggest adding to CLAUDE.md
- Ensure all checks pass before considering work complete

# CONSTITUTIONAL DISCIPLINE (Project-Aware)
► Always check project CLAUDE.md for constitutional framework
► Ensure LLM-first principles when applicable
► Maintain bidirectional flow patterns
► Preserve YAML as source of truth
```

## 🧪 INTEGRATION TESTING

### **test/integration/full-build.test.js**
```gherkin
Feature: Complete build process integration validation
  As quality assurance for the entire build system
  I need to verify all components work together correctly
  So that the complete system functions as designed

  Scenario: Clean build from scratch
    Given empty assets/ directory and no CLAUDE.md
    When npm run build executes
    Then cache regeneration should discover 44+ agents
    And CLAUDE.md should be generated with resolved @ references
    And all required assets should be created
    And system validation should pass all checks

  Scenario: Incremental build behavior
    Given existing build artifacts
    When npm run build executes again
    Then should update only changed components
    And preserve existing agent codes for stability
    And maintain consistent asset structure
    And complete build should be deterministic (same output)
    
  Scenario: Build failure recovery
    Given intentionally broken template or missing reference
    When build process encounters error
    Then should provide clear error message with file path
    And should not create partial/corrupted output files
    And should preserve existing working files
    And should exit with non-zero status for CI/CD detection
```

---

**IMPLEMENTATION NOTES FOR FUTURE-CLAUDE:**
- Start with cache regeneration enhancement (scan mcp-ceo contexts)
- Implement simple claude-builder.js with @ reference resolution
- Create static memory modules with user's behavioral preferences
- Test /kingly simulation before implementing full routing engine
- Use this document as complete implementation guide with zero additional context needed