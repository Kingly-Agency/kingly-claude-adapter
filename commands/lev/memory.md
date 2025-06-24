# /lev/memory - Memory System Operations and Backend Management

## MISSION: Hybrid Memory Architecture Management with Backend Switching

When user says "/lev/memory":

## PRE-LOADED CONTEXT: Hybrid Memory Architecture

**5-Tier Memory System**:
- **Procedural Memory**: Successful workflow patterns and automation sequences
- **Semantic Memory**: Conceptual knowledge and domain understanding  
- **Temporal Memory**: Time-based context and session evolution
- **Working Memory**: Active session state and immediate context
- **Episodic Memory**: Experience-based learning and historical patterns

**Backend Architecture**:
- **Primary**: Graphiti on Neo4j (graph-based temporal knowledge)
- **Fallback**: File system storage (sovereignty and reliability)
- **Future**: Mastra memory backends (production enhancement)
- **Development**: Memory-only backend (testing and development)

**Access Patterns**:
- **Fast Access**: RAM/Cache for working memory and context buffers
- **Medium Access**: Neo4j for semantic and temporal memory with vector embeddings
- **Persistent Access**: File system for procedural workflows and checkpoints

## MEMORY OPERATIONS

### **Backend Management**
```bash
# Check current memory backend status
/lev/memory status
→ Display active backends, health, and performance metrics

# Switch memory backend
/lev/memory switch-backend [graphiti|mastra|memory-only|file-system]
→ Seamlessly switch between memory backends with data migration

# Backend performance analysis
/lev/memory analyze-performance
→ Memory access patterns, bottlenecks, and optimization recommendations

# Backend health check
/lev/memory health-check
→ Validate all backends and fallback systems
```

### **Memory Content Operations**
```bash
# Store procedural memory
/lev/memory store procedural "mastra-integration-workflow" --pattern="[workflow-steps]"

# Retrieve semantic knowledge
/lev/memory retrieve semantic "LLM-first architecture patterns"

# Search temporal context
/lev/memory search temporal --timeframe="last-30-days" --context="constitutional-ai"

# Update working memory
/lev/memory update working --session-id="current" --context="[context-data]"

# Archive episodic experiences
/lev/memory archive episodic --experience="[experience-data]" --insights="[insights]"
```

### **Memory Analysis and Optimization**
```bash
# Memory usage analytics
/lev/memory analytics
→ Memory utilization, access patterns, growth trends

# Compression and optimization
/lev/memory compress --threshold="90-days" --type="episodic"
→ Compress old memories while preserving patterns

# Memory relationship mapping
/lev/memory map-relationships --type="semantic" --depth=3
→ Visualize knowledge connections and clusters

# Memory integrity check
/lev/memory verify-integrity
→ Validate memory consistency across backends
```

## MEMORY BACKEND CONFIGURATIONS

### **Graphiti (Neo4j) Backend**
```yaml
graphiti_config:
  connection: "bolt://localhost:7687"
  database: "leviathan_memory"
  
  memory_types:
    semantic:
      index_type: "vector"
      embedding_model: "text-embedding-3-small"
      similarity_threshold: 0.8
      
    temporal:
      time_resolution: "session"
      retention_policy: "90-days"
      compression_strategy: "hierarchical"
      
    procedural:
      pattern_extraction: "automatic"
      success_threshold: 0.9
      revision_tracking: true

  performance:
    cache_size: "512MB"
    batch_size: 1000
    connection_pool: 10
```

### **File System Backend**
```yaml
filesystem_config:
  root_path: "~/.leviathan/memory"
  
  directory_structure:
    procedural: "workflows/"
    semantic: "knowledge/"
    temporal: "sessions/"
    working: "active/"
    episodic: "experiences/"
    
  file_formats:
    procedural: "yaml"
    semantic: "markdown"
    temporal: "json"
    working: "json"
    episodic: "yaml"
    
  backup:
    enabled: true
    frequency: "daily"
    retention: "30-days"
```

### **Mastra Memory Backend** (Future Integration)
```yaml
mastra_config:
  memory_provider: "@mastra/memory"
  
  integration_points:
    vector_store: "pinecone"  # or weaviate, chroma
    embedding_model: "@mastra/openai"
    persistence: "postgresql"
    
  compatibility_layer:
    map_procedural: "mastra_workflows"
    map_semantic: "mastra_knowledge"
    map_temporal: "mastra_sessions"
    map_working: "mastra_context"
    map_episodic: "mastra_experiences"
```

## MEMORY INTELLIGENCE PATTERNS

### **Automatic Memory Assembly**
```
🧠 **Smart Memory Assembly**

Context Request: "bidirectional flow implementation patterns"

Memory Assembly Process:
1. **Semantic Search**: Find relevant knowledge chunks
2. **Temporal Context**: Include recent session context  
3. **Procedural Patterns**: Add successful implementation workflows
4. **Episodic Insights**: Include lessons learned from similar implementations
5. **Working Memory**: Merge with current session state

Output: Comprehensive context assembly for LLM reasoning
```

### **Constitutional Memory Filtering**
```
🏛️ **Constitutional Memory Filter**

All memory operations filtered through constitutional principles:

- **Cortisol Reduction**: Store calm, clear patterns; avoid stress-inducing complexity
- **Bootstrap Sovereignty**: Prioritize self-contained, dependency-free memories
- **Progressive Disclosure**: Organize memory hierarchically by complexity
- **Recursive Excellence**: Enhance memories that improve with repetition
- **Economic Empowerment**: Prioritize value-creating and skill-building memories
- **Multi-Verse Scaling**: Ensure memories work across different contexts and scales
```

### **8-Personality Memory Perspectives**
```
🎭 **Multi-Personality Memory Access**

Memory retrieval through personality-specific lenses:

**Yin Personalities (Stabilizing)**:
- **SFJ Caregiver**: Stress-reducing patterns and user experience memories
- **STJ Leader**: Structural patterns and governance frameworks
- **SFP Connector**: Relationship and collaboration memories
- **STP Adapter**: Practical implementation and adaptation patterns

**Yang Personalities (Amplifying)**:
- **NFP Advocate**: Values-aligned patterns and ethical frameworks
- **NTP Innovator**: Creative solutions and innovative approaches
- **NFJ Visionary**: Future-oriented patterns and strategic visions
- **NTJ Strategist**: Power patterns and competitive advantages
```

## MEMORY MIGRATION AND BACKUP

### **Backend Migration**
```bash
# Migrate between backends
/lev/memory migrate --from="graphiti" --to="mastra" --verify=true

# Backup before migration
/lev/memory backup --all-backends --location="~/lev/backups/memory"

# Restore from backup
/lev/memory restore --backup-location="~/lev/backups/memory/2025-06-22"

# Sync between backends
/lev/memory sync --primary="graphiti" --secondary="file-system"
```

### **Data Integrity and Recovery**
```bash
# Verify memory integrity across backends
/lev/memory verify --backends="all" --deep-check=true

# Repair corrupted memories
/lev/memory repair --type="semantic" --auto-fix=true

# Memory deduplication
/lev/memory deduplicate --similarity-threshold=0.95

# Recovery from partial failures
/lev/memory recover --backend="graphiti" --fallback="file-system"
```

## MEMORY ANALYTICS AND INSIGHTS

### **Usage Analytics**
```
📊 **Memory System Analytics**

Backend Performance:
- Graphiti: 450ms avg query time, 99.2% uptime
- File System: 45ms avg access, 100% reliability
- Memory-only: 5ms access, session-scoped

Memory Distribution:
- Procedural: 2.1GB (successful workflows and patterns)
- Semantic: 8.7GB (knowledge graphs and concepts)
- Temporal: 1.3GB (session evolution and context)
- Working: 156MB (active session state)
- Episodic: 945MB (experiences and insights)

Access Patterns:
- Most accessed: Constitutional AI patterns (2,847 queries)
- Growth rate: 15MB/day average
- Compression ratio: 67% for temporal memories older than 30 days
```

### **Memory Relationship Insights**
```
🕸️ **Memory Relationship Mapping**

Key Memory Clusters:
1. **LLM-First Architecture**: 47 interconnected concepts
2. **Constitutional AI Framework**: 23 principle-based patterns
3. **Bidirectional Flow**: 31 implementation patterns
4. **Workshop Intelligence**: 89 tool evaluation frameworks
5. **Plugin Architecture**: 15 core boundary definitions

Emerging Patterns:
- Strong correlation between constitutional compliance and long-term success
- Bidirectional flow patterns consistently lead to emergent intelligence
- Workshop tier classifications predict integration success (92% accuracy)
```

## USAGE EXAMPLES

```bash
# Quick memory status check
/lev/memory status

# Find relevant patterns for current work
/lev/memory search "mastra integration patterns"

# Switch to Mastra backend for testing
/lev/memory switch-backend mastra

# Store successful workflow
/lev/memory store procedural "constitutional-ai-analysis" --success-rate=0.95

# Analyze memory performance
/lev/memory analytics --timeframe="last-week"

# Backup critical memories
/lev/memory backup --types="procedural,semantic" --priority="critical"
```

**Strategy**: Provide intelligent memory management that enhances LLM reasoning through constitutional filtering, multi-personality perspectives, and seamless backend switching while maintaining sovereignty and performance optimization.