# Cursor Kingly AI Configuration

Transform Cursor into an intelligent coding partner with project awareness, natural language commands, and workflow automation.

## 🚀 Quick Setup

### For This Project

Already configured! Just say "prime" in Cursor chat to activate.

### For Other Projects

```bash
# From this directory
./.cursor/setup-cursor-kingly.sh /path/to/your/project

# Or copy manually
cp -r .cursor /path/to/your/project/
```

## 📋 Features

### Project-Specific Intelligence

- **Auto-detection** of project type (React, Python, Node.js)
- **Framework-aware** suggestions and patterns
- **Environment management** (conda, npm, pnpm)
- **Code standards** specific to your stack

### Natural Language Commands

- `"prime"` - Analyze and configure project
- `"checkpoint"` or `"cp"` - Save session state
- `"handoff"` - Create detailed session timeline
- `"research"` - Enhanced research mode
- `"perp"` - Sophisticated Perplexity prompts
- `"debug this"` - Add logging/error handling
- `"test this"` - Generate unit tests

### Workflow Automation

- Progress tracking with visual indicators
- Session continuity across conversations
- Research synthesis pipeline
- Leviathan MCP integration (if available)

## 📁 Structure

```
.cursor/
├── index.mdc              # Main configuration (Always loaded)
├── project-types/         # Language/framework specific rules
│   ├── react.md          # React/Next.js patterns
│   ├── python.md         # Python/Django/FastAPI
│   └── node.md           # Node.js/Express patterns
├── command-mappings/      # Natural language → actions
│   ├── checkpoint.md     # Session state management
│   ├── handoff.md        # Session transfer
│   ├── research.md       # Research workflows
│   ├── prime.md          # Project setup
│   └── index.md          # Command reference
└── global-rules/          # User preferences (in Cursor settings)
```

## 🎯 Usage Examples

### Starting a New Session

```
You: prime
AI: 🔧 PRIMING: [project-name]
    Detected: React, TypeScript, pnpm
    Applying: React project rules
    Available: checkpoint, handoff, research commands
```

### During Development

```
You: checkpoint before refactoring auth
AI: ⚡ CHECKPOINT: 2025-01-15 10:30
    Working on: Authentication refactor
    Files modified: auth.ts, login.tsx
    Progress: Setup complete, testing next
```

### Research Mode

```
You: research next.js 15 app router best practices
AI: 📚 RESEARCH: Next.js 15 App Router
    [Enhanced multi-angle analysis with examples]

You: perp this
AI: [Creates sophisticated domain-expert prompt]
```

### Session Transfer

```
You: handoff switching to mobile work
AI: [Generates comprehensive timeline with 3-15 checkpoints]
    System prompt for next session included
    Context confidence: 95%
```

## 🔧 Customization

### Add Project Type

Create `.cursor/project-types/[type].md` with:

- Detection criteria
- Development rules
- Framework patterns
- Best practices

### Add Command

Create `.cursor/command-mappings/[command].md` with:

- Trigger phrases
- Execution steps
- Output format
- Integration points

## 🧙🏽‍♂️ Philosophy

This configuration embodies the "Kingly" approach:

- **Proactive** assistance, not reactive
- **Context-aware** across sessions
- **Natural language** interaction
- **Workflow-focused** automation

The goal is to make Cursor understand your project deeply and assist intelligently, maintaining context across sessions and adapting to your development style.
