# Testing Cursor Commands

## Test Natural Language Triggers

Try these phrases in Cursor chat to test the MDC command rules:

### Basic Commands

1. "checkpoint" → Should execute `lev checkpoint`
2. "find testing workflows" → Should execute `lev find "testing workflows" --all-types`
3. "sitrep" → Should execute `lev sitrep`
4. "all" → Should execute `lev all`

### Complex Commands

1. "intake https://github.com/langchain-ai/langchain" → Should execute `lev intake "https://github.com/langchain-ai/langchain"`
2. "research AI workflow orchestration" → Should execute `lev research "AI workflow orchestration"`
3. "doc api for this module" → Should execute `lev doc "api" "this module"`
4. "handoff switching to mobile" → Should execute `lev handoff "switching to mobile"`

### Direct Routing

1. "lev os analyze mastra" → Should execute `lev os "analyze mastra"`
2. "lev help" → Should execute `lev help`

## Expected Behavior

When you use these triggers in Cursor:

1. The AI should recognize the natural language trigger
2. Extract relevant context/arguments from your message
3. Execute the appropriate `lev` CLI command
4. Display the results in the chat
5. Suggest relevant follow-up actions

## Troubleshooting

If commands don't execute:

- Check if `lev` is in your PATH: `which lev`
- Verify Leviathan is installed: `cd ~/lev/agent && npm link`
- Try using full path: `/Users/username/lev/agent/bin/lev`
- Check if MCP is connected in Cursor settings
