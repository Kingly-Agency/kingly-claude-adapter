#!/usr/bin/env node

// Cache Regeneration Workflow Executor
// Called by cache-regeneration workflow when $agent refresh cache is triggered

const fs = require('fs');
const path = require('path');

const KINGLY_PATH = '/Users/jean-patricksmith/digital/kingly/core/agent/contexts';
const CLAUDE_PATH = '/Users/jean-patricksmith/.claude';

function scanKinglyContexts() {
  const results = { agents: [], patterns: [], workflows: [] };
  
  // Scan agents
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
        results.agents.push({ code, name, description, dir });
        agentIndex++;
      }
    });
  }
  
  // Scan patterns
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
  
  // Scan workflows
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

function regenerateAgentsMd(contexts) {
  const templatePath = path.join(CLAUDE_PATH, 'templates', 'AGENTS.md');
  const outputPath = path.join(CLAUDE_PATH, 'AGENTS.md');
  
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found: ${templatePath}`);
  }
  
  let template = fs.readFileSync(templatePath, 'utf8');
  
  // Runtime variable substitution
  const now = new Date();
  const variables = {
    '{agent_count}': contexts.agents.length,
    '{pattern_count}': contexts.patterns.length,
    '{workflow_count}': contexts.workflows.length,
    '{agent_list_with_descriptions}': contexts.agents.map(a => `**${a.code}** ${a.name} - ${a.description}`).join('\n'),
    '{pattern_list_with_descriptions}': contexts.patterns.map(p => `**${p.code}** ${p.name} - ${p.description}`).join('\n'),
    '{workflow_list_with_descriptions}': contexts.workflows.map(w => `**${w.code}** ${w.name} - ${w.description}`).join('\n'),
    '{date}': now.toISOString().split('T')[0],
    '{time}': now.toTimeString().split(' ')[0]
  };
  
  // Apply all substitutions
  for (const [key, value] of Object.entries(variables)) {
    template = template.replace(new RegExp(key.replace(/[{}]/g, '\\$&'), 'g'), value);
  }
  
  fs.writeFileSync(outputPath, template);
  return true;
}

function execute() {
  console.log('🔄 Cache Regeneration Workflow Executing...');
  
  // Step 1: Scan contexts
  const contexts = scanKinglyContexts();
  console.log(`📊 Found: ${contexts.agents.length} agents, ${contexts.patterns.length} patterns, ${contexts.workflows.length} workflows`);
  
  // Step 2: Regenerate AGENTS.md
  regenerateAgentsMd(contexts);
  console.log('✅ AGENTS.md regenerated with runtime variables');
  
  return contexts;
}

if (require.main === module) {
  execute();
}

module.exports = { execute, scanKinglyContexts };