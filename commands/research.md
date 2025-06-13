# /research - Intelligent Research Enhancement System

## 🎯 ENHANCEMENT TECHNIQUES

### **Context-Aware Prompt Architecture**
Transform simple queries into sophisticated, contextually-rich prompts for maximum insight generation.

**Enhancement Strategies:**
1. **Domain Expertise Injection** - Add relevant expert perspectives
2. **Multi-Angle Analysis** - Request multiple viewpoints and approaches  
3. **Constraint Integration** - Include specific parameters and limitations
4. **Output Structuring** - Define clear format and organization requirements
5. **Depth Calibration** - Adjust technical depth based on context
6. **Source Prioritization** - Guide toward authoritative and recent sources

### **Prompt Enhancement Patterns**

#### **Research Enhancement**
```
You are [relevant expert type] analyzing [specific domain].
Provide a comprehensive analysis of [query] that includes:
1. Current state assessment with recent developments
2. Multiple expert perspectives and methodologies
3. Practical implications and real-world applications
4. Potential challenges and limitations
5. Future directions and emerging trends

Focus on authoritative sources from [timeframe] and prioritize [specific criteria].
Structure your response with clear sections and actionable insights.
```

#### **Technical Analysis Enhancement**
```
As a [technical expert] with expertise in [domain], analyze [topic] with focus on:
- Technical specifications and requirements
- Implementation considerations and best practices
- Performance implications and optimization strategies
- Compatibility and integration challenges
- Cost-benefit analysis and ROI considerations

Provide concrete examples and cite specific sources where possible.
```

#### **Strategic Decision Enhancement**
```
From a strategic planning perspective, evaluate [decision/option] considering:
- Market dynamics and competitive landscape
- Risk assessment and mitigation strategies
- Resource requirements and constraints
- Timeline and implementation phases
- Success metrics and KPIs

Include both quantitative data and qualitative insights.
```

## 🔄 AUTOMATIC ENHANCEMENT TRIGGERS

### **Context Analysis Triggers**
- Technical terms detected → Apply technical enhancement
- Business context detected → Apply strategic enhancement  
- Research request detected → Apply research enhancement
- Comparison request detected → Apply multi-angle analysis
- Implementation question detected → Apply practical enhancement

### **Prompt Augmentation Process**
1. **Intent Recognition** - Classify query type and domain
2. **Context Extraction** - Pull relevant conversation context
3. **Enhancement Selection** - Choose appropriate enhancement pattern
4. **Prompt Construction** - Build enhanced query with techniques
5. **Execution** - Run via mcp__perplexity-ask with enhanced prompt

## 🎯 FLOW-BASED RESEARCH EXPERIENCE

When user says `/research [topic]`:

1. **Extract Research Context** from recent conversation
2. **Auto-detect Research Type:**
   - Technical implementation → Apply technical enhancement  
   - Strategic decision → Apply strategic enhancement
   - Learning/exploration → Apply research enhancement
   - Comparison analysis → Apply multi-angle analysis

3. **Enhanced Query Construction:**
   ```
   🎯 **Enhanced Research:** [original query]
   
   [Contextually enhanced prompt with domain expertise]
   
   🔍 **Researching with:**
   - Expert perspective: [detected domain expert]
   - Analysis depth: [technical/strategic/general]
   - Focus areas: [extracted from context]
   ```

4. **Intelligent Results Integration:**
   - Summarize key insights relevant to current work
   - Suggest follow-up research directions
   - Connect findings to available Kingly contexts
   - Provide checkpoint integration for session continuity

## 🎨 DYNAMIC PROMPT CONSTRUCTION

### **Variable Enhancement Elements**
- `{DOMAIN_EXPERT}` - Contextually relevant expert persona
- `{ANALYSIS_DEPTH}` - Technical depth based on user expertise
- `{TIMEFRAME}` - Relevant time constraints for information
- `{OUTPUT_FORMAT}` - Structured format requirements
- `{CONSTRAINT_SET}` - Specific limitations and parameters

### **Context-Responsive Modifiers**
- **High-stakes decisions** → Add risk analysis and validation
- **Implementation focus** → Add practical steps and examples
- **Learning context** → Add educational structure and progression
- **Innovation context** → Add creative exploration and possibilities