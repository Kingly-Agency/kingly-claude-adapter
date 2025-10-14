# Skills Prompts

Slash-command style prompts intended for Codex/Claude agents. Each prompt assumes:

- Superpowers skills repo installed at `${SUPERPOWERS_SKILLS_ROOT}` (default `~/.config/superpowers/skills`).
- Unified `skills` CLI will eventually live at `~/.claude/skills/bin/skills`.
- Agent must read the referenced SKILL.md before using it, even if the session-start hook surfaced excerpts.

Prompts currently included:

- `brainstorm.md` — Loads and follows the Brainstorming skill.
- `write-plan.md` — Enforces Writing Plans workflow.
- `execute-plan.md` — Drives Executing Plans skill with batch checkpoints.

Future work: generate these files from templates via `skills refresh` once the builder is implemented.
