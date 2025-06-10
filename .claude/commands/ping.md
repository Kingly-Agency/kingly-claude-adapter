# /ping - Distributed AI Workspace Intelligence

You are implementing the /ping command for creating checkpoints and routing messages across AI workspaces.

## Context
This ping is about: $ARGUMENTS

## Your Task
Analyze the current conversation context and create an intelligent checkpoint based on the $ARGUMENTS provided.

### If $ARGUMENTS is empty or just "ping":
**Trace back** to the most recent significant decision, breakthrough, or insight in our conversation and create a checkpoint.

### If $ARGUMENTS contains routing patterns:
- **"send to [project]"** → Create message for routing to that specific project
- **"all [message]"** → Create broadcast message for all workspaces  
- **"find [thing]"** → Create search request across projects

## Response Format

### Standard Checkpoint:
```
🔄 PING Checkpoint

**Insight:** [What was discovered/decided in recent conversation]
**Context Trace:** [Key conversation points that led to this insight - last 3-5 turns]
**File References:** [Relevant files mentioned and why they matter]
**Impact:** [What this means for the project/architecture]
**Next Action:** [Immediate next step or decision needed]
**Session Context:** [Where we are in the overall project timeline]
```

### Message Routing:
```
📨 PING Message Route

**To:** [Target project/workspace] 
**From:** claude-code-intelligence
**Subject:** [Brief summary of message]
**Context:** [Recent conversation context relevant to target]
**Message:** [Actual content to route]
**Priority:** [low/medium/high based on urgency]
```

### Search Request:
```
🔍 PING Search Request

**Query:** [What we're looking for]
**Context:** [Why we need this information]
**Scope:** [Which projects/workspaces to search]
**Expected:** [What kind of results would be helpful]
```

## Guidelines
- Keep checkpoints concise but comprehensive
- Focus on actionable insights and decisions
- Include specific file references when relevant
- Explain WHY something is important, not just WHAT happened
- For routing, include enough context for the receiving workspace to understand
- Trace conversation threads that led to breakthroughs or decisions

## Examples

**Example 1:** `/project:ping`
Creates checkpoint of most recent significant insight.

**Example 2:** `/project:ping "send to kingly agent about build system architecture"`
Routes our recent build system discoveries to the kingly project.

**Example 3:** `/project:ping all "filesystem dogfooding approach validated"`
Broadcasts insight about filesystem approach to all workspaces.

**Example 4:** `/project:ping "find web3 authentication patterns"`
Searches across projects for web3 auth implementations.