# Personal Prime Command - Workflow Automation

## Your Information Pipeline

**Research Workspaces**:
- `drafts/` → Persistent research and exploration
- `tmp/` → Ephemeral multi-step processing 

**Synthesis Destinations**:
- `docs/research/` → Curated research you want to keep
- `docs/*.md` → Human documentation  
- `docs/adrs/` → Architectural decisions
- `doc/specs/` → BDD/TDD specifications, rich markdown w/ embedded examples, self contained units of work

## Workflow Detection

### RUN
```bash
# Visual orientation
eza . --tree --level 3 --git-ignore

# Check active workspaces  
find drafts/ tmp/ -name "*.md" -mtime -7 2>/dev/null | head -10
```

### READ
```
@docs/*.md <-- scan and read what is relevant given the current context and any hints from $ARGUMENTS
@drafts/*.md <-- scan and read what is relevant given the current context and any hints from $ARGUMENTS
@tmp/*.md <-- scan and read what is relevant given the current context and any hints from $ARGUMENTS
```

## Personal Automation Patterns

### Research Synthesis
When you have content ready to move from drafts/ or tmp/:

1. **Identify synthesis candidates**:
   - Files older than 3 days in tmp/
   - Completed research threads in drafts/
   - Content marked for synthesis

2. **Synthesis destinations**:
   - **Keep**: Move to `docs/research/` (your personal knowledge base)
   - **Formalize**: Convert to `docs/*.md` or `docs/adrs/`
   - **Specify**: Extract to `ai/specs/` for implementation
   - **Archive**: Remove completed work

### Multi-Tab Coordination

**Session Handoff Pattern**:
- Tag current workspace state before switching tabs
- Use `lev checkpoint` for session continuity
- Reference specific files in drafts/ or tmp/ for context

**Parallel Research**:
- Different topics in separate drafts/ subdirectories
- tmp/ for processing chains that need isolation
- Cross-reference synthesis opportunities

## Remember

**Your PM Philosophy**:
- Information flows through research → synthesis → decision → specification
- Automation reduces typing but preserves thinking quality
