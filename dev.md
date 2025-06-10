# DEV.md - DEVELOPMENT STANDARDS

## 🏗️ CODE QUALITY ARCHITECTURE

### Senior Developer Standards
Write code that scales with team growth and prevents technical debt accumulation through professional development practices.

► Code like a 10x senior developer with proper abstractions and clear naming
► Separate concerns rigorously - no mixed business logic in components  
► Use meaningful variable and function names that self-document intent
► Apply SOLID principles and design patterns appropriately
► Prefer composition over inheritance for flexible architectures

### File Size & Structure
Maintain cognitive load boundaries through disciplined file organization and Single Responsibility Principle adherence.

► Keep files 50-100 lines maximum for optimal readability
► Each class or utility should have one clear, well-defined purpose
► Break large files into smaller, focused modules
► Use clear directory structures that reflect architectural boundaries
► Group related functionality while maintaining separation of concerns

## ⚛️ REACT DEVELOPMENT PATTERNS

### Component Architecture
Structure React applications with proper separation between container and presentational components for maintainable codebases.

► Use container/presentational component separation patterns
► Extract business logic into custom hooks for reusability
► Keep components focused on rendering and user interaction
► Implement proper prop boundaries - avoid excessive prop drilling
► Use compound components for complex UI patterns

### State Management
Organize application state with clear boundaries between local and global state management strategies.

► Use local state for component-specific data
► Implement global state for cross-component shared data
► Keep API calls in dedicated service layers
► Use React Query or SWR for server state management
► Avoid storing derived data in state - compute on render

## 🧪 TESTING ORGANIZATION

### Test Structure
Organize tests for rapid feedback loops and clear separation between different testing strategies and scopes.

► Co-locate unit tests with source files for tight feedback loops
► Place component tests alongside their components (.test.js files)
► Organize integration tests at project root in tests/ directory
► Structure e2e tests in tests/e2e/ for full user journey validation
► Use descriptive test names that explain behavior, not implementation

### Test Discipline
Maintain clean test environments through proper setup, teardown, and isolation practices that prevent test pollution.

► Use single test environment with proper cleanup between tests
► Implement test isolation through cleanup, not file duplication
► Mock external dependencies consistently across test suites
► Clean up test artifacts immediately after test completion
► Avoid creating test-{feature}.js files scattered throughout project

## 📁 FILE CREATION RULES

### Creation Boundaries
Prevent project bloat through strict file creation policies that prioritize editing existing files over creating new ones.

► NEVER create files unless explicitly requested by user
► ALWAYS prefer editing existing files over creating new files
► ASK before creating any new directories or file structures
► Avoid creating temporary files without immediate cleanup strategy
► Document file creation decisions for future reference

### Organization Standards
Structure projects with clear architectural boundaries and logical grouping of related functionality.

► Group related files in logical directory structures  
► Use consistent naming conventions across similar file types
► Maintain clear separation between source code and configuration
► Keep documentation co-located with relevant code when possible
► Follow established project conventions for new file placement

## 🔄 GIT WORKFLOW STANDARDS

### Commit Practices
Create meaningful git history through semantic commits and proper branching strategies that support team collaboration.

► Use semantic commit messages: "feat:", "fix:", "refactor:", "docs:"
► Write commits that explain WHY changes were made, not just WHAT
► Keep commits atomic - one logical change per commit
► Use present tense in commit messages ("Add feature" not "Added feature")
► Reference issues or tickets in commit messages when applicable

### Branch Strategy
Organize development work through clear branching patterns that support parallel development and clean integration.

► Use main branch for stable, production-ready code
► Create feature branches for new development work (feature/description)
► Use fix branches for bug repairs (fix/issue-description)
► Keep branches focused on single features or fixes
► Delete merged branches to maintain clean repository

### Auto-Commit Integration
Leverage automatic commit functionality through $save command for seamless development checkpoint creation.

► Significant changes trigger auto-commits: new features, bug fixes, major progress
► Auto-commits use semantic format: "feat: implement X" or "fix: resolve Y"
► Manual commits override auto-commit for specific messaging needs
► Review auto-commit messages before pushing to remote repositories
► Use auto-commits for rapid development cycles, manual commits for collaboration

---
*Development Excellence Framework - Agentic coding standards for scalable software*