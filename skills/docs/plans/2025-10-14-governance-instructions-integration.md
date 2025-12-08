# Governance & Prompt Integration Plan

> **For Claude:** Use `${SUPERPOWERS_SKILLS_ROOT}/skills/collaboration/executing-plans/SKILL.md` to implement this plan task-by-task.

**Goal:** Merge Superpowers governance and Levi onboarding into Codex instructions and prompt ecosystem, ensuring consistent behavior across agent shells.

**Architecture:** Centralized system prompt generated from templates, wired into Codex instructions, mirrored across other CLIs via documentation and helper scripts.

**Tech Stack:** Markdown templates, Codex instructions pipeline, Bash CLI, symbolic links.

---

### Task 1: Source Governance Content

**Files:**
- Modify: `skills/research/governance-sources.md`
- Modify: `skills/scripts/extract-governance.sh`

**Step 1:** Collect text from `.claude/CLAUDE.md` and Superpowers session-start output.
**Step 2:** Extract Levi onboarding requirements from existing docs.
**Step 3:** Normalize formatting into research doc highlighting mandatory rules.
**Step 4:** Commit research artifacts.

### Task 2: Template Consolidation

**Files:**
- Modify: `skills/templates/system-prompt.md.tmpl`
- Modify: `skills/templates/sections/governance.md.tmpl`
- Modify: `skills/tests/system_prompt_template.bats`

**Step 1:** Break governance into reusable template sections (rules, follow-up template, workflow).
**Step 2:** Insert placeholder variables (e.g., generated timestamp, skill counts).
**Step 3:** Create tests verifying required sections appear exactly once.
**Step 4:** Commit template updates and tests.

### Task 3: Instructions Update Workflow

**Files:**
- Modify: `skills/bin/skills-refresh`
- Modify: `.codex/instructions.md`
- Modify: `skills/docs/integration-notes.md`

**Step 1:** Extend refresh command to regenerate Codex instructions snippet.
**Step 2:** Update `.codex/instructions.md` to include generated block and instructions to run `skills onboarding`.
**Step 3:** Document manual steps for non-Codex agent shells.
**Step 4:** Commit instructions changes.

### Task 4: Prompt Distribution

**Files:**
- Modify: `skills/bin/skills-refresh`
- Modify: `.codex/prompts/brainstorm.md`
- Modify: `.codex/prompts/write-plan.md`
- Modify: `.codex/prompts/execute-plan.md`
- Modify: `skills/tests/prompt_distribution.bats`

**Step 1:** Update refresh script to copy/symlink generated prompts into Codex directory.
**Step 2:** Ensure prompts include reminder to Read relevant SKILL docs per governance.
**Step 3:** Cover distribution with tests (check file existence + checksum).
**Step 4:** Commit updates.

### Task 5: Verification & Rollout

**Files:**
- Modify: `skills/docs/rollout-checklist.md`
- Modify: `skills/tests/integration_end_to_end.bats`

**Step 1:** Run full refresh and capture resulting onboarding text.
**Step 2:** Start new Codex session to validate first-response behavior.
**Step 3:** Test fallback instructions for non-hook agents manually.
**Step 4:** Update rollout checklist with findings and next actions.
**Step 5:** Commit final verification artifacts.
