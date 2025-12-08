# Levi Patterns → Superpowers Skills Implementation Plan

> **For Claude:** Use `${SUPERPOWERS_SKILLS_ROOT}/skills/collaboration/executing-plans/SKILL.md` to implement this plan task-by-task.

**Goal:** Convert Leviathan thinking patterns into Superpowers-compliant skills (SKILL.md) with supporting assets ready for the unified skills catalog.

**Architecture:** YAML-driven transformation pipeline that maps pattern metadata to SKILL frontmatter/content templates, generates docs under `skills/data/lev-skills/`, and registers them with the skills index.

**Tech Stack:** Bash/Python converters, `yq`/`jq` for YAML parsing, Superpowers skill template format, Levi pattern YAMLs.

---

### Task 1: Analyze Source Patterns

**Files:**
- Modify: `skills/research/lev-pattern-audit.md`
- Modify: `skills/scripts/list-lev-patterns.sh`

**Step 1:** Enumerate pattern YAMLs from `~/lev/core/contexts/patterns`.
**Step 2:** Record metadata fields (id, description, config sections) in audit doc.
**Step 3:** Group patterns by methodology or use-case to inform skill taxonomy.
**Step 4:** Identify missing fields required by SKILL template.
**Step 5:** Commit research artifacts.

### Task 2: Define SKILL Template & Mapping Rules

**Files:**
- Create: `skills/templates/lev-skill.md.tmpl`
- Modify: `skills/docs/lev-mapping-guide.md`
- Modify: `skills/tests/lev_template.bats`

**Step 1:** Draft SKILL template aligning Levi fields to Superpowers structure (frontmatter, overview, process sections).
**Step 2:** Document mapping rules (e.g., `pattern_config` → implementation steps).
**Step 3:** Encode non-trivial transforms (lists → bullet sections, enums → guidance).
**Step 4:** Write tests ensuring template renders mandatory sections.
**Step 5:** Commit template and guide.

### Task 3: Build Conversion Script

**Files:**
- Create: `skills/bin/skills-convert-lev`
- Create: `skills/lib/lev_convert.sh`
- Modify: `skills/tests/lev_convert.bats`

**Step 1:** Implement script to read YAML, apply mapping rules, and emit `SKILL.md` per pattern.
**Step 2:** Ensure output directory `skills/data/lev-skills/<pattern>/SKILL.md`.
**Step 3:** Handle edge cases (missing fields, arrays, multi-line text) with validation.
**Step 4:** Add optional flag to regenerate all patterns.
**Step 5:** Cover script with Bats tests using fixture YAML.
**Step 6:** Run tests; expect PASS.

### Task 4: Integrate Converted Skills

**Files:**
- Modify: `skills/bin/skills` (index update)
- Modify: `skills/data/index.json`
- Modify: `skills/tests/skills_cli.bats`
- Modify: `skills/docs/lev-mapping-guide.md`

**Step 1:** Update index builder to include generated Levi skills with proper tags.
**Step 2:** Adjust CLI `list/search/show` to reference Levi skills.
**Step 3:** Document process for regeneration when Levi patterns change.
**Step 4:** Re-run sync/index tests to confirm coverage.
**Step 5:** Commit changes with notes on taxonomy.

### Task 5: Verification & Sign-off

**Files:**
- Modify: `skills/docs/lev-validation-checklist.md`
- Modify: `skills/tests/lev_end_to_end.bats`

**Step 1:** Draft checklist for reviewing each generated SKILL (content accuracy, usage instructions, references).
**Step 2:** Build end-to-end test converting sample patterns and running CLI search.
**Step 3:** Execute conversion against full pattern set; spot-check outputs.
**Step 4:** Gather stakeholder feedback (e.g., Levi maintainers) and capture in checklist doc.
**Step 5:** Finalize documentation and commit.
