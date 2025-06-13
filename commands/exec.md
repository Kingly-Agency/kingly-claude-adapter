/exec <plan> - Action Mode with Chaining

When user says `/exec $ARGUMENT`:

1. Parse plan for:
   - Workflow sequences mentioned
   - Goals/outcomes desired
   - Action items vs analysis items
2. Build execution chain:
   - Execute:
```bash
kingly chain "$ARGUMENTS" "$ARGUMENTS"
```
   - Identify decision points and validation steps
3. Execute with tracking:
   - Mark current step: [🔄 Step N: Workflow Name]
   - Show progress: [🟩🟩🟩⬜⬜] 60%
   - Ask for validation before major transitions
4. Chain workflows automatically:
   - Complete step → Execute:
```bash
kingly next "$ARGUMENTS"
```
   - Suggest logical progression
   - Allow user to override/redirect
