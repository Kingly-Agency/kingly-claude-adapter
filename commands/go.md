# /go - Execute Next Action

## MISSION: Take immediate action based on current context

When user says "/go":

1. **Analyze Current Context**
   - Extract current task/project state from recent messages
   - Identify blocked vs ready-to-execute actions
   - Determine most logical next step

2. **Execute Immediate Action**
   ```bash
   # Based on context, run appropriate command
   kingly find "next logical step" --all-types
   # OR execute specific action if clear
   ```

3. **Present Action Plan**
   ```
   🚀 **Executing**: [Action description]
   
   **Context**: [Current situation]
   **Action**: [What we're doing]
   **Expected Result**: [What should happen]
   
   ⚡ **Immediate Steps**:
   1. [Step 1]
   2. [Step 2] 
   3. [Step 3]
   ```

4. **Follow Through**
   - Execute the identified action
   - Report results
   - Suggest next actions if needed

## Common Go Scenarios:
- **Development**: Run tests, commit changes, deploy
- **Research**: Execute analysis, gather data, synthesize findings
- **Planning**: Create tasks, set priorities, define next milestones
- **Debugging**: Run diagnostics, test fixes, validate solutions

**Strategy**: Take the most obvious next action based on current context and momentum.