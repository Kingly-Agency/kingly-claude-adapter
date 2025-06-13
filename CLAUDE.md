## 🎯 MANDATORY: ALWAYS END RESPONSES WITH FOLLOW-UP TEMPLATE

**FOLLOW-UPS:**

1. My recommendation - [Optimal next step based on analysis]
2. Choices choices - [Alternative approach options]
3. How about...? - [Different focus or perspective]
4. MVP all of it - [Execute all recommended actions]
5. Have you considered? - [Wildcard or creative option]
6. 📸 **/ping** - Update progress and session state
7. 📸 **/kingly** - Transfer to specialized agent
8. ⬅️ **< Back** - Return to previous context

STATUS ─────────────────────────────────────────────────────────────────────────────────────────
🖥️ **[ROOT@KINGLY]** project/path | ⚡ STATUS | Current action  
────────────────────────────────────────────────────────────────────────────────────────────────

## Claude Code Detection & E2E Testing

**I AM CLAUDE CODE:** When environment variables `CLAUDECODE=1` and `CLAUDE_CODE_ENTRYPOINT=cli` are present, I am running inside Claude Code CLI. This means I can spawn subprocess instances of `claude` to test Kingly system E2E workflows.

**E2E Testing Pattern:**
```bash
# Spawn Claude Code subprocess to test Kingly
claude "run kingly checkpoint --new 'e2e test scenario'"
```

## Session Management

**First Command:** Always start with `load` to initialize session:
```bash
kingly load
```

**Session Continuity:** When compacting or continuing work, always remember your session ID and use it:
```bash  
kingly load --session "your-session-id"
```

## Natural Language Detection

When you detect workflow, session, or intelligence needs, use these commands:

- **Workflow discovery** → 
```bash
kingly find "$ARGUMENTS"
```
- **Session checkpoints** → 
```bash
kingly ping --context "$ARGUMENTS"
```  
- **Session handoffs** → 
```bash
kingly handoff --session "$ARGUMENTS" --files "$ARGUMENTS" --decisions "$ARGUMENTS"
```
- **Workflow combinations** → 
```bash
kingly combos "$ARGUMENTS"
```

## Project-Specific Intelligence
- Ping before major dependency changes
- Checkpoint after significant refactoring
- Use session handoffs for deployment cycles

## CEO Agent Activation

For any complex request, the kingly command provides CEO agent responses with:
- Agent identification and workspace context
- Session ID for continuity across tabs
- Intelligence routing and next actions
- Multi-tab coordination guidance

## SESSION INITIALIZATION PROTOCOL - EXECUTE IMMEDIATELY

**STEP 1**: EXECUTE: Load intelligence files immediately on session start:
- Read @~/.claude/.kingly-claude/intelligence/01-core.md
- Read @~/.claude/.kingly-claude/intelligence/02-development.md  
- Read @~/.claude/.kingly-claude/intelligence/03-content.md

**STEP 2**: VERIFY: Announce "💻 ONLINE" before any user interaction

## NATURAL LANGUAGE TRIGGERS

**"perp"** / **"perp this"** → IMMEDIATE Perplexity research with context, using ~/t prompt architecture techniques. Always include "You are a <role>"

# Desktop Commander MCP Integration

**PRIMARY FILE OPERATIONS:** Always use Desktop Commander MCP tools instead of default Read/Write:
- `mcp__desktop-commander__read_file` - All file reading operations
- `mcp__desktop-commander__write_file` - All file writing (25-30 line chunks)
- `mcp__desktop-commander__search_files` - File name pattern searches  
- `mcp__desktop-commander__search_code` - Content searches (replaces grep/ripgrep)
- `mcp__desktop-commander__execute_command` - Background processing with timeout
- `mcp__desktop-commander__list_directory` - Directory listings (replaces ls/dir)

**FILE OPERATION POLICIES:**
- **Absolute paths only** - Always use full paths starting with '/' or drive letter
- **Chunking standard** - Write files in 25-30 line chunks for performance
- **First chunk**: `{mode: 'rewrite'}`, **subsequent**: `{mode: 'append'}`
- **Background processing** - Commands continue if timeout exceeded

**SEARCH OPERATIONS:**
- Use `mcp__desktop-commander__search_code` for content searches instead of bash grep
- Use `mcp__desktop-commander__search_files` for filename searches instead of find
- Timeout configurable for large codebases