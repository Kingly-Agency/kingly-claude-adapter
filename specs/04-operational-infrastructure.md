# OPERATIONAL INFRASTRUCTURE IMPLEMENTATION SPEC

## Feature: Auto-Trigger Systems and Environmental Awareness

### **File and Tool Management Auto-Triggers**
```gherkin
Feature: Automatic file and tool discipline enforcement
  As an operational system
  I want to enforce consistent file and tool usage patterns
  So that development maintains quality and consistency standards

  Scenario: Desktop Commander priority enforcement
    Given any file operation is requested
    When choosing between standard tools and Desktop Commander
    Then always prefer Desktop Commander for maximum compatibility
    And use mcp__desktop-commander__read_file over Read tool
    And use mcp__desktop-commander__search_code over Grep
    And use mcp__desktop-commander__list_directory over LS
    And only use standard tools when Desktop Commander unavailable

  Scenario: File creation discipline
    Given user requests any file operations
    When determining whether to create new files
    Then never create files unless explicitly required for goal achievement
    And always prefer editing existing files over creating new ones
    And ask before creating any new directories or file structures
    And maintain clean project structure by avoiding temporary files

  Scenario: Git workflow automation
    Given user requests commits or significant changes
    When processing the request
    Then automatically analyze git status and diff
    And generate appropriate commit messages
    And follow established branching strategy
    And only commit when explicitly requested by user
```

### **Environment Detection and Management**
```gherkin
Feature: Automatic environment detection and configuration
  As an operational system
  I want to detect and configure environments automatically
  So that development setup is consistent and optimal

  Scenario: Python environment auto-setup
    Given Python work is detected (files, mentions, or requests)
    When any Python-related operation begins
    Then automatically read ~/digital/_infra/PYTHON_ENVIRONMENTS.md
    And determine appropriate domain:
      | Project Type | Environment |
      | AI/ML (CoachBuddy, YOLO, TensorFlow) | conda activate ai-ml-shared |
      | Web (FastAPI, Django, Flask) | conda activate web-dev-shared |
      | Data (Jupyter, pandas, analytics) | conda activate data-analysis-shared |
    And use activation scripts from ~/digital/_infra/tools/ when needed
    And never create new virtual environments without explicit justification

  Scenario: Package manager detection and usage
    Given project contains dependency files
    When package operations are needed
    Then check for lock files in priority order:
      | File | Manager | Action |
      | pnpm-lock.yaml | pnpm | Use pnpm for all operations |
      | yarn.lock | yarn | Use yarn for all operations |
      | package-lock.json | npm | Use npm for all operations |
    And default to pnpm if no lock file exists
    And handle Expo projects with pnpm install + npx expo install

  Scenario: Constitutional framework compliance
    Given any project work is requested
    When beginning operations
    Then check for project CLAUDE.md constitutional framework
    And ensure LLM-first principles when applicable
    And maintain bidirectional flow patterns
    And preserve YAML as source of truth in Kingly projects
```

### **Memory Management and Persistence**
```gherkin
Feature: Intelligent memory management across sessions
  As a memory system
  I want to manage context and learning automatically
  So that intelligence improves and context is preserved

  Scenario: Automatic memory refresh
    Given 15 turns have passed or complex operation begins
    When any interaction occurs
    Then re-read ~/.claude/CLAUDE.md for framework rules
    And re-read project CLAUDE.md for constitutional framework
    And re-read _2do.md for current session context
    And verify tool usage discipline maintenance
    And refresh intelligence system awareness

  Scenario: Session persistence with intelligence
    Given user requests session saving
    When /save command executes
    Then capture current progress and decisions
    And extract procedural memory patterns
    And check constitutional framework adherence
    And auto-detect major milestone vs minor progress
    And auto-commit if significant changes detected

  Scenario: Context restoration with full intelligence
    Given user requests context loading
    When /load command executes
    Then read _2do.md for session context
    And parse SESSION_REFS and CREATED_FILES from header
    And use Desktop Commander to read each reference
    And load constitutional framework if exists
    And restore intelligence awareness silently
    And be ready to continue with complete awareness

  Scenario: Cross-session pattern recognition
    Given multiple sessions with similar patterns
    When processing current session
    Then recognize recurring successful patterns
    And suggest pattern promotion to reusable workflows
    And maintain learning continuity across sessions
    And offer meta-insights about workflow evolution
```

## Quality Assurance and Validation Systems

### **Code Quality Auto-Enforcement**
```gherkin
Feature: Automatic code quality and standards enforcement
  As a quality system
  I want to enforce development standards automatically
  So that code quality remains high without manual oversight

  Scenario: Linting and type checking automation
    Given code changes are made in a project
    When changes are completed
    Then automatically run available lint commands (npm run lint, ruff, etc.)
    And run available typecheck commands (npm run typecheck, mypy, etc.)
    And provide clear error resolution guidance
    And ensure all checks pass before considering work complete

  Scenario: Test execution validation
    Given code changes affect testable functionality
    When implementation is complete
    Then determine appropriate test commands from project configuration
    And run relevant test suites (npm test, pytest, jest, etc.)
    And ensure tests pass before marking work complete
    And suggest test improvements when appropriate

  Scenario: File structure compliance
    Given file creation or reorganization occurs
    When evaluating project structure
    Then ensure tests are in tests/ directory
    And maintain logical component organization
    And prevent creation of temporary directories without cleanup
    And follow established project conventions
```

### **Performance and Resource Management**
```gherkin
Feature: Performance monitoring and resource optimization
  As a performance system
  I want to monitor and optimize resource usage automatically
  So that operations remain efficient at scale

  Scenario: File operation optimization
    Given large file operations are requested
    When processing files
    Then use chunking for files over 30 lines (write operations)
    And use pagination for large search results
    And prefer targeted operations over bulk processing
    And provide performance feedback for optimization

  Scenario: Memory usage optimization
    Given long conversations or complex operations
    When context size grows large
    Then compress procedural memory automatically
    And extract key patterns for efficient storage
    And maintain essential context while reducing overhead
    And provide memory usage guidance

  Scenario: Tool usage efficiency
    Given multiple tool options are available
    When choosing operational approach
    Then prefer Desktop Commander for file operations
    And use parallel tool execution when beneficial
    And batch related operations for efficiency
    And avoid redundant context loading
```

## Implementation Architecture

### **Trigger System Framework**
- Event-based triggers for environmental changes
- Pattern-based triggers for workflow opportunities
- Time-based triggers for maintenance operations
- User-action triggers for quality assurance

### **Environment Management System**
- Automatic detection of project characteristics
- Environment configuration based on project type
- Tool preference enforcement based on availability
- Constitutional framework compliance checking

### **Memory and Learning Infrastructure**
- Session state persistence with intelligent compression
- Pattern extraction and promotion assessment
- Cross-session learning and continuity
- Quality metrics and improvement tracking

### **Quality Assurance Automation**
- Automatic code quality checking and enforcement
- Test execution and validation
- Performance monitoring and optimization
- Resource usage tracking and management