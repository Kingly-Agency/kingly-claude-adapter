/kingly - Context-Aware Intelligence Translator

## MISSION: Be the intelligent translator between user intent and context discovery

When user says "/kingly":

1. **Extract Context from Recent Messages**
   - Analyze last 3-5 messages for technical terms, project context, goals
   - Identify domain-specific language (DX, UX, API, CLI, etc.)
   - Capture user intent and complexity level

2. **Execute Universal Context Search**
   ```bash
   # Use enhanced semantic search with rich YAML content and slug-based contexts
   kingly find "$EXTRACTED_CONTEXT" --all-types
   ```

3. **Present Full Context Set with Whisper Strategies**
   ```
   🎯 All relevant contexts for: [extracted context]
   
   **Workflows:**
   1. cognitive-parliament - Multi-perspective decision analysis (89%)
   2. design-thinking-process - Human-centered innovation framework (84%)
   
   **Tools:**  
   3. discord-tool - Team communication integration (92%)
   4. research-mcp-suite - Enhanced research capabilities (87%)
   
   **Agents:**
   5. deep-researcher - Comprehensive analysis specialist (91%)
   
   **Patterns:**
   6. systematic-creativity - Structured ideation framework (88%)
   7. first-principles-thinking - Core problem analysis (85%)
   
   💡 **Whisper Strategies** (static wisdom):
   • "For complex problems, start with user-motivation understanding"
   • "Multiple contexts needed? Use orchestration sequence approach"  
   • "Technical implementation? Consider agent + tool + pattern combination"
   • "Strategic decisions? Apply CEO multi-perspective analysis"
   ```

4. **Flow-Based Selection Interface**
   ```
   ⚡ **Next Steps:** 
   • Pick a number (1-7) - Execute specific context
   • "combine 1+3+6" - Chain multiple contexts intelligently
   • "more tools" - Show additional matches by type
   • "why 5?" - Get reasoning for confidence score
   • Just tell me what feels right - Natural language selection
   ```

5. **LLM-First Philosophy**
   - Return ALL contexts, let LLM choose best options
   - Provide whisper strategies as "static words of wisdom"  
   - Include callback mechanisms: "Need more info? Try '/checkpoint --resume' or '/research [topic]'"
   - Always inform about available context types and intelligent combinations
   - Integrate with checkpoint system for session continuity

6. **Self-Talk Design Method**
   - "What would I tell myself to create the best developer experience?"
   - "How do I eliminate discovery friction while maintaining depth?"
   - "What strategies work consistently across different scenarios?"

7. **Strategy Framework**
   - **Whispers = Static Wisdom**: Proven strategies for common situations
   - **Combos = Dynamic Sequences**: Context chains that work well together
   - **Everything is Context**: Unified lookup with semantic slugs
   - **Callback Guidance**: Always provide "what's next" options

## Key Improvements from Enhanced System:

- **Slug-Based Contexts**: Memorable names (systematic-creativity vs 1a)
- **Rich YAML Embeddings**: Enhanced semantic search with 73 contexts
- **Dynamic Type Discovery**: File-system driven context types
- **Flow-Based Intelligence**: Zero cognitive load command experience
- **Session Continuity**: Checkpoint system integration for persistent context
- **Research Integration**: Enhanced /research command with context awareness

## Example Execution:
```
User: "I need to improve the DX for our CLI tool"

Context Extracted: "developer experience CLI tool improvement"

kingly find "developer experience CLI tool improvement" --all-types

Returns: 
1. user-motivation-framework - Understand what users actually need (89%)
2. systematic-creativity - Generate innovative UX solutions (84%)
3. interface-design-patterns - CLI-specific best practices (87%)  
4. error-recovery-patterns - Design helpful failure experiences (92%)

Flow Response: "For DX improvements, start with user-motivation (1) to understand pain points, then systematic-creativity (2) for solutions. Want to combine 1+2+4 for comprehensive UX enhancement?"
```

**Strategy**: Be the intelligent bridge between human intent and context discovery, always providing full options with wisdom guidance.