# CLAUDE.md - CONSOLIDATED GLOBAL INSTRUCTIONS

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

## 📊 PROGRESS TRACKING (CONTEXT-AWARE)
- **Multi-step workflows**: {project} | [🟩🟩🟩⬜⬜] 60% | {current step}
- **Single tasks**: {project} | ✅ Complete | {result}
- **Working**: {project} | 🔄 Working | {action}
- **Failed**: {project} | ❌ Failed | {issue}
- Show progress bars ONLY for defined sequential steps

## 🛠️ TOOL USAGE RULES (CRITICAL - READ EVERY SESSION)
### Desktop Commander (READ RULES)
- **READS**: ALWAYS use mcp__desktop-commander__read_file for ALL file reading
- **WRITES**: Check user's auto-accept setting first:
  - **Auto-accept ENABLED** (Shift+Tab) → Use mcp__desktop-commander__write_file
  - **Auto-accept DISABLED** → Use Write/Edit/MultiEdit (for user review)
- **WHEN UNSURE**: Ask user about auto-accept status before writing
- **NEVER**: Use standard Read tool when Desktop Commander available
- **OTHER**: Always use DC for search_code, list_directory, batch operations

### Standard Tools (WRITE/EDIT ONLY)  
- **Use for**: Write/Edit/MultiEdit when auto-accept is OFF
- **Also for**: simple glob, notebooks, git operations, web fetch
- **Permissions**: Follow Claude Code auto-accept setting

### 🔄 REFRESH REMINDER
- **Every 15 turns**: Re-read this CLAUDE.md to maintain tool discipline
- **If I start using Read instead of DC**: STOP and refresh context

## 🔤 SPECIAL COMMANDS (WORKING PATTERNS)
- **"perp"** → Use perplexity with advanced reasoning prompts
- **"save"** → Update _2do.md with progress + commit if significant
- **"pivot"** → Log direction change, maintain momentum  
- **"g"** → Continue efficiently
- **"refresh"** → Re-read CLAUDE.md files and context

## 📦 PACKAGE MANAGERS
1. Check for lock files first (pnpm-lock.yaml, yarn.lock, package-lock.json)
2. Use existing manager if found
3. Default to **pnpm** if no lock file exists
4. Expo: `pnpm install` first, then `npx expo install`

## 🚀 BEHAVIOR MODES
- **Questions ("?")** → Analyze only, no edits
- **Solutioning** → Creative thinking, verify plans  
- **Implementation** → Execute after verification

## 📝 FILE DISCIPLINE
- NEVER create files unless explicitly requested
- NEVER create test files outside tests/
- NEVER create temporary directories without cleanup
- ALWAYS prefer editing over creating
- NO documentation files unless requested

## 💬 RESPONSE STYLE
- Concise bullets > paragraphs
- Code > explanations
- Actions > descriptions  
- Results > process
- Status banner for context

## 💾 $ COMMAND SYSTEM (IMPLEMENT THESE)

### **$save** - Quick Progress Update
1. Read current _2do.md  
2. Update progress section with current status
3. Add recent accomplishments
4. Keep it concise (progress only, not full context)

### **$next** - Session Handoff  
1. Read _2do.md current content
2. Add session context dump at TOP with references header:
   ```
   <!-- SESSION_REFS: file1.md, file2.md -->
   <!-- CREATED_FILES: new-file.md, another-file.md -->
   ```
3. Include full conversation context, decisions, insights
4. List all files created this session
5. Set up next session to continue seamlessly

### **$load** - Memory Refresh (Silent)
1. Read _2do.md  
2. Parse SESSION_REFS and CREATED_FILES from header
3. Use mcp__desktop-commander__read_file for each reference
4. Load context silently (no user output)
5. Ready to continue work

### **$capture** - Smart Documentation
1. Analyze conversation for key topics/insights
2. Default location: docs/drafts/
3. If user says "capture as adr" → docs/adr/
4. Show summary + location (80% confidence = auto-execute)
5. Ask if <80% confidence

### **$agent** - Kingly Intelligence System  
- Load ~/.claude/AGENTS.md and follow its system instructions
- Show user template from AGENTS.md (not from templates/)
- All agent logic and rules are in AGENTS.md

### **$learn** - Workflow Learning System
1. Read ~/.claude/LEARN.md and follow its learning protocols
2. Analyze recent conversation context for successful patterns
3. Assess workflow promotion potential (synths → official)
4. Generate self-learning assessment with recommendations
5. Follow numbered menu system for workflow capture

## 🔄 GIT WORKFLOW & AUTO-SAVE
### Commit Rules
- **$save**: Check git status, commit if significant changes
- **Significant = new features, bug fixes, major progress**
- **Message format**: "feat: implement X" or "fix: resolve Y" 
- **Auto-commit**: After $save if files changed

### Git Integration
- **Commit timing**: Feature complete, tests pass, milestones
- **Branch strategy**: main = stable, feature/* = new work
- **Before pivoting**: Commit current work  
- **Semantic messages**: feat:, fix:, refactor:, test:, docs:

## 🧠 MEMORY REFRESH PROTOCOL
### Auto-Refresh Triggers
- Every 15 turns (check turn counter)
- Before implementation phases
- After 20+ messages in session
- When user says "refresh" or "check father"
- When complexity increases
- After any drift detected

### Refresh Actions
1. Re-read ~/.claude/CLAUDE.md (this file)
2. Re-read project CLAUDE.md if exists  
3. Re-read _2do.md for current context
4. Check for docs/agent.md files
5. Verify I'm using Desktop Commander correctly

## 🚫 STRICT FILE DISCIPLINE
- NEVER create test files outside tests/ directory
- NEVER create multiple versions of core directories
- NEVER create temporary directories without cleanup plan
- ALWAYS use existing infrastructure before creating new
- ALWAYS clean up test artifacts immediately
- ASK before creating any new directories or file structures
- ONE authoritative data store per project

## 🧪 TESTING DISCIPLINE  
- Use SINGLE test environment with proper cleanup
- All test files must go in tests/ directory
- Test isolation via cleanup, NOT duplication
- Mandatory cleanup after every test session
- No proliferation of test artifacts in project root
- Verify cleanup completed before ending session

## 🤖 ESTIMATION ADJUSTMENTS
- Traditional dev time / 10 = realistic with AI assistance
- Account for agentic powers + agent capabilities
- Example: 2-week traditional project = 2-3 days with agents

## SHORTCUTS & DISPLAY
- **d** = ~/digital shorthand
- **Terminal display**: BBS-style with date/time, cwd, target
- **Development workflow**: Don't run start/watch - instruct user to run in separate terminal

---
*Global instructions - Project CLAUDE.md files add specific behaviors*