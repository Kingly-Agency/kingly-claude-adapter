# CLAUDE.md - STREAMLINED INTELLIGENCE

## 🎯 CORE INTERACTION MODEL (ALWAYS FOLLOW)
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

## 🧠 COMMAND RECOGNITION (CRITICAL - EXECUTE IMMEDIATELY)
When user message starts with any of these commands, STOP ALL OTHER PROCESSING and execute:

- **`$agent`** → IMMEDIATELY load ~/.claude/AGENTS.md, enter Kingly Intelligence System, show agent template
- **`$save`** → IMMEDIATELY execute session persistence protocol  
- **`$load`** → IMMEDIATELY execute context restoration protocol

DO NOT treat these as regular requests. DO NOT use other tools first. EXECUTE THE COMMAND DIRECTLY.

## 💾 CORE COMMANDS

### **$save** [mode] - Intelligent Session Management
**Usage:**
- `$save` - Quick progress update + constitutional compliance check
- `$save handoff` - Full session context dump for handoff

**Process:**
1. Read current _2do.md  
2. Check project CLAUDE.md for constitutional framework adherence
3. Update progress with constitutional awareness
4. Auto-detect: Major milestone = handoff mode, minor progress = quick mode
5. Auto-commit if significant changes

### **$load** - Universal Context Restoration
**Process:**
1. Read _2do.md for session context
2. Read project CLAUDE.md if exists (constitutional framework)
3. Parse SESSION_REFS and CREATED_FILES from header
4. Use mcp__desktop-commander__read_file for each reference
5. Load context silently (no user output)
6. Ready to continue with complete awareness (session + project + constitutional)

### **$agent** - Kingly Intelligence System
**Core System:**
- Load ~/.claude/AGENTS.md and follow its system instructions exactly
- Show user template from AGENTS.md (18 agents, 16 patterns, 8 workflows)
- All agent logic, routing, and capabilities preserved
- Constitutional framework awareness added to agent loading
- Natural language routing, quick codes, contextual suggestions all maintained

## 🛠️ TOOL USAGE RULES (CRITICAL - READ EVERY SESSION)

### Desktop Commander Priority
**File Operations:** Always use Desktop Commander for maximum compatibility and permission handling.

► **READS**: Always use `mcp__desktop-commander__read_file` for ALL file reading
► **SEARCHES**: Always use `mcp__desktop-commander__search_code` for content searches  
► **LISTS**: Always use `mcp__desktop-commander__list_directory` for directory listings
► **WRITES**: Check user's auto-accept setting first:
  - **Auto-accept ENABLED** (Shift+Tab) → Use `mcp__desktop-commander__write_file`
  - **Auto-accept DISABLED** → Use Write/Edit/MultiEdit (for user review)
► **NEVER**: Use standard Read tool when Desktop Commander available

### Standard Tools (Limited Use)
**Use for:** Write/Edit/MultiEdit when auto-accept is OFF, simple glob operations, notebooks, git operations, web fetch

### Tool Discipline Enforcement
**Memory Refresh:** Every 15 turns, re-read this CLAUDE.md to maintain tool discipline. If you start using Read instead of Desktop Commander, STOP and refresh context.

## 🧠 NATURAL LANGUAGE RECOGNITION

### Perplexity Integration (EXECUTE IMMEDIATELY)
- **"perp"** / **"perp this"** / **"perp it"** → IMMEDIATELY:
  1. Act as agentic prompt architect
  2. Analyze conversation context and user intent
  3. Create sophisticated, contextually-aware prompt
  4. Execute via mcp__perplexity-ask with enhanced prompt

### Standard Triggers
- **"continue"** or **"keep going"** → Efficient progression without interruption
- **"refresh context"** → Re-read all framework files and reload context
- **"pivot approach"** → Log direction change while maintaining momentum

## 📊 PROGRESS TRACKING (CONTEXT-AWARE)
Display project status with visual indicators for multi-step workflows and current action context.

**Multi-step workflows**: {project} | [🟩🟩🟩⬜⬜] 60% | {current step}
**Single tasks**: {project} | ✅ Complete | {result}
**Working**: {project} | 🔄 Working | {action}
**Failed**: {project} | ❌ Failed | {issue}

Show progress bars ONLY for defined sequential steps.

## 📦 PACKAGE MANAGERS
1. Check for lock files first (pnpm-lock.yaml, yarn.lock, package-lock.json)
2. Use existing manager if found
3. Default to **pnpm** if no lock file exists
4. Expo: `pnpm install` first, then `npx expo install`

## 🐍 PYTHON ENVIRONMENT AUTO-DETECTION (CRITICAL)
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
3. Use activation scripts from ~/digital/_infra/tools/ when appropriate

**Environment Selection:**
- **AI/ML projects**: CoachBuddy, YOLO, TensorFlow, PyTorch, computer vision
- **Web projects**: FastAPI, Django, Flask, APIs, scrapers
- **Data projects**: Jupyter, pandas, visualization, analytics

**NEVER**: Create new virtual environments unless explicitly requested and justified.

## 💬 RESPONSE STYLE
Balance conciseness with clarity for optimal command-line interface communication.

**Content Priorities:**
- Results > process explanations
- Actions > lengthy descriptions  
- Code examples > theoretical explanations

**Formatting Guidelines:**
- Use paragraphs for in-depth content explanation
- Use bullets for action lists and structured information
- Include status context when relevant
- Maintain professional but efficient tone

## 🔄 AUTOMATIC PROTOCOLS

### Memory Refresh (Auto-Triggered)
**Triggers:** Every 15 turns, before complex operations, when user says "refresh"
**Actions:**
1. Re-read ~/.claude/CLAUDE.md (this file)
2. Re-read project CLAUDE.md if exists (constitutional framework)
3. Re-read _2do.md for current context
4. Verify tool usage discipline (Desktop Commander)

### Git Workflow Integration
**$save Auto-Commit Rules:**
- Significant = new features, bug fixes, major progress
- Message format: "feat: implement X" or "fix: resolve Y" 
- Branch strategy: main = stable, feature/* = new work

## 🚫 STRICT DISCIPLINES

### File Discipline
Maintain clean project structure by following strict file creation and organization rules detailed in ~/.claude/dev.md.

► NEVER create files unless explicitly requested
► NEVER create test files outside tests/ directory
► NEVER create temporary directories without cleanup
► ALWAYS prefer editing over creating
► ASK before creating any new directories or file structures

### Constitutional Discipline (Project-Aware)
► Always check project CLAUDE.md for constitutional framework
► Ensure LLM-first principles when applicable
► Maintain bidirectional flow patterns
► Preserve YAML as source of truth

## 🎨 THEME & STYLING
Visual styling and terminal presentation rules are maintained in ~/.claude/style.md for consistent matrix hacker aesthetic.

## 🧪 EXPERIMENTAL FEATURES
Non-core features and testing protocols are documented in ~/.claude/experiments.md to maintain clean separation between stable and experimental functionality.

---
*Streamlined Intelligence - Enhanced with modular documentation architecture*