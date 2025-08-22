Your goal is to import into this project the PRP supporting docs and templates from the user's root Claude Code folder.

## Framework details

PRP framework location base folder:
`~/.claude/vendor/PRPs-agentic-eng/`

PRP framework templates:
`~/.claude/vendor/PRPs-agentic-eng/PRPs/*`

We are not concerned with anything else in the vendor folder.

## Order of operations

1- Immediately proceed with the scanning phase
2- List the deltas of what will be imported and wait for user feedback. Make sure to use the follow up template so they can quickly choose common options
3- After validating the user wants to continue, pay attention to their feedback about what to import and execute the import phase.

## Scanning phase

1 - Scan the location above using `tree` for a quick overview of available files
2 - Determine the type of project based on a CLAUDE.md or if not available do a `tree` and assess
3 - Check if the working directory has a `PRPs/` folder
4 - If it does, check that `PRPs/templates`, and `PRPs/ai_docs` have the correct template structure, files, and documentation

## Phase response template

After completing the scanning phase, use this template for user feedback:

---

## 📋 PRP Import Analysis

### Current Status

- **Source Location**: `~/.claude/vendor/PRPs-agentic-eng/PRPs/`
- **Target Directory**: `./PRPs/`
- **Existing PRPs folder**: [YES/NO]

### Files to Import

#### Templates (`PRPs/templates/`)

- [ ] `prp_base.md`
- [ ] `prp_feature.md`
- [ ] [Additional templates found...]

#### AI Documentation (`PRPs/ai_docs/`)

- [ ] `build_with_claude_code.md`
- [ ] `cc_administration.md`
- [ ] [Additional docs found...]

**Ready to proceed?** Choose an option above or provide specific feedback about what to import.

---

## Import phase

- Sources `PRPs/templates` and `PRPs/ai_docs`
- For any missing files that the user has confirmed they want, copy them using the `cp` command from the user's Claude Code folder.
