# /lev/find - Leviathan Semantic Context Discovery

## MISSION: Context-Aware Intelligence Router & Session Manager

When user says "/lev/find":

1. **Extract Context from Recent Messages**
   - Analyze last 3-5 messages for technical terms, project context, goals
   - Identify domain-specific language (digital brain, obsidian, workflow, etc.)
   - Capture user intent and complexity level

2. **Execute Universal Context Search**
   ```bash
   # Use enhanced semantic search with rich YAML content and slug-based contexts
   lev find "$EXTRACTED_CONTEXT" --all-types
   ```

3. **Present Full Context Set with Intelligence Strategies**
   ```
   🎯 All relevant contexts for: [extracted context]
   
   **Workflows:**
   A. digital-brain-setup - Complete obsidian configuration (92%)
   B. plugin-development - Custom obsidian plugin creation (87%)
   
   **Tools:**  
   C. obsidian-toolkit - Vault management and optimization (94%)
   D. file-indexer - Large collection processing (89%)
   
   **Agents:**
   E. knowledge-architect - Information organization specialist (91%)
   
   **Patterns:**
   F. phase-driven-development - Iterative system building (88%)
   G. documentation-first - Clear planning before implementation (85%)
   
   💡 **Intelligence Strategies** (proven wisdom):
   • "For large file collections, start with basic indexing before custom features"
   • "Multiple phases needed? Use documentation + implementation approach"  
   • "Technical setup? Consider tool + pattern + verification combination"
   • "System decisions? Apply phase-driven methodology"
   ```

4. **Flow-Based Selection Interface**
   ```
   ⚡ **Next Steps:** 
   • Pick a letter (A-G) - Execute specific context
   • "combine A+C+F" - Chain multiple contexts intelligently
   • "more tools" - Show additional matches by type
   • "why E?" - Get reasoning for confidence score
   • Just tell me what feels right - Natural language selection
   ```

5. **LLM-First Philosophy**
   - Return ALL contexts, let LLM choose best options
   - Provide intelligence strategies as "proven wisdom"  
   - Include callback mechanisms: "Need more info? Try '/lev/os --resume' or '/lev/research [topic]'"
   - Always inform about available context types and intelligent combinations
   - Integrate with checkpoint system for session continuity

6. **Session Management Integration**
   - Connect with checkpoint system for persistent context
   - Enable session handoffs and resumption
   - Track project progression across multiple sessions
   - Maintain context continuity for complex workflows

## Key Features:

- **Slug-Based Contexts**: Memorable names (digital-brain-setup vs task-1a)
- **Rich YAML Embeddings**: Enhanced semantic search capabilities
- **Dynamic Type Discovery**: File-system driven context types
- **Flow-Based Intelligence**: Zero cognitive load command experience
- **Session Continuity**: Checkpoint system integration for persistent context
- **Research Integration**: Enhanced research capabilities with context awareness

## Example Execution:
```
User: "I need to set up my digital brain with obsidian"

Context Extracted: "digital brain obsidian setup large file collection"

lev find "digital brain obsidian setup large file collection" --all-types

Returns: 
1. obsidian-vault-setup - Complete installation and configuration (94%)
2. large-collection-optimization - Performance tuning for 35k+ files (91%)
3. plugin-development-workflow - Custom enhancement pipeline (87%)  
4. file-indexing-patterns - Efficient organization strategies (89%)

Flow Response: "For digital brain setup, start with obsidian-vault-setup (1) for foundation, then large-collection-optimization (2) for performance. Want to combine 1+2+4 for comprehensive setup?"
```

**Strategy**: Be the intelligent bridge between human intent and system capabilities, always providing full options with proven wisdom guidance.