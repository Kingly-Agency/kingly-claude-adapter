# Skills CLI & Builder Implementation Plan

> **For Claude:** Use `${SUPERPOWERS_SKILLS_ROOT}/skills/collaboration/executing-plans/SKILL.md` to implement this plan task-by-task.

**Goal:** Deliver a unified `skills` CLI (with subcommands) plus refresh generator that manages Superpowers skills and Levi patterns.

**Architecture:** Bash-first tooling living under `~/.claude/skills`; CLI delegates to helper scripts for sync/index/generation; prompt builder renders templates into Codex-ready files.

**Tech Stack:** Bash, POSIX utilities (`git`, `jq`, `yq`), existing Superpowers skills repo, Levi pattern YAMLs.

---

### Task 1: Scaffold Directory Structure

**Files:**
- Create: `skills/bin/skills`
- Create: `skills/bin/skills-refresh`
- Modify: `skills/README.md`

**Step 1:** Create directories `skills/bin`, `skills/templates`, `skills/prompts`, `skills/data`.
**Step 2:** Draft placeholder README describing purpose and wiring expectations.
**Step 3:** Touch CLI script files with executable shebangs.
**Step 4:** Run `ls skills` to verify expected directories and scripts exist.
**Step 5:** Commit scaffold (`git add skills/{bin,templates,prompts,data}`).

### Task 2: Implement CLI Core (`skills`)

**Files:**
- Modify: `skills/bin/skills`
- Modify: `skills/data/.gitkeep`
- Modify: `skills/README.md`
- Modify: `skills/tests/skills_cli.bats` (add new)

**Step 1:** Outline CLI usage and subcommands (`init`, `sync`, `onboarding`, `list`, `search`, `show`, `pattern`, `refresh`).
**Step 2:** Implement argument parsing in Bash with safe defaults and help text.
**Step 3:** Stub each subcommand to call dedicated functions that return meaningful exit codes.
**Step 4:** Add `.gitkeep` or equivalent to ensure data directory tracked.
**Step 5:** Write Bats test covering `skills --help` and `skills list` (stub output).
**Step 6:** Execute `bats skills/tests/skills_cli.bats`; expect PASS.
**Step 7:** Commit CLI skeleton.

### Task 3: Implement Sync & Index Logic

**Files:**
- Modify: `skills/bin/skills`
- Create: `skills/lib/sync.sh`
- Create: `skills/lib/index.sh`
- Modify: `skills/tests/skills_sync.bats`

**Step 1:** Build `skills lib` helpers to clone/update Superpowers repo into `skills/data/superpowers`.
**Step 2:** Add Levi pattern ingestion copying YAMLs from `~/lev/core/contexts/patterns`.
**Step 3:** Generate index JSON summarizing skills and patterns (path, description, tags).
**Step 4:** Update CLI `sync` to call helpers and refresh index.
**Step 5:** Update `list/search/show/pattern` to consume index.
**Step 6:** Add tests that mock repos and validate index schema.
**Step 7:** Run test suite; ensure PASS.

### Task 4: Build Prompt Templates & Generator

**Files:**
- Create: `skills/templates/system-prompt.md.tmpl`
- Create: `skills/templates/brainstorm.md.tmpl`
- Create: `skills/templates/write-plan.md.tmpl`
- Create: `skills/templates/execute-plan.md.tmpl`
- Modify: `skills/bin/skills-refresh`
- Modify: `skills/prompts/.gitkeep`
- Modify: `skills/tests/skills_refresh.bats`

**Step 1:** Draft template variables (e.g., `{{SUPERPOWERS_PATH}}`, `{{LEVI_PATTERN_COUNT}}`, `{{GENERATED_AT}}`).
**Step 2:** Implement `skills-refresh` to render templates via `envsubst` or `mustache` equivalent.
**Step 3:** Ensure generator writes outputs to `skills/prompts/*.md`.
**Step 4:** Update CLI `refresh` subcommand to call `skills-refresh`.
**Step 5:** Add tests verifying generated files contain required sections.
**Step 6:** Run tests and spot-check generated prompts.

### Task 5: Codex Integration & Docs

**Files:**
- Modify: `.codex/instructions.md`
- Modify: `.codex/prompts/brainstorm.md`
- Modify: `.codex/prompts/write-plan.md`
- Modify: `.codex/prompts/execute-plan.md`
- Modify: `skills/README.md`

**Step 1:** Update Codex instructions to run `skills onboarding` at session start and adopt governance.
**Step 2:** Replace Codex prompt bodies with generated outputs or symlinks.
**Step 3:** Document integration steps in `skills/README.md`.
**Step 4:** Launch fresh Codex session to verify first response includes onboarding.
**Step 5:** Record test log/results and finalize documentation.
