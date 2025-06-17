/think - Intelligent Situational Analysis

When user says "/think [optional topic]":

1. **Analyze Current Situation** from conversation context
2. **Execute Enhanced Context Discovery:**
```bash
# Use slug-based semantic search with situation analysis
lev find "situation analysis $DETECTED_CONTEXT" --all-types
```
3. **Situational Intelligence Response:**
```
🧠 **Situation Detected:** [analyzed situation type]

**Recommended Approach:** [best-fit context combination]
- Primary: [main-context] - [description] ([effectiveness]%)
- Supporting: [support-context] - [description] ([effectiveness]%)
- Process: [workflow sequence in plain language]

**Why This Approach:**
[reasoning based on detected situation characteristics]

**Flow Options:**
• Execute recommended approach
• "/research [topic]" for deeper analysis  
• "/checkpoint" to save this thinking
• "combine [contexts]" for custom approach
```

4. **Auto-save Structured Thinking:**
   - Save to ~/.claude/drafts/think-YYYYMMDD-HHMMSS.md
   - Include full context analysis and reasoning
   - Provide checkpoint integration for session continuity
