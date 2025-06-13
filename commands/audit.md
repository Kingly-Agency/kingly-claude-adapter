# /audit - Interactive System Trace & Analysis

## MISSION: Create comprehensive audit trails for debugging and optimization

When user says "/audit":

1. **Interactive Trace Methodology**
   - Document every command interaction with inputs/outputs
   - Capture timing data for semantic search vs exact lookup
   - Record success/failure patterns with detailed context
   - Analyze whisper system effectiveness and strategy recommendations

2. **Audit Trail Structure**
   ```
   .kingly/audit-traces/
   ├── YYYY-MM-DD-HH-MM-SS-audit.json
   ├── session-traces/
   └── performance-analysis/
   ```

3. **Interactive Trace Template**
   ```
   ## Interaction N: [Description]
   **What I did**: [Action taken]
   **Why**: [Reasoning]
   **Command**: ```bash command here```
   **Output**: [Complete output with analysis]
   **Issues Found**: [Problems identified]
   **Success Metrics**: [What worked well]
   ```

4. **Key Metrics to Capture**
   - Command execution time (semantic vs exact lookup)
   - Code hallucination detection (NLP suggesting non-existent codes)
   - Search accuracy (exact match vs semantic similarity)
   - User experience friction points
   - Whisper strategy effectiveness

5. **Debugging Strategies**
   - **Systematic Testing**: Test each command type individually
   - **Trace Comparison**: Compare working vs broken interaction patterns  
   - **Performance Analysis**: Measure filesystem vs in-memory operations
   - **User Journey Mapping**: Document complete task flows

6. **Analysis Framework**
   - **What Works**: Semantic search, whisper metadata, CLI structure
   - **What's Broken**: Exact code lookup, NLP code hallucination
   - **Performance Bottlenecks**: Filesystem operations, cache misses
   - **UX Friction**: Discovery complexity, code memorization

7. **Output Formats**
   - **Real-time**: Terminal output with timing annotations
   - **Session**: Complete trace saved to `.kingly/audit-traces/`
   - **Analysis**: Performance metrics and improvement recommendations
   - **Visualization**: Command flow diagrams and bottleneck identification

## Example Audit Session

```bash
# Start audit session
kingly audit --start "semantic-search-debugging"

# Run test commands with full tracing
kingly find "creative brainstorming" --trace
kingly find "1i" --trace  
kingly find "innovator" --trace

# Analyze results
kingly audit --analyze --session "semantic-search-debugging"

# Generate report
kingly audit --report --output .kingly/audit-traces/
```

## Success Criteria
- Complete interaction trace with timing data
- Clear identification of working vs broken patterns
- Actionable recommendations for system improvements
- Performance baseline for optimization tracking
- User experience friction point documentation

**Strategy**: Document everything, measure performance, identify patterns, optimize systematically.