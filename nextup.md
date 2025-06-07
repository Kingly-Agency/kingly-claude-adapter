# NEXTUP: Claude Code Agent System Upgrade Plan

## ANALYSIS SUMMARY

### 🔍 DISCOVERIES
1. **Kingly Agent System**: Production system at `~/digital/kingly/core/agent/contexts/` with 3 agents + 8 workflows
2. **Synth System**: 3 dynamic specialists working well in `~/.claude/synths/`  
3. **Template Foundation**: Excellent `templates/AGENTS.md` with natural language + variables
4. **Path Issue**: Cache regeneration looking at wrong paths (contexts/agents/ vs kingly paths)
5. **Generated File**: Bypassed template, created hardcoded version with good synth concepts

### ✅ WHAT'S WORKING
- Synth creation and discovery (marketing-branding-wizard, technical-book-editor, technical-book-writer)
- Template system foundation (natural language: "help", "analyze", "brainstorm")
- Kingly agent production system (ceo, dev, eeps agents + cognitive workflows)
- User feedback: synths work well but need reuse mechanism

### 🔴 WHAT'S BROKEN  
- Cache regeneration paths point to non-existent contexts/agents/
- Generated AGENTS.md ignored template completely
- No synth promotion mechanism (can't reuse easily)
- No usage tracking for auto-discovery
- Complex quick codes (4a-4c, 5a-5e) instead of natural language

## UPGRADE PLAN

### PHASE 1: LOCK DOWN WORKING SYSTEM
1. **Fix Cache Regeneration Paths**
   - Update workflow to scan: `/Users/jean-patricksmith/digital/kingly/core/agent/contexts/`
   - Connect to actual kingly agents (ceo, dev, eeps)
   - Bridge .claude experimental → kingly production

2. **Regenerate from Template**
   - Use templates/AGENTS.md as source of truth
   - Add synth variables: {synth_count}, {synth_list_with_descriptions}
   - Keep natural language commands: "help", "analyze", "brainstorm"
   - Fix variable substitution system

3. **Create Test Harness**
   - Claude Code CLI spawning for baseline validation
   - Test agent discovery and recommendations  
   - Validate natural language command parsing
   - Measure response times and accuracy

### PHASE 2: ENHANCE SYNTH SYSTEM
1. **Auto-Discovery**
   - Synths automatically found and coded
   - Integration with kingly agent quick codes
   - Smart routing between synths and agents

2. **Promotion Mechanism**
   - `$agent promote 4a` → move to kingly contexts/agents/
   - Usage tracking for promotion decisions
   - Archive system for future reuse

3. **Usage Analytics**
   - Track synth activations and effectiveness
   - Recommend promotion based on usage patterns
   - Self-evolving multi-agent workflows

### PHASE 3: PROVE CONCEPTS
1. **Claude Code Adapter**
   - Validate .claude experimental → kingly production bridge
   - Test self-evolving workflows
   - Prove multi-agent system concepts

2. **System Evolution**
   - Auto-promotion of valuable synths
   - Cross-pollination between systems
   - Emergent agent behaviors

## IMMEDIATE NEXT STEPS
1. Fix cache regeneration paths → kingly contexts
2. Regenerate AGENTS.md from template properly  
3. Create test harness for validation
4. Test synth auto-discovery and promotion
5. Validate Claude Code command parsing

## SUCCESS METRICS
- Natural language commands work: "help", "analyze", "brainstorm"
- Synths auto-discovered and reusable
- Kingly agents properly integrated
- Usage tracking functional
- Test harness validates all features