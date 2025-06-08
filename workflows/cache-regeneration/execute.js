#!/usr/bin/env node

// Cache Regeneration Workflow Executor
// Replaces compile-time variables in AGENTS.md template

const fs = require('fs');
const path = require('path');
// Simple YAML parsing without external dependencies

const KINGLY_PATH = '/Users/jean-patricksmith/digital/kingly/core/agent/contexts';
const CLAUDE_PATH = '/Users/jean-patricksmith/.claude';

function scanKinglyContexts() {
  const results = { agents: [], patterns: [], workflows: [] };
  
  // Scan agents and their sub-routes
  const agentsPath = path.join(KINGLY_PATH, 'agents');
  if (fs.existsSync(agentsPath)) {
    let agentIndex = 0;
    fs.readdirSync(agentsPath).forEach(dir => {
      const contextFile = path.join(agentsPath, dir, 'context.yaml');
      if (fs.existsSync(contextFile)) {
        const content = fs.readFileSync(contextFile, 'utf8');
        
        const name = extractYamlValue(content, 'name') || dir;
        const description = extractYamlValue(content, 'description') || 'No description';
        const code = `1${String.fromCharCode(97 + agentIndex)}`;
        
        // Add main agent
        results.agents.push({ code, name, description, dir, type: 'main' });
        agentIndex++;
        
        // Parse sub-routes manually
        const lines = content.split('\n');
        let inEndpoints = false;
        let currentRoute = null;
        
        for (const line of lines) {
          if (line.trim().startsWith('endpoints:') || line.trim().startsWith('sub_routes:')) {
            inEndpoints = true;
            continue;
          }
          
          if (inEndpoints && line.trim() && !line.startsWith(' ') && !line.startsWith('\t')) {
            inEndpoints = false;
          }
          
          if (inEndpoints) {
            if (line.match(/^\s{4}\w+:/) && !line.includes('default:')) {
              currentRoute = line.trim().replace(':', '');
            } else if (currentRoute && line.includes('description:')) {
              const subDesc = line.split(':')[1]?.trim().replace(/"/g, '');
              if (subDesc) {
                const subCode = `1${String.fromCharCode(97 + agentIndex)}`;
                const subName = `${name}:${currentRoute}`;
                results.agents.push({ 
                  code: subCode, 
                  name: subName, 
                  description: subDesc, 
                  dir: `${dir}/${currentRoute}`,
                  type: 'sub-route',
                  parent: dir
                });
                agentIndex++;
                currentRoute = null;
              }
            }
          }
        }
      }
    });
  }  
  // Scan patterns (unchanged)
  const patternsPath = path.join(KINGLY_PATH, 'patterns');
  if (fs.existsSync(patternsPath)) {
    let patternIndex = 0;
    fs.readdirSync(patternsPath).forEach(dir => {
      const contextFile = path.join(patternsPath, dir, 'context.yaml');
      if (fs.existsSync(contextFile)) {
        const content = fs.readFileSync(contextFile, 'utf8');
        const name = extractYamlValue(content, 'name') || dir;
        const description = extractYamlValue(content, 'description') || 'No description';
        const code = `2${String.fromCharCode(97 + patternIndex)}`;
        results.patterns.push({ code, name, description, dir });
        patternIndex++;
      }
    });
  }
  
  // Scan workflows (unchanged)
  const workflowsPath = path.join(KINGLY_PATH, 'workflows');
  if (fs.existsSync(workflowsPath)) {
    let workflowIndex = 0;
    fs.readdirSync(workflowsPath).forEach(dir => {
      const contextFile = path.join(workflowsPath, dir, 'context.yaml');
      if (fs.existsSync(contextFile)) {
        const content = fs.readFileSync(contextFile, 'utf8');
        const name = extractYamlValue(content, 'name') || dir;
        const description = extractYamlValue(content, 'description') || 'No description';
        const code = `3${String.fromCharCode(97 + workflowIndex)}`;
        results.workflows.push({ code, name, description, dir });
        workflowIndex++;
      }
    });
  }
  
  return results;
}

function extractYamlValue(content, key) {
  const lines = content.split('\n');
  for (const line of lines) {
    if (line.trim().startsWith(`${key}:`)) {
      return line.split(':')[1]?.trim().replace(/"/g, '');
    }
  }
  return null;
}

function formatAgentList(agents) {
  return agents.map(agent => {
    if (agent.type === 'sub-route') {
      return `**${agent.code}** ${agent.name} - ${agent.description}`;
    } else {
      return `**${agent.code}** ${agent.name} - ${agent.description}`;
    }
  }).join('\n');
}

function formatPatternList(patterns) {
  return patterns.map(pattern => 
    `**${pattern.code}** ${pattern.name} - ${pattern.description}`
  ).join('\n');
}

function formatWorkflowList(workflows) {
  return workflows.map(workflow => 
    `**${workflow.code}** ${workflow.name} - ${workflow.description}`
  ).join('\n');
}function regenerateAgentsMd(contexts) {
  const templatePath = path.join(CLAUDE_PATH, 'templates', 'AGENTS.md');
  const outputPath = path.join(CLAUDE_PATH, 'AGENTS.md');
  
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found: ${templatePath}`);
  }
  
  let template = fs.readFileSync(templatePath, 'utf8');
  
  // Compile-time variable substitution
  const now = new Date();
  const compileTimeVariables = {
    '{agent_count}': contexts.agents.length,
    '{pattern_count}': contexts.patterns.length,
    '{workflow_count}': contexts.workflows.length,
    '{agent_list_with_descriptions}': formatAgentList(contexts.agents),
    '{pattern_list_with_descriptions}': formatPatternList(contexts.patterns),
    '{workflow_list_with_descriptions}': formatWorkflowList(contexts.workflows),
    '{date}': now.toISOString().split('T')[0],
    '{time}': now.toTimeString().split(' ')[0]
  };
  
  // Apply compile-time substitutions
  for (const [key, value] of Object.entries(compileTimeVariables)) {
    template = template.replace(new RegExp(key.replace(/[{}]/g, '\\$&'), 'g'), value);
  }
  
  const runtimeVariables = [
    '{contextual_suggestions}',
    '{relevant_patterns}', 
    '{project_recommendations}'
  ];
  
  console.log('✅ Compile-time variables replaced');
  console.log('🔄 Runtime variables preserved for Claude:', runtimeVariables.join(', '));
  
  fs.writeFileSync(outputPath, template);
  return true;
}

function execute() {
  console.log('🔄 Cache Regeneration Workflow Executing...');
  
  const contexts = scanKinglyContexts();
  console.log(`📊 Found: ${contexts.agents.length} agents (including sub-routes), ${contexts.patterns.length} patterns, ${contexts.workflows.length} workflows`);
  
  // Show breakdown
  const mainAgents = contexts.agents.filter(a => a.type === 'main');
  const subRoutes = contexts.agents.filter(a => a.type === 'sub-route');
  console.log(`   └── ${mainAgents.length} main agents, ${subRoutes.length} sub-routes`);
  
  regenerateAgentsMd(contexts);
  console.log('✅ AGENTS.md regenerated with sub-routes - ready for runtime variables');
  
  return contexts;
}

if (require.main === module) {
  execute();
}

module.exports = { execute, scanKinglyContexts };