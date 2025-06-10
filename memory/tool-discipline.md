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

## Standard Tools (Limited Use)
**Use for:** Write/Edit/MultiEdit when auto-accept is OFF, simple glob operations, notebooks, git operations, web fetch

## Tool Discipline Enforcement
**Memory Refresh:** Every 15 turns, re-read this CLAUDE.md to maintain tool discipline. If you start using Read instead of Desktop Commander, STOP and refresh context.

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