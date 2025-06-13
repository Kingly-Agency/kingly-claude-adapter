You are implementing the /checkpoint command for unified session management across AI workspaces.

Execute this command:
```bash
kingly checkpoint $ARGUMENTS
```

## Context
This checkpoint is about: $ARGUMENTS

## Your Task
Analyze the current conversation context and manage session state based on the mode and $ARGUMENTS provided.

## Checkpoint Modes

### Standard Progress Checkpoint (default):
`/checkpoint "working on feature X"`
Mark current progress during active development.

### Resume Session:
`/checkpoint --resume` or `/checkpoint --resume "continue auth work"`
Load previous session context and timeline - use when continuing work across Claude sessions.

### New Session:
`/checkpoint --new` or `/checkpoint --new "starting feature Y"`
Create fresh session checkpoint - use when beginning completely new work.

### Final Session:
`/checkpoint --final` or `/checkpoint --final "session complete"`
Create comprehensive session rollup timeline - use to conclude work sessions.

### Code Context:
`/checkpoint --snippet "src/app.js:45-60" "reviewing auth logic"`
Include specific code context in checkpoint for timeline continuity.

## Response Format

### Standard Progress Checkpoint:
```
⚡ CHECKPOINT Progress

**Current State:** [What we're actively working on]
**Context:** [Key conversation points from recent work]
**Files Modified:** [Recent file changes and their purpose]
**Progress:** [What's been accomplished this session]
**Next Steps:** [Immediate actions needed]
**Session ID:** [For continuity tracking]
```

### Resume Session:
```
🔄 CHECKPOINT Resume

**Session Loaded:** [Previous session context and timeline]
**Last State:** [Where we left off]
**Key Context:** [Critical information from previous work]
**Files in Play:** [Active files and their status]
**Ready for:** [What we can continue working on]
**Continuity Notes:** [Bridge between sessions]
```

### New Session:
```
🚀 CHECKPOINT New

**Fresh Start:** [What new work is beginning]
**Project Context:** [Overall project understanding]
**Goals:** [What this session aims to accomplish]
**Starting Point:** [Current codebase/project state]
**Session Initialized:** [Confirmation of new session setup]
```

### Final Session:
```
✅ CHECKPOINT Final

**Session Summary:** [Complete timeline of work accomplished]
**Key Decisions:** [Important choices made and rationale]
**Files Changed:** [Comprehensive list of modifications]
**Architecture Impact:** [How this session affected overall system]
**Handoff Notes:** [Critical information for next session]
**Next Priorities:** [What should be tackled next]
```

### Code Context Included:
```
📋 Code Context: [file:lines or function]
[Relevant code snippet with line numbers]

**Why Important:** [How this code relates to current work]
**Changes Made:** [If any modifications to this code]
**Context for Next Session:** [How this code fits in timeline]
```

## Guidelines
- Use appropriate mode based on session state
- Include specific file references and line numbers when relevant
- Focus on actionable insights and continuity
- For --resume: prioritize loading previous context
- For --new: establish clear starting point
- For --final: create comprehensive handoff
- Code snippets should include enough context to understand
- Explain WHY decisions were made, not just WHAT happened

## Examples

**Example 1:** `/checkpoint`
Creates progress checkpoint of current active work.

**Example 2:** `/checkpoint --resume`
Loads previous session context to continue work.

**Example 3:** `/checkpoint --new "starting API refactor"`
Creates fresh session for new feature work.

**Example 4:** `/checkpoint --final`
Concludes session with comprehensive rollup and handoff.

**Example 5:** `/checkpoint --snippet "router.js:handle_find" "enhanced find command"`
Includes specific code context in checkpoint for timeline.

## Self-Healing Guidance
- Feeling lost? Use `--resume` to load context or `--new` to start fresh
- Need to wrap up? Use `--final` to create session summary
- Working actively? Default mode marks progress
- Need code context? Use `--snippet` with file:lines format