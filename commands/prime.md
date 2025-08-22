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
@_*.md
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

# Project Situation Report (SITREP)

Perform a comprehensive analysis of the current project state and health metrics.

## Assessment Framework

Systematically evaluate the project across these dimensions:

1. **Documentation Health**

   - Completeness and currency of documentation
   - ADR coverage of architectural decisions
   - Gaps between code and documentation

2. **Dependency Analysis**

   - Package dependency health and security
   - Version compatibility and update requirements
   - Dependency graph complexity

3. **Code Quality Metrics**

   - Test coverage and CI/CD pipeline status
   - Code quality scores and technical debt
   - Performance metrics and optimization opportunities

4. **Project Structure**

   - File organization and naming conventions
   - Architecture compliance and pattern adherence
   - Configuration management and environment setup

5. **Development Workflow**
   - Git workflow health (branches, PRs, commits)
   - Development environment consistency
   - Team collaboration patterns

## Output Format

Provide a clear executive summary with:

- Overall health score
- Critical issues requiring immediate attention
- Recommended next actions
- Detailed findings by category

**Focus Area:** $ARGUMENTS
