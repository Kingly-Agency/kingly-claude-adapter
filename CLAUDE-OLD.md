# MCP USAGE
Desktop Commander for: known paths, batch ops, complex search, file manipulation, processes
Standard tools for: glob patterns, simple grep, notebooks, git, web

## EDIT PERMISSIONS
- Standard tools: Follow Claude Code auto-accept setting
- Desktop Commander: Always execute (workspace permission covers this)
- IMPORTANT: all reads go through desktop commander

## BEHAVIOR MODES
- Questions ("?") → analyze only, no edits
- Solutioning → creative thinking, confirm plans
- Implementation → execute with appropriate tool

## SPECIAL COMMANDS
- "perp" → use perplexity with advanced prompting
- "save" → update _2do.md with progress + next steps
- "pivot" → log goal change, maintain momentum
- "g" → u da best, continue

## PACKAGE MANAGERS
- **Default: pnpm** for all projects unless package.json specifies otherwise
- Check for pnpm-lock.yaml, yarn.lock, or package-lock.json to determine existing manager
- If no lock file exists → use pnpm

## EXPO PROJECTS
- Use `npx expo install` for dependencies (requires existing node_modules)
- If no node_modules exists → use `pnpm install` first, then `npx expo install`
- If expo install fails → debug with perplexity search

## 🚀 INTERACTION FLOW (UPDATED)
1. **Discuss/Plan** - Talk through approach first
2. **Verify** - "Sound good?" before major actions
3. **Action** - Execute efficiently
4. **Next Steps** - Always end with:
   1) Option 1 - [specific action]
   2) Option 2 - [alternative path]
   3) Option 3 - [different focus]
   4) Option 4 - [wildcard/creative]
   5) 📸 **Capture** - Save conversation/asset
   6) ⬅️ **Back** - Resume previous workflow

## 🧭 SESSION GPS TRACKING
- Auto-update SESSION.md on major context switches
- Track main mission, current position, breadcrumb trail
- Enable instant resume with "back" option
- Show progress bars for multi-step workflows
- Log decision points for easy navigation

## PROGRESS UPDATES - WHEN TO UPDATE
- Major milestones only (25%, 50%, 75%, 100%)
- Architecture decisions finalized
- Complex problems solved
- NOT for: file moves, small edits, setup steps

## 🧠 MEMORY REFRESH PROTOCOL
- **Auto-refresh triggers**:
  - Before any implementation phase
  - After 20+ messages in session
  - When user says "refresh" or "check father"
  - Before creating specs/architecture
  - When complexity increases
  - After any "hallucination" or drift

- **User-level refresh** (all projects):
  1. Re-read ~/.claude/CLAUDE.md (this file)
  2. Re-read project CLAUDE.md if exists
  3. Re-read _2do.md or SESSION.md for context
  4. Check for project-specific refresh instructions

- **Quick refresh phrase**: "Let me refresh my memory of the core principles..."

## 🔄 GIT WORKFLOW
- **Commit on significant changes**:
  - New feature implementation complete
  - Major refactoring done
  - Tests passing for a feature
  - Architecture decisions implemented
  - Bug fixes that work
  
- **Branch strategy**:
  - `main` - stable, working code
  - `feature/*` - new features
  - `fix/*` - bug fixes
  - `refactor/*` - code improvements
  
- **Commit timing** (integrated with save command):
  - When "save" → also git commit if changes are significant
  - Before pivoting → commit current work
  - After BDD tests pass → commit implementation
  - Clean, atomic commits (one logical change per commit)

- **Commit messages**:
  - Start with type: feat:, fix:, refactor:, test:, docs:
  - Present tense, imperative mood
  - Reference acceptance criteria if applicable
  - Example: "feat: implement intent classification for tasks (AC-TASK-001)"

## FILE DISCIPLINE
- Discussion > Documentation
- Only create files when explicitly requested
- Use temporary in-memory planning
- Clean up exploration artifacts

## RESPONSE STYLE
- Concise bullets > paragraphs
- Code > explanations
- Actions > descriptions
- Results > process

## _2do.md FORMAT - use proper formatting, everything on a new line w/ header: {goal} | {progress}, {action_steps}, {history}, {memory/decisions/patterns}

## STATUS BANNER PROTOCOL - CONTEXT-AWARE PROGRESS
- Multi-step workflows: {project} | [🟩🟩🟩⬜⬜] 60% | {next step} | {status}
- Single tasks: {project} | ✅ Complete | {next step} | {status}
- Working: {project} | 🔄 Working | {current action} | {status}
- Failed: {project} | ❌ Failed | {issue} | {status}
- Only show progress bars when tracking defined sequential steps
- Default to simple status icons for single actions

## SHORTCUTS
- d is shorthand for ~/digital

## TERMINAL DISPLAY
- BBS-style terminal output
- Display date/time, current working directory, and target directory

## 🤖 ESTIMATION ADJUSTMENTS
- Estimates should account for agentic powers + Kingly agent capabilities
- Traditional dev time / 10 = realistic estimate with AI assistance
- Example: 2-week traditional project = 2-3 days with agent workflow

## 🚫 STRICT FILE DISCIPLINE
- NEVER create test files outside tests/ directory
- NEVER create multiple versions of core directories (.kingly-test, .kingly-advanced-test, etc.)
- NEVER create temporary directories without explicit cleanup plan
- ALWAYS use existing infrastructure before creating new
- ALWAYS clean up test artifacts immediately after use
- ASK before creating any new directories or file structures
- ONE authoritative data store per project - respect existing architecture

## 🧪 TESTING DISCIPLINE
- Use SINGLE test environment with proper cleanup
- All test files must go in tests/ directory
- Test isolation via cleanup, NOT duplication
- Mandatory cleanup after every test session
- No proliferation of test artifacts in project root
- Verify cleanup completed before ending session

## DEVELOPMENT WORKFLOW
- Don't attempt to run start/watch commands, instruct me to run in another terminal as I usually have 1 session for claude code and another for the watch/build/dev servers