/think - Situational Intelligence

When user says "/think":

1. Analyze current context/conversation for situation type
2. Execute:
```bash
kingly lookup power "$ARGUMENTS"
```
3. If no direct match, execute:
```bash
kingly lookup "situation analysis" "decision making" "problem solving"
```
4. Structure response:
   - Situation: [what you detected]
   - Recommended Approach: [power combo name + effectiveness]
   - Process: [workflow sequence in plain language]
   - Key Insights: [why this approach fits]
5. Save to ~/.claude/drafts/think-YYYYMMDD-HHMMSS.md
