# /KINGLY INTELLIGENCE ENGINE - COMPLETE SPECIFICATION
*Complete implementation guide for intelligent agent routing*

## 🎯 BREAKTHROUGH SIMULATION RESULTS

### **Successful Test Case: ADR Agent Recommendation**
```
User Input: "/kingly what agent is best for adrs"

Expected Output:
🎯 /kingly Analysis: ADR Agent Recommendation

**Context Analysis:**
- Query: "what agent is best for adrs"
- Topic: Architecture Decision Records (documentation + decisions)
- Domain: Cross-domain (documentation + architecture)

**🤖 Recommended Agents:**

**Primary:** `1i` **Development Engineer:architect** - System design perspective
- **Why:** ADRs are architectural decisions requiring system design expertise
- **Strength:** Understands technical implications and architectural trade-offs

**Secondary:** `1f` **Chief Executive Officer:strategist** - Long-term planning with document synthesis mastery
- **Why:** ADRs need strategic thinking and excellent documentation
- **Strength:** Document synthesis + long-term impact analysis

**📋 Recommended Patterns:**
- `2c` **decision-matrix** - Comprehensive decision-making framework
- `2k` **reversibility-check** - Assess decision reversibility for appropriate caution level

**🔄 Suggested Workflow:**
- `3h` **multi-expert-validation** - CEO strategic intelligence examining decisions through multiple expert perspectives

**💡 Quick Actions:**
- `/doc` - Switch to documentation domain for ADR writing assistance
- `/validate <your ADR>` - Apply systematic validation framework
```

### **Implementation Requirements Derived from Simulation**
1. **Context Analysis Engine** - Parse query for domain/topic identification
2. **Agent Capability Matching** - Map topics to relevant agents with confidence scoring
3. **Pattern Relevance Scoring** - Suggest applicable thinking patterns
4. **Cross-Domain Routing** - Offer relevant slash commands
5. **Progressive Disclosure** - Show 2-3 agents max, offer "show more" option

## 🧠 INTELLIGENCE ENGINE ARCHITECTURE

### **Context Analysis Pipeline**
```gherkin
Feature: Multi-layered context analysis for intelligent routing
  As /kingly intelligence engine
  I need to understand user intent from natural language
  So I can provide relevant agent recommendations without overwhelming choices

  Scenario: Domain detection from keywords
    Given user query contains domain-specific terms
    When analyzing context
    Then classify into primary domains:
      | Keywords | Domain | Confidence |
      | ADR, architecture, design, system | architecture | high |
      | performance, slow, optimize, bottleneck | development | high |
      | write, document, content, docs | documentation | high |
      | brainstorm, ideas, creative, solutions | strategy | medium |
      | business, product, strategy, planning | business | high |
    And assign confidence score based on keyword density and specificity

  Scenario: Cross-domain detection and handling
    Given query spans multiple domains like "optimize the documentation build process"
    When analyzing context
    Then identify primary domain: development (optimize, build, process)
    And identify secondary domain: documentation (documentation)
    And recommend agents from both domains with priority indication
    And suggest cross-domain workflows and routing options

  Scenario: Complexity and urgency assessment
    Given user language contains complexity/urgency indicators
    When processing query
    Then detect complexity: simple|medium|complex based on scope and technical depth
    And detect urgency: low|medium|high|critical based on language indicators
    And adjust recommendations based on complexity (more experts for complex)
    And adjust response format based on urgency (quick actions for high urgency)
```

### **Agent Capability Mapping System**
```yaml
# Agent capabilities database for intelligent routing
agent_capabilities:
  "1i_architect":
    primary_domains: [architecture, system-design]
    secondary_domains: [technical-decisions, infrastructure]
    keywords: [design, architecture, system, structure, ADR, technical-decision, microservices, patterns]
    strengths: [system-design, architectural-validation, technical-trade-offs]
    use_cases: [ADRs, system-design, architectural-reviews, technical-decisions]
    patterns: [decision-matrix, reversibility-check, swot-analysis]
    confidence_threshold: 0.7
    
  "1f_strategist":
    primary_domains: [strategy, planning, documentation]
    secondary_domains: [business-analysis, long-term-thinking]
    keywords: [strategy, document, synthesis, planning, vision, roadmap, business]
    strengths: [document-synthesis, strategic-thinking, long-term-planning]
    use_cases: [strategic-planning, documentation-strategy, synthesis, business-decisions]
    patterns: [document-synthesis, soar-analysis, 10-10-10-framework]
    confidence_threshold: 0.6

  "1h_engineer":
    primary_domains: [development, performance, implementation]
    secondary_domains: [debugging, optimization, coding]
    keywords: [code, performance, optimize, debug, implement, slow, fast, efficient]
    strengths: [performance-optimization, debugging, implementation]
    use_cases: [performance-issues, debugging, code-optimization, implementation]
    patterns: [noise-analysis, extreme-examples, vibe-coding]
    confidence_threshold: 0.8

  "1k_security":
    primary_domains: [security, compliance, risk]
    secondary_domains: [architecture, development]
    keywords: [security, secure, vulnerability, risk, compliance, audit, threat]
    strengths: [security-analysis, risk-assessment, compliance]
    use_cases: [security-reviews, risk-assessment, compliance-checks]
    patterns: [swot-analysis, reversibility-check, multi-expert-validation]
    confidence_threshold: 0.9

# Pattern relevance mapping
pattern_relevance:
  "2c_decision-matrix":
    applicable_domains: [architecture, business, strategy]
    keywords: [decision, choose, compare, evaluate, options]
    use_cases: [architectural-decisions, business-decisions, technology-choices]
    
  "2k_reversibility-check":
    applicable_domains: [architecture, strategy, business]
    keywords: [decision, permanent, reversible, risk, commitment]
    use_cases: [ADRs, strategic-decisions, technology-adoption]
    
  "2h_noise-analysis":
    applicable_domains: [development, performance, debugging]
    keywords: [analyze, investigate, performance, problem, debug]
    use_cases: [performance-analysis, debugging, problem-solving]

# Cross-domain routing suggestions
domain_routing:
  architecture:
    suggested_commands: ["/validate", "/doc"]
    rationale: "Validate decisions, document outcomes"
    
  documentation:
    suggested_commands: ["/doc"]
    rationale: "Access writing-focused tools and agents"
    
  performance:
    suggested_commands: ["/validate", "/analyze"]
    rationale: "Validate optimizations, deep analysis"
    
  strategy:
    suggested_commands: ["/doc", "/validate", "/brainstorm"]
    rationale: "Document strategies, validate decisions, generate ideas"
```

### **Intelligent Routing Algorithm**
```javascript
// /kingly intelligence engine - Implementation specification
class KinglyIntelligence {
  analyzeQuery(query, conversationContext = '') {
    const analysis = {
      query: query.toLowerCase(),
      context: conversationContext.toLowerCase(),
      timestamp: Date.now()
    };
    
    // Step 1: Domain Classification
    const domains = this.classifyDomains(analysis);
    
    // Step 2: Complexity Assessment  
    const complexity = this.assessComplexity(analysis);
    
    // Step 3: Urgency Detection
    const urgency = this.detectUrgency(analysis);
    
    // Step 4: Agent Matching
    const agentRecommendations = this.matchAgents(domains, complexity, urgency);
    
    // Step 5: Pattern Suggestions
    const patternSuggestions = this.suggestPatterns(domains, analysis);
    
    // Step 6: Workflow Recommendations  
    const workflowSuggestions = this.suggestWorkflows(agentRecommendations, complexity);
    
    // Step 7: Cross-Domain Routing
    const crossDomainRouting = this.suggestRouting(domains);
    
    return {
      analysis: { domains, complexity, urgency },
      recommendations: {
        agents: agentRecommendations,
        patterns: patternSuggestions,
        workflows: workflowSuggestions,
        routing: crossDomainRouting
      }
    };
  }
  
  classifyDomains(analysis) {
    const domainKeywords = {
      architecture: /(?:adr|architecture|design|system|structure|microservices|patterns)/g,
      development: /(?:code|performance|optimize|debug|implement|slow|fast|efficient)/g,
      documentation: /(?:write|document|content|docs|readme|guide|manual)/g,
      strategy: /(?:strategy|planning|vision|roadmap|business|brainstorm|ideas)/g,
      security: /(?:security|secure|vulnerability|risk|compliance|audit|threat)/g
    };
    
    const text = `${analysis.query} ${analysis.context}`;
    const scores = {};
    
    Object.entries(domainKeywords).forEach(([domain, regex]) => {
      const matches = text.match(regex) || [];
      scores[domain] = matches.length / text.split(' ').length; // Normalize by text length
    });
    
    // Return domains sorted by relevance score
    return Object.entries(scores)
      .filter(([_, score]) => score > 0)
      .sort(([_, a], [__, b]) => b - a)
      .map(([domain, score]) => ({ domain, confidence: score }));
  }
  
  assessComplexity(analysis) {
    const complexityIndicators = {
      simple: /(?:what|which|best|quick|simple)/g,
      medium: /(?:how|analyze|review|compare|evaluate)/g,
      complex: /(?:architect|design|comprehensive|complete|full|system|multi)/g
    };
    
    const text = `${analysis.query} ${analysis.context}`;
    let maxComplexity = 'simple';
    let maxScore = 0;
    
    Object.entries(complexityIndicators).forEach(([level, regex]) => {
      const matches = text.match(regex) || [];
      const score = matches.length;
      if (score > maxScore) {
        maxScore = score;
        maxComplexity = level;
      }
    });
    
    return { level: maxComplexity, confidence: maxScore };
  }
  
  detectUrgency(analysis) {
    const urgencyKeywords = /(?:urgent|asap|critical|immediately|now|quickly|emergency)/g;
    const matches = analysis.query.match(urgencyKeywords) || [];
    
    if (matches.length > 0) return { level: 'high', indicators: matches };
    if (analysis.query.includes('help')) return { level: 'medium', indicators: ['help'] };
    return { level: 'low', indicators: [] };
  }
  
  matchAgents(domains, complexity, urgency) {
    // Load agent capabilities from configuration
    const agentCapabilities = this.loadAgentCapabilities();
    
    const matches = [];
    
    domains.forEach(({ domain, confidence }) => {
      const relevantAgents = agentCapabilities.filter(agent => 
        agent.primary_domains.includes(domain) || 
        agent.secondary_domains.includes(domain)
      );
      
      relevantAgents.forEach(agent => {
        const relevanceScore = this.calculateAgentRelevance(agent, domain, confidence);
        if (relevanceScore >= agent.confidence_threshold) {
          matches.push({
            agent,
            relevance: relevanceScore,
            rationale: this.generateAgentRationale(agent, domain, complexity)
          });
        }
      });
    });
    
    // Sort by relevance and return top recommendations
    return matches
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, urgency.level === 'high' ? 1 : complexity.level === 'complex' ? 3 : 2);
  }
  
  suggestPatterns(domains, analysis) {
    const patternRelevance = this.loadPatternRelevance();
    const suggestions = [];
    
    domains.forEach(({ domain }) => {
      const relevantPatterns = patternRelevance.filter(pattern =>
        pattern.applicable_domains.includes(domain)
      );
      
      relevantPatterns.forEach(pattern => {
        const keywordMatches = pattern.keywords.filter(keyword =>
          analysis.query.includes(keyword)
        ).length;
        
        if (keywordMatches > 0) {
          suggestions.push({
            pattern,
            relevance: keywordMatches / pattern.keywords.length,
            rationale: this.generatePatternRationale(pattern, analysis.query)
          });
        }
      });
    });
    
    return suggestions
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 3);
  }
  
  suggestWorkflows(agentRecommendations, complexity) {
    const workflows = [];
    
    // Multi-expert validation for complex scenarios
    if (complexity.level === 'complex' || agentRecommendations.length > 1) {
      workflows.push({
        code: '3h',
        name: 'multi-expert-validation',
        rationale: 'Complex decisions benefit from multiple expert perspectives'
      });
    }
    
    // Document synthesis for documentation-heavy tasks
    if (agentRecommendations.some(rec => 
      rec.agent.primary_domains.includes('documentation') ||
      rec.agent.strengths.includes('document-synthesis')
    )) {
      workflows.push({
        code: '3c',
        name: 'document-synthesis',
        rationale: 'Structured approach to documentation and synthesis'
      });
    }
    
    return workflows.slice(0, 2); // Limit to most relevant
  }
  
  suggestRouting(domains) {
    const domainRouting = this.loadDomainRouting();
    const suggestions = [];
    
    domains.forEach(({ domain }) => {
      const routing = domainRouting[domain];
      if (routing) {
        suggestions.push({
          domain,
          commands: routing.suggested_commands,
          rationale: routing.rationale
        });
      }
    });
    
    // Deduplicate commands and return unique suggestions
    const uniqueCommands = [...new Set(suggestions.flatMap(s => s.commands))];
    return uniqueCommands.map(command => ({
      command,
      rationale: this.generateRoutingRationale(command, domains)
    }));
  }
  
  formatResponse(results) {
    const { analysis, recommendations } = results;
    
    let response = `🎯 /kingly Analysis: ${this.generateTitle(analysis)}\\n\\n`;
    
    // Context Analysis
    response += `**Context Analysis:**\\n`;
    response += `- Query: "${results.originalQuery}"\\n`;
    response += `- Domain: ${analysis.domains.map(d => d.domain).join(' + ')}\\n`;
    if (analysis.complexity.level !== 'simple') {
      response += `- Complexity: ${analysis.complexity.level}\\n`;
    }
    response += `\\n`;
    
    // Agent Recommendations
    response += `**🤖 Recommended Agents:**\\n\\n`;
    recommendations.agents.forEach((rec, index) => {
      const priority = index === 0 ? 'Primary' : 'Secondary';
      response += `**${priority}:** \`${rec.agent.code}\` **${rec.agent.name}** - ${rec.agent.role}\\n`;
      response += `- **Why:** ${rec.rationale}\\n`;
      response += `- **Strength:** ${rec.agent.strengths.join(', ')}\\n\\n`;
    });
    
    // Pattern Suggestions
    if (recommendations.patterns.length > 0) {
      response += `**📋 Recommended Patterns:**\\n`;
      recommendations.patterns.forEach(pattern => {
        response += `- \`${pattern.pattern.code}\` **${pattern.pattern.name}** - ${pattern.rationale}\\n`;
      });
      response += `\\n`;
    }
    
    // Workflow Suggestions
    if (recommendations.workflows.length > 0) {
      response += `**🔄 Suggested Workflow:**\\n`;
      recommendations.workflows.forEach(workflow => {
        response += `- \`${workflow.code}\` **${workflow.name}** - ${workflow.rationale}\\n`;
      });
      response += `\\n`;
    }
    
    // Cross-Domain Routing
    if (recommendations.routing.length > 0) {
      response += `**💡 Quick Actions:**\\n`;
      recommendations.routing.forEach(routing => {
        response += `- \`${routing.command}\` - ${routing.rationale}\\n`;
      });
    }
    
    return response;
  }
}
```

## 🧪 TESTING SPECIFICATIONS

### **BDD Tests for /kingly Intelligence**
```gherkin
Feature: /kingly intelligent routing accuracy and consistency
  As quality assurance for the intelligence system
  I need to verify /kingly provides accurate, relevant recommendations
  So that users receive valuable guidance without information overload

  Scenario Outline: Domain-specific routing accuracy
    Given user types "/kingly <query>"
    When /kingly analyzes the query
    Then should detect <primary_domain> as primary domain
    And should recommend <primary_agent> as primary agent
    And should suggest <relevant_pattern> pattern
    And should offer <cross_domain_command> for additional assistance
    
    Examples:
      | query | primary_domain | primary_agent | relevant_pattern | cross_domain_command |
      | what agent is best for adrs | architecture | Development Engineer:architect | decision-matrix | /validate |
      | help optimize slow API | development | Development Engineer:performance | noise-analysis | /validate |
      | brainstorm user onboarding ideas | strategy | CEO:strategist | scamper-framework | /doc |
      | review security architecture | security | Development Engineer:security | swot-analysis | /validate |
      | document technical decisions | documentation | CEO:strategist | document-synthesis | /doc |

  Scenario: Progressive disclosure behavior validation
    Given user makes simple request "/kingly help with performance"
    When /kingly responds
    Then should show maximum 2-3 agent recommendations
    And should include 2-3 applicable patterns
    And should maintain ≤4 line response structure
    And should offer "Need more options?" or similar expansion

  Scenario: Cross-domain intelligence handling
    Given user types "/kingly optimize the documentation build process"
    When /kingly analyzes cross-domain query
    Then should identify development as primary domain (optimize, build, process)
    And should identify documentation as secondary domain
    And should recommend agents from both domains with priority
    And should suggest cross-domain workflows like multi-expert-validation
    And should offer both /validate and /doc routing options

  Scenario: Confidence calibration and explanation
    Given /kingly provides agent recommendations
    When displaying results
    Then should explain WHY each agent was recommended
    And should provide confidence indicators for recommendations
    And should explain rationale behind pattern suggestions
    And should justify cross-domain routing suggestions

  Scenario: Context preservation across conversation
    Given ongoing conversation about performance optimization
    When user types "/kingly what about security?"
    Then should maintain performance context while adding security focus
    And should recommend agents that bridge both domains
    And should suggest workflows that address both concerns
    And should explain how recommendations connect to previous context
```

### **Unit Tests for Intelligence Components**
```javascript
// test/unit/kingly-intelligence.test.js
describe('KinglyIntelligence Engine', () => {
  let engine;
  
  beforeEach(() => {
    engine = new KinglyIntelligence();
  });
  
  describe('Domain Classification', () => {
    test('should correctly identify architecture domain for ADR queries', () => {
      const analysis = { query: 'what agent is best for adrs', context: '' };
      const domains = engine.classifyDomains(analysis);
      
      expect(domains[0].domain).toBe('architecture');
      expect(domains[0].confidence).toBeGreaterThan(0);
    });
    
    test('should detect cross-domain queries', () => {
      const analysis = { query: 'optimize the documentation build process', context: '' };
      const domains = engine.classifyDomains(analysis);
      
      expect(domains).toHaveLength(2);
      expect(domains.map(d => d.domain)).toContain('development');
      expect(domains.map(d => d.domain)).toContain('documentation');
    });
  });
  
  describe('Agent Matching', () => {
    test('should recommend architect for architecture domain', () => {
      const domains = [{ domain: 'architecture', confidence: 0.8 }];
      const complexity = { level: 'medium', confidence: 1 };
      const urgency = { level: 'low', indicators: [] };
      
      const agents = engine.matchAgents(domains, complexity, urgency);
      
      expect(agents[0].agent.code).toBe('1i');
      expect(agents[0].agent.primary_domains).toContain('architecture');
    });
    
    test('should limit recommendations based on urgency', () => {
      const domains = [{ domain: 'development', confidence: 0.9 }];
      const complexity = { level: 'complex', confidence: 1 };
      const urgencyHigh = { level: 'high', indicators: ['urgent'] };
      const urgencyLow = { level: 'low', indicators: [] };
      
      const highUrgencyAgents = engine.matchAgents(domains, complexity, urgencyHigh);
      const lowUrgencyAgents = engine.matchAgents(domains, complexity, urgencyLow);
      
      expect(highUrgencyAgents).toHaveLength(1);
      expect(lowUrgencyAgents.length).toBeGreaterThan(1);
    });
  });
  
  describe('Response Formatting', () => {
    test('should format complete response with all sections', () => {
      const results = {
        originalQuery: 'what agent is best for adrs',
        analysis: {
          domains: [{ domain: 'architecture', confidence: 0.8 }],
          complexity: { level: 'medium', confidence: 1 },
          urgency: { level: 'low', indicators: [] }
        },
        recommendations: {
          agents: [{
            agent: { code: '1i', name: 'Development Engineer:architect', role: 'System design perspective', strengths: ['system-design'] },
            relevance: 0.9,
            rationale: 'ADRs require architectural expertise'
          }],
          patterns: [{
            pattern: { code: '2c', name: 'decision-matrix' },
            rationale: 'Systematic decision-making for ADRs'
          }],
          workflows: [],
          routing: [{ command: '/validate', rationale: 'Validate architectural decisions' }]
        }
      };
      
      const response = engine.formatResponse(results);
      
      expect(response).toContain('🎯 /kingly Analysis:');
      expect(response).toContain('**🤖 Recommended Agents:**');
      expect(response).toContain('**📋 Recommended Patterns:**');
      expect(response).toContain('**💡 Quick Actions:**');
      expect(response).toContain('1i');
      expect(response).toContain('decision-matrix');
      expect(response).toContain('/validate');
    });
  });
});
```

## 🔗 INTEGRATION POINTS

### **Command Interface Integration**
```gherkin
Feature: /kingly integration with existing command system
  As part of the broader Claude Code intelligence system
  I need /kingly to integrate seamlessly with other commands
  So that users have a cohesive experience across all interfaces

  Scenario: Integration with /doc command
    Given /kingly recommends documentation domain agents
    When user wants to switch to documentation mode
    Then /kingly should offer "/doc" as quick action
    And /doc command should load with context-aware agent preselection
    And user should be able to return to /kingly analysis

  Scenario: Integration with /validate command  
    Given /kingly recommends validation workflows
    When user wants to validate decisions or implementations
    Then /kingly should offer "/validate" routing with specific context
    And /validate command should apply recommended validation frameworks
    And results should reference back to /kingly recommendations

  Scenario: Workflow hand-off to specific agents
    Given /kingly recommends specific agent (e.g., "1i architect")
    When user wants to engage that agent directly
    Then provide clear activation instructions
    And maintain conversation context across agent activation
    And allow return to /kingly for additional recommendations
```

### **Asset Generation Integration**
```gherkin
Feature: /kingly integration with build system assets
  As intelligence routing system
  I need access to current agent capabilities and patterns
  So that recommendations stay accurate as system evolves

  Scenario: Dynamic agent capability loading
    Given assets/AGENTS.md contains current agent catalog
    When /kingly initializes
    Then load current agent capabilities from generated assets
    And update routing logic based on available agents
    And handle graceful degradation if assets are stale

  Scenario: Pattern and workflow integration
    Given assets contain current patterns and workflows
    When suggesting patterns and workflows
    Then reference current capability set from assets
    And provide accurate codes and descriptions
    And maintain consistency with other system interfaces
```

---

**IMPLEMENTATION PRIORITY:**
1. Start with context analysis engine (domain classification)
2. Implement basic agent matching for ADR test case
3. Build response formatting to match simulation
4. Add pattern and workflow suggestions
5. Integrate with asset generation system
6. Implement comprehensive testing suite

**This specification provides complete implementation guidance for the /kingly intelligence engine that demonstrated success in the ADR simulation.**