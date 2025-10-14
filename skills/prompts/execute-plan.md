# /execute-plan — Superpowers Plan Execution

1. Run `~/.claude/skills/bin/skills onboarding` if the CLI is present to ensure latest governance context.
2. Use the Read tool on `${SUPERPOWERS_SKILLS_ROOT}/skills/collaboration/executing-plans/SKILL.md` before touching any code.
3. Announce: "I'm using the Executing Plans skill to implement this plan."
4. Load the referenced plan file, review it critically, and raise gaps before coding.
5. Execute tasks in batches (default: three tasks), report results and verification output after each batch, and stop immediately when blocked.
