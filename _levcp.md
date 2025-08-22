# Leviathan Checkpoint Integration Analysis & Implementation Plan

## 🎯 CONTEXT & PROBLEM ANALYSIS

### Background
The user wanted to enhance Claude Code's hook system to implement periodic checkpoint injection for persistent memory across sessions. Initially explored generic checkpoint systems, but discovered the user already has an extensive Leviathan (`lev`) checkpoint system at `~/digital/leviathan/` that provides:

- **Session Management**: Complete session tracking with IDs
- **Checkpoint Storage**: YAML-based checkpoint files in `~/.leviathan/`
- **Memory Types**: Decisions, concepts, code snippets, context, rollups
- **CLI Interface**: `lev checkpoint` command with multiple modes

### Current Hook Issue Resolution
**COMPLETED**: Fixed rm command blocking issue in `pre_tool_use.py` where Pattern 8 regex `r'\brm\s+.*-[a-z]*r'` was incorrectly matching the letter 'r' in file paths like `/Users/jean-patricksmith/` as a recursive flag. 

**Solution Applied**: Made recursive flag detection more precise by requiring proper flag boundaries and spacing.

## 🏗️ EXISTING LEVIATHAN CHECKPOINT ARCHITECTURE

### Storage Structure
```
~/.leviathan/
├── checkpoints/          # Individual checkpoint files
│   └── checkpoint-{timestamp}-{id}.yaml
├── sessions/             # Session tracking
│   └── {sessionId}.yaml
├── rollups/              # Session summaries  
│   └── {sessionId}-rollup.yaml
└── memory/               # Memory type storage
    ├── decisions/
    ├── concepts/
    ├── snippets/
    ├── context/
    └── rollups/
```

### Checkpoint Data Structure
```yaml
# checkpoint-{timestamp}-{id}.yaml
checkpoint:
  id: "checkpoint-1234567890-abcd"
  sessionId: "2025-01-10-session-xyz123"
  context: "completed typescript build fixes"
  files: ["src/app.ts", "package.json"]
  mode: "progress" # progress|new|resume|final
  snippet: "file:lines" # optional code reference
  workspace: "project-name"
  createdAt: 1641807600000
  metadata:
    contextLength: 45
    fileCount: 2
    complexity: "medium"
```

### Session Management
```yaml
# session-{id}.yaml  
session:
  id: "2025-01-10-session-xyz123"
  createdAt: 1641807600000
  lastActivity: 1641810000000
  checkpoints: ["checkpoint-1234-abcd", "checkpoint-5678-efgh"]
  status: "active" # active|completed
  workspace: "project-name"
```

### CLI Interface
```bash
# Core checkpoint operations
lev checkpoint "context description"              # Progress checkpoint
lev checkpoint --new "starting new work"          # New session
lev checkpoint --resume --session="session-id"    # Resume session
lev checkpoint --final --session="session-id"     # Finalize session

# Advanced options
lev checkpoint --files="file1.js,file2.ts" "updated modules"
lev checkpoint --snippet="app.js:45-60" "fixed auth logic"
```

## 🚀 IMPLEMENTATION PLAN: PERSISTENT MEMORY INTEGRATION

### Phase 1: Smart Checkpoint Injection

**Target File**: `/Users/jean-patricksmith/.claude/hooks/user_prompt_submit.py`

**Enhancement Strategy**: Modify `user_prompt_submit.py` to:

1. **Analyze user prompts** for checkpoint-worthy moments
2. **Inject lev checkpoint commands** transparently 
3. **Track session continuity** across Claude Code restarts

#### Implementation Details

```python
def detect_checkpoint_triggers(prompt, session_context):
    """Detect when checkpoints should be created based on content analysis."""
    
    # Progress indicators
    progress_patterns = [
        r'\b(VERIFIED|FIXED|COMPLETED|WORKING|SUCCESS)\b',
        r'\b(that works|perfect|great|excellent)\b',
        r'\b(done|finished|complete)\b',
        r'\b(implemented|deployed|tested)\b'
    ]
    
    # Decision points  
    decision_patterns = [
        r'\b(decided|chose|going with|approach)\b',
        r'\b(architectural|design decision)\b',
        r'\b(breakthrough|insight|solution)\b'
    ]
    
    # Context switching
    switch_patterns = [
        r'\b(now let\'s|moving on|next|switch to)\b',
        r'\b(different|another|new task)\b'
    ]
    
    return {
        'should_checkpoint': any(re.search(p, prompt, re.I) for p in progress_patterns),
        'type': 'progress' if progress_patterns else 'decision' if decision_patterns else 'switch',
        'confidence': calculate_confidence(prompt, session_context)
    }

def inject_smart_checkpoint(prompt, session_data):
    """Inject context-aware checkpoint commands."""
    
    triggers = detect_checkpoint_triggers(prompt, session_data)
    
    if triggers['should_checkpoint'] and triggers['confidence'] > 0.7:
        # Extract context from recent messages
        context = extract_checkpoint_context(prompt, session_data)
        
        # Smart file detection from conversation
        files = extract_mentioned_files(prompt, session_data)
        
        # Generate checkpoint command
        checkpoint_cmd = generate_checkpoint_command(context, files, triggers['type'])
        
        return prompt + f"\n\nAlso: {checkpoint_cmd}"
    
    return prompt

def track_prompt_patterns(session_id, prompt):
    """Track conversation patterns for checkpoint timing."""
    count_file = Path("logs") / f"prompt_patterns_{session_id[:8]}.json"
    
    if count_file.exists():
        with open(count_file, 'r') as f:
            data = json.load(f)
    else:
        data = {"count": 0, "last_checkpoint": 0, "patterns": []}
    
    data["count"] += 1
    
    # Analyze prompt for checkpoint indicators
    patterns = analyze_prompt_patterns(prompt)
    data["patterns"].extend(patterns)
    
    with open(count_file, 'w') as f:
        json.dump(data, f)
    
    return data

def should_inject_periodic_checkpoint(count, last_checkpoint, interval=7):
    """Determine if periodic checkpoint is needed (every N prompts)."""
    return count - last_checkpoint >= interval
```

### Phase 2: Session Continuity Integration

**Target File**: `/Users/jean-patricksmith/.claude/hooks/session_start.py`

**Enhancement Strategy**: Load checkpoint context when sessions start

```python
def load_checkpoint_context():
    """Load most recent lev checkpoint context for session continuity."""
    
    try:
        # Run lev command to get latest checkpoint
        result = subprocess.run([
            'lev', 'checkpoint', '--resume'
        ], capture_output=True, text=True, timeout=10)
        
        if result.returncode == 0:
            # Parse checkpoint data
            context_data = parse_checkpoint_output(result.stdout)
            
            return format_context_injection(context_data)
        
    except Exception as error:
        return f"⚠️ Could not load checkpoint context: {error}"
    
    return None

def format_context_injection(checkpoint_data):
    """Format checkpoint data for Claude context injection."""
    
    if not checkpoint_data:
        return None
    
    return f"""
📍 **SESSION CONTINUITY**: Resuming from checkpoint
🔖 **Session**: {checkpoint_data.get('sessionId', 'unknown')[:12]}...
📝 **Context**: {checkpoint_data.get('context', 'No context available')}
📁 **Files**: {', '.join(checkpoint_data.get('files', []))}
🎯 **Progress**: {checkpoint_data.get('progression', 'No progression data')}
⏰ **Last Activity**: {format_timestamp(checkpoint_data.get('lastActivity'))}

💡 You can continue from this state or start fresh work as needed.
"""
```

### Phase 3: Memory Type Classification

**Integration with Leviathan Memory Types**:

```yaml
memory_classification:
  decisions:
    description: "Architectural decisions and key choices"
    triggers: ["decided", "chose", "approach", "architecture"]
    lev_command: "lev checkpoint --type=decision"
    
  concepts:
    description: "Ideas, concepts, and breakthroughs"  
    triggers: ["concept", "idea", "breakthrough", "insight"]
    lev_command: "lev checkpoint --type=concept"
    
  code_snippets:
    description: "Important code references and patterns"
    triggers: ["snippet:", "file:", "function", "class"]
    lev_command: "lev checkpoint --snippet={detected_snippet}"
    
  progress:
    description: "Working progress and task completion"
    triggers: ["completed", "fixed", "working", "done"]
    lev_command: "lev checkpoint"
    
  context_switch:
    description: "Moving between different work areas"
    triggers: ["moving on", "next", "switch to", "now let's"]
    lev_command: "lev checkpoint --context='context switch'"
```

## 🔧 CONFIGURATION OPTIONS

### Environment Variables
```bash
# Checkpoint behavior settings
LEV_CHECKPOINT_INTERVAL=7        # Every N prompts
LEV_CHECKPOINT_AUTO=true         # Enable auto-checkpointing  
LEV_CHECKPOINT_CONFIDENCE=0.7    # AI confidence threshold
LEV_CHECKPOINT_TYPES=all         # decision,concept,progress,switch
LEV_SESSION_RESUME=true          # Auto-resume on session start
```

### Hook Configuration
```python
# In user_prompt_submit.py
CHECKPOINT_CONFIG = {
    'enabled': True,
    'interval': int(os.getenv('LEV_CHECKPOINT_INTERVAL', 7)),
    'confidence_threshold': float(os.getenv('LEV_CHECKPOINT_CONFIDENCE', 0.7)),
    'auto_resume': os.getenv('LEV_SESSION_RESUME', 'true').lower() == 'true',
    'memory_types': os.getenv('LEV_CHECKPOINT_TYPES', 'all').split(',')
}
```

## 🎯 IMPLEMENTATION STEPS

### Step 1: Enhance user_prompt_submit.py
1. Add checkpoint detection logic
2. Implement smart command injection
3. Add session tracking
4. Test with simple patterns first

### Step 2: Enhance session_start.py  
1. Add lev checkpoint resume integration
2. Format context injection for Claude
3. Handle missing checkpoint gracefully
4. Test session continuity

### Step 3: Create Configuration System
1. Add environment variable support
2. Create settings management
3. Allow per-project customization
4. Add enable/disable controls

### Step 4: Testing & Refinement
1. Test checkpoint injection with real conversations
2. Refine AI pattern detection accuracy
3. Optimize checkpoint frequency
4. Validate session continuity

## 🚨 IMPORTANT NOTES

### Integration Points
- **Leviathan CLI**: Ensure `lev` command is available and working
- **Working Directory**: Checkpoints should work from any directory
- **Session IDs**: Maintain consistency with lev session management
- **Error Handling**: Graceful fallback when lev commands fail

### User Experience
- **Transparency**: User should see checkpoint commands being executed
- **Control**: Allow users to disable auto-checkpointing
- **Performance**: Avoid slowing down conversation flow
- **Reliability**: System should work even if checkpoints fail

### Security Considerations
- **Command Injection**: Sanitize any user input used in commands
- **File Access**: Respect file permissions and access controls
- **Data Storage**: Ensure checkpoint data is stored securely

## 🎯 SUCCESS CRITERIA

1. **Auto-Detection**: System accurately detects checkpoint-worthy moments
2. **Session Continuity**: Claude can resume exactly where previous sessions left off
3. **Memory Persistence**: Important decisions/concepts/code are preserved
4. **User Control**: Users can customize or disable the system
5. **Performance**: No noticeable impact on conversation speed
6. **Reliability**: System works consistently across different project types

## 🔄 NEXT ACTIONS

The implementing agent should:

1. **Start with user_prompt_submit.py**: Implement basic checkpoint detection and injection
2. **Test incrementally**: Begin with simple pattern matching before advanced AI detection  
3. **Integrate with lev**: Ensure proper lev command integration and error handling
4. **Add session continuity**: Implement session_start.py enhancements
5. **Create configuration**: Add environment variable and settings support
6. **Validate thoroughly**: Test across multiple conversation types and scenarios

This creates a powerful persistent memory system that bridges Claude Code sessions with the user's existing Leviathan infrastructure for true session continuity and long-term memory preservation.