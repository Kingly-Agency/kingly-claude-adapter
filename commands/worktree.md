# /worktree - Interactive Git Worktree Creation Wizard

## MISSION: Context-Aware Worktree Management with AI Assistance

When user says "/worktree" or "/worktree [slug-hint]":

1. **Context Analysis & Slug Generation**
   - Analyze recent conversation for project context, tasks, and themes
   - Generate semantic slug from context (e.g., "constitutional-framework-integration")
   - If $ARGUMENTS provided: use as slug if valid, otherwise as context hint
   - Extract key context elements for worktree initialization

2. **Interactive Worktree Wizard**
   ```
   🌳 WORKTREE CREATION WIZARD
   
   **Context Detected:** Kingly Agency constitutional framework integration
   **Generated from:** Recent discussion about base agent validation and constitutional patterns
   
   **Proposed Configuration:**
   📁 **Worktree Name:** constitutional-framework-integration
   📂 **Location:** /Users/user/digital/worktrees/constitutional-framework-integration
   🌿 **Branch Strategy:** feature/constitutional-framework-integration (new branch)
   📋 **Context Capture:** Last 10 messages about constitutional patterns and validation
   
   ⚡ **Options:**
   A. ✅ Create with proposed settings
   B. 📝 Customize worktree name/slug
   C. 📁 Change base location
   D. 🌿 Modify branch strategy  
   E. 📋 Review/edit captured context
   F. 🔄 Re-analyze recent context
   G. ❌ Cancel and return
   
   **Choice (A-G):** _
   ```

3. **Smart Configuration Flows**

   **Option B - Customize Name:**
   ```
   📝 **Custom Worktree Name**
   Current: constitutional-framework-integration
   
   Enter new name (or press Enter to keep current):
   > agency-base-validation
   
   ✅ Updated: agency-base-validation
   📂 New location: /Users/user/digital/worktrees/agency-base-validation
   🌿 New branch: feature/agency-base-validation
   ```

   **Option C - Change Location:**
   ```
   📁 **Worktree Location**
   Current base: /Users/user/digital/worktrees/
   
   Options:
   A. ~/digital/worktrees/ (current)
   B. ~/digital/kingly/experiments/
   C. ~/digital/temp-work/
   D. Custom path...
   
   Choice: _
   ```

   **Option E - Review Context:**
   ```
   📋 **Captured Context Review**
   
   **Key Topics Identified:**
   • Constitutional framework integration
   • Base agent validation system  
   • Specialist agent inheritance patterns
   • Token usage optimization concerns
   • Existing ~/c system analysis
   
   **Recent Messages Summary:**
   - User wants base agent for validation across specialists
   - Discussion about constitutional principles implementation
   - Research into existing ~/lev/agent architecture
   - Plans for systematic agent development
   
   ⚡ **Actions:**
   A. ✅ Context looks good, proceed
   B. ✏️ Add additional context notes
   C. 🔄 Re-analyze with different message range
   D. ⬅️ Back to main wizard
   ```

4. **Worktree Creation Process**
   ```bash
   # Internal command flow (user sees progress)
   🌳 Creating worktree via KinglyWorktreeManager...
   
   ✅ Analyzing git repository state
   ✅ Validating worktree name and location  
   ✅ Calling: worktreeManager.createWorktree(name, branch, options)
   ✅ Git worktree created at: {configured worktreeBasePath}/{name}
   ✅ Saving context files to worktree location
   ✅ Registering worktree in tracking system
   
   🎯 **Worktree Ready!**
   
   **Next Steps:**
   • cd {worktreeBasePath}/{name}
   • Continue work in isolated environment
   • Manage via: kingly cmd worktree list|remove {name}
   
   **Context Available:**
   • Session notes: .worktree-context.md
   • Conversation: .conversation-context.md  
   • Task summary: .task-context.md
   • Tracked in: KinglyWorktreeManager system
   ```

5. **Error Handling & Validation**
   ```
   ❌ **Worktree Creation Failed**
   
   **Issue:** Directory already exists
   **Path:** /Users/user/digital/worktrees/constitutional-framework-integration
   
   **Options:**
   A. 🗑️ Remove existing and recreate
   B. 📝 Choose different name
   C. 📁 Use different location
   D. 🔄 Back to wizard
   E. ❌ Cancel operation
   
   **Safe Actions:** Options B-E (Option A requires confirmation)
   ```

## Smart Context Detection Logic:

```javascript
// Pseudo-code for context analysis
function analyzeRecentContext(messages, userHint = null) {
  const contextAnalysis = {
    topics: extractKeyTopics(messages),
    tasks: identifyActiveTasks(messages),
    technologies: detectTechnologies(messages),
    urgency: assessUrgencyLevel(messages),
    complexity: estimateComplexity(messages)
  };
  
  const semanticSlug = generateSemanticSlug(contextAnalysis, userHint);
  
  return {
    slug: semanticSlug,
    branchName: `feature/${semanticSlug}`,
    context: contextAnalysis,
    suggestedLocation: inferOptimalLocation(contextAnalysis)
  };
}
```

## KinglyWorktreeManager Integration:

```javascript
// Integration with existing ~/lev/plugins/@lev-os/cmd worktree system
import { worktreeManager } from '~/lev/plugins/@lev-os/cmd/src/worktree-manager.js';

// Create worktree with context
const worktree = await worktreeManager.createWorktree(name, branch, {
  context: extractedContext,
  sourcePath: process.cwd()
});

// List existing worktrees
const { worktrees, summary } = await worktreeManager.listWorktrees();

// Remove worktree when done
await worktreeManager.removeWorktree(name, { force: false });
```

```bash
# Backend uses these git commands via KinglyWorktreeManager
git worktree add -b [branch-name] [worktree-path] [start-point]
git worktree list --porcelain  
git worktree remove [worktree-path]

# Existing CLI interface (still available)
kingly cmd worktree create [name]
kingly cmd worktree list
kingly cmd worktree remove [name]
```

## Context Preservation Strategy:

1. **Session Context** - Current conversation and task state
2. **Project Context** - Repository state, branch info, recent commits  
3. **Environment Context** - Working directory, environment variables
4. **Task Context** - Extracted goals, requirements, and next steps

## Smart Follow-ups:

```
⚡ **After Worktree Creation:**
• "continue here" - Switch to worktree and continue current task
• "sync main" - Keep worktree updated with main branch changes
• "merge ready" - Create pull request when work is complete
• "cleanup" - Remove via: kingly cmd worktree remove {name}
• "list worktrees" - Show all via: kingly cmd worktree list
• "checkpoint" - Save progress and session state
```

## Error Recovery Patterns:

- **Git conflicts** → Offer merge strategy options
- **Permission issues** → Suggest location alternatives  
- **Invalid names** → Auto-sanitize and confirm
- **Existing worktrees** → Show options to reuse, rename, or remove
- **Context extraction failures** → Manual context entry option

## Integration Points:

- **KinglyWorktreeManager** → Direct integration with existing worktree infrastructure
- **Leviathan Debug System** → Full operation tracing via existing system
- **Constitutional AI** → Validate operations before execution  
- **Job System** → Coordinate with existing workflows
- **cmd Plugin** → Uses existing `kingly cmd worktree` backend with friendly interface

---

*Intelligent worktree management that understands context and streamlines parallel development workflows*