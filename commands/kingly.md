/kingly - Context-Aware Intelligence Translator

## MISSION: Be the intelligent translator between user intent and context discovery

When user says "/kingly":

1. **Extract Context from Recent Messages**
   - Analyze last 3-5 messages for technical terms, project context, goals
   - Identify domain-specific language (DX, UX, API, CLI, etc.)
   - Capture user intent and complexity level

2. **Execute Universal Context Search**
   ```bash
   # Return ALL relevant contexts, not pre-filtered
   kingly find "$EXTRACTED_CONTEXT" --all-types
   ```

3. **Present Full Context Set with Whisper Strategies**
   ```
   🎯 All relevant contexts for: [extracted context]
   
   **Workflows:**
   1. [workflow-slug] - [description] (confidence: X%)
   2. [workflow-slug] - [description] (confidence: X%)
   
   **Tools:**  
   3. [tool-slug] - [description] (confidence: X%)
   
   **Agents:**
   4. [agent-slug] - [description] (confidence: X%)
   
   **Patterns:**
   5. [pattern-slug] - [description] (confidence: X%)
   
   💡 **Whisper Strategies** (static wisdom):
   • "For complex problems, start with user-motivation understanding"
   • "Multiple contexts needed? Use orchestration sequence approach"  
   • "Technical implementation? Consider agent + tool + pattern combination"
   • "Strategic decisions? Apply CEO multi-perspective analysis"
   ```

4. **Enhanced Selection Interface**
   ```
   📋 Quick Selection: 
   • [1-9] - Execute specific context
   • [combine] - Chain multiple contexts  
   • [more] - Show additional matches
   • [strategy] - Get situation-specific wisdom
   ```

5. **LLM-First Philosophy**
   - Return ALL contexts, let LLM choose best options
   - Provide whisper strategies as "static words of wisdom"  
   - Include callback mechanisms: "Need more info? Try 'kingly status --project'"
   - Always inform about available context types and combinations

6. **Self-Talk Design Method**
   - "What would I tell myself to create the best developer experience?"
   - "How do I eliminate discovery friction while maintaining depth?"
   - "What strategies work consistently across different scenarios?"

7. **Strategy Framework**
   - **Whispers = Static Wisdom**: Proven strategies for common situations
   - **Combos = Dynamic Sequences**: Context chains that work well together
   - **Everything is Context**: Unified lookup with semantic slugs
   - **Callback Guidance**: Always provide "what's next" options

## Key Improvements from Breakthrough Insights:

- **No More Weird Codes**: Use semantic slugs (creative-brainstorming vs 1i)
- **All Contexts Returned**: Let LLM choose from full set, not pre-filtered top 3
- **Whisper Strategies**: Static wisdom instead of hardcoded combos
- **Universal Context Discovery**: Single lookup with --type filters
- **LLM Callback Awareness**: Always inform about additional information sources

## Example Execution:
```
User: "I need to improve the DX for our CLI tool"

Context Extracted: "developer experience CLI tool improvement"

kingly find "developer experience CLI tool improvement" --all-types

Returns: user-motivation-framework, systematic-creativity, CEO-perspective, interface-design-patterns, debugging-strategies

Whisper: "For DX improvements, start with user motivation understanding, then apply systematic creativity to interface design"
```

**Strategy**: Be the intelligent bridge between human intent and context discovery, always providing full options with wisdom guidance.