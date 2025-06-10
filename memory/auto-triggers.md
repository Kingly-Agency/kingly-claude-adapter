# AUTOMATIC PROTOCOLS

## 🐍 PYTHON ENVIRONMENT AUTO-DETECTION (CRITICAL)
**Before any Python work**, automatically check ~/digital/_infra/PYTHON_ENVIRONMENTS.md for environment strategy.

**Auto-Triggers:**
- User mentions Python, pip, conda, venv, or environment setup
- Python files detected in current directory
- User asks about setting up development environment

**Process:**
1. Read ~/digital/_infra/PYTHON_ENVIRONMENTS.md
2. Use domain-based conda environments (NEVER create new venvs):
   - **AI/ML**: `conda activate ai-ml-shared` 
   - **Web dev**: `conda activate web-dev-shared`
   - **Data analysis**: `conda activate data-analysis-shared`
3. Use activation scripts from ~/digital/_infra/tools/ when appropriate

**Environment Selection:**
- **AI/ML projects**: CoachBuddy, YOLO, TensorFlow, PyTorch, computer vision
- **Web projects**: FastAPI, Django, Flask, APIs, scrapers
- **Data projects**: Jupyter, pandas, visualization, analytics

**NEVER**: Create new virtual environments unless explicitly requested and justified.

## 📦 PACKAGE MANAGERS
1. Check for lock files first (pnpm-lock.yaml, yarn.lock, package-lock.json)
2. Use existing manager if found
3. Default to **pnpm** if no lock file exists
4. Expo: `pnpm install` first, then `npx expo install`

## 🔄 AUTOMATIC PROTOCOLS

### Memory Refresh (Auto-Triggered)
**Triggers:** Every 15 turns, before complex operations, when user says "refresh"
**Actions:**
1. Re-read ~/.claude/CLAUDE.md (this file)
2. Re-read project CLAUDE.md if exists (constitutional framework)
3. Re-read _2do.md for current context
4. Verify tool usage discipline (Desktop Commander)

### Git Workflow Integration
**$save Auto-Commit Rules:**
- Significant = new features, bug fixes, major progress
- Message format: "feat: implement X" or "fix: resolve Y" 
- Branch strategy: main = stable, feature/* = new work