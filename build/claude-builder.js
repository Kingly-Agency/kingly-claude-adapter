#!/usr/bin/env node
// Claude Builder - Template processor for @ reference resolution
const fs = require('fs');
const path = require('path');

class ClaudeBuilder {
  constructor() {
    this.templatePath = path.join(__dirname, '..', 'templates', 'CLAUDE.md');
    this.outputPath = path.join(__dirname, '..', 'CLAUDE.md');
    this.memoryDir = path.join(__dirname, '..', 'memory');
  }

  build() {
    console.log('🔨 Building CLAUDE.md from template...');
    
    try {
      // 1. Read template
      const template = fs.readFileSync(this.templatePath, 'utf8');
      
      // 2. Process @ references
      const processed = this.resolveReferences(template);
      
      // 3. Add metadata
      const final = this.addBuildMetadata(processed);
      
      // 4. Write output
      fs.writeFileSync(this.outputPath, final);
      
      console.log('✅ CLAUDE.md generated successfully');
      console.log(`📝 Output: ${this.outputPath}`);
      
    } catch (error) {
      console.error('❌ Build failed:', error.message);
      process.exit(1);
    }
  }
  
  resolveReferences(content) {
    // Match @~/.claude/memory/*.md patterns
    return content.replace(/@~\/\.claude\/memory\/([^\s]+\.md)/g, (match, filename) => {
      const filePath = path.join(this.memoryDir, filename);
      
      if (!fs.existsSync(filePath)) {
        throw new Error(`Reference not found: ${filePath}`);
      }
      
      console.log(`📖 Including: ${filename}`);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // Add a separator comment for clarity
      return `<!-- Included from memory/${filename} -->\n${fileContent}\n<!-- End include from memory/${filename} -->`;
    });
  }
  
  addBuildMetadata(content) {
    const timestamp = new Date().toISOString();
    const metadata = `\n---\n*Built: ${timestamp} | Source: templates/CLAUDE.md*`;
    return content + metadata;
  }
}

// CLI execution
if (require.main === module) {
  const builder = new ClaudeBuilder();
  builder.build();
}

module.exports = ClaudeBuilder;