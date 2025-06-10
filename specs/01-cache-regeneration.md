# BDD SPECS FOR CACHE REGENERATION ENHANCEMENT

## Feature: Enhanced Agent Scanning
```gherkin
Feature: Multi-source agent scanning for 44+ agents
  As a developer using Claude Code
  I want the system to scan both Kingly and mcp-ceo contexts
  So that I have access to all available intelligence

  Scenario: Scan Kingly contexts with 44+ agents
    Given there are 44+ agents in /digital/kingly/core/agent/contexts/agents
    When I run cache regeneration
    Then all agents should be discovered and categorized
    And agent codes should scale beyond 26 letters (1a-1z, then 2a-2z, etc.)
    And sub-routes should be properly parsed and included

  Scenario: Integrate mcp-ceo contexts
    Given there are agents in /digital/mcp-ceo/contexts/agents
    When I run cache regeneration
    Then mcp-ceo agents should be included in the catalog
    And there should be no conflicts with Kingly agent codes
    And both systems should be properly merged

  Scenario: Handle missing or corrupted context files
    Given some context.yaml files are missing or invalid
    When I run cache regeneration
    Then the system should skip invalid files gracefully
    And provide clear error messages for debugging
    And continue processing valid contexts
```

## Feature: Domain Categorization
```gherkin
Feature: Organize agents by domain expertise
  As a developer
  I want agents grouped by their primary domain
  So that I can access specialized intelligence dashboards

  Scenario: Categorize documentation agents
    Given agents with documentation-related capabilities
    When I run cache regeneration
    Then agents should be tagged with "documentation" domain
    And DOC.md template should be generated with these agents
    And /doc command should show only relevant agents

  Scenario: Auto-detect agent domains
    Given agent context files with role descriptions
    When the system scans agent capabilities
    Then it should automatically categorize by keywords:
      | Keywords | Domain |
      | write, document, content, editor | documentation |
      | code, debug, architect, security | development |
      | design, ui, ux, visual | design |
      | business, strategy, product | business |
    And uncategorized agents should go to "general" domain

  Scenario: Handle multi-domain agents
    Given an agent with capabilities spanning multiple domains
    When categorization runs
    Then the agent should appear in all relevant domain dashboards
    And maintain consistent identity across domains
```

## Feature: Multiple Template Generation
```gherkin
Feature: Generate domain-specific dashboard templates
  As a system
  I want to create specialized templates for each domain
  So that users get focused, relevant intelligence interfaces

  Scenario: Generate main AGENTS.md template
    Given scanned agents from all sources and domains
    When I generate the main template
    Then AGENTS.md should contain all agents organized by domain
    And include runtime variables for contextual suggestions
    And preserve the existing system prompt structure

  Scenario: Generate domain-specific templates
    Given agents categorized by domain
    When I generate domain templates
    Then DOC.md should contain only documentation agents
    And each domain template should have specialized instructions
    And templates should include domain-specific patterns and workflows

  Scenario: Generate complete catalog template
    Given all agents, patterns, and workflows
    When I generate FULL.md template
    Then it should contain complete organized catalog
    And include "run it all" mode instructions
    And provide comprehensive testing capabilities
```

## Feature: Scalable Agent Coding System
```gherkin
Feature: Handle 44+ agents with proper coding system
  As a system processing large agent catalogs
  I want a scalable coding system
  So that all agents have unique, memorable identifiers

  Scenario: Generate codes for 44+ agents
    Given 44 agents need unique codes
    When the coding system runs
    Then codes should follow pattern: 1a-1z (26), then 2a-2z, etc.
    And each code should be unique across all agents
    And codes should be stable across regenerations

  Scenario: Preserve code stability
    Given existing agents with assigned codes
    When new agents are added
    Then existing agent codes should remain unchanged
    And new agents should get next available codes
    And code assignments should be deterministic

  Scenario: Handle agent removal
    Given an agent is removed from contexts
    When cache regeneration runs
    Then the agent should be removed from templates
    And its code should not be reused immediately
    And dependent references should be cleaned up
```

## Feature: Runtime Variable System Fix
```gherkin
Feature: Proper runtime variable replacement
  As a template system
  I want to handle runtime variables correctly
  So that users don't see literal placeholder text

  Scenario: Replace contextual suggestions correctly
    Given a template with {contextual_suggestions} variable
    When the template is loaded by Claude
    Then the variable should be replaced with actual suggestions
    And no literal placeholder text should appear
    And formatting should be preserved

  Scenario: Handle missing runtime context
    Given runtime variables that cannot be resolved
    When template loading occurs
    Then fallback content should be provided
    And user should see helpful placeholder text
    And system should not crash or show raw variables

  Scenario: Preserve compile-time variables
    Given templates with both compile-time and runtime variables
    When cache regeneration runs
    Then compile-time variables should be replaced immediately
    And runtime variables should be preserved for Claude processing
    And no variable contamination should occur
```

## Feature: Template Asset Generation
```gherkin
Feature: Generate all required template assets
  As a cache regeneration system
  I want to create all necessary template files
  So that slash commands have proper assets to load

  Scenario: Generate complete asset set
    Given successful agent scanning and categorization
    When cache regeneration completes
    Then the following files should be created:
      | File | Purpose |
      | AGENTS.md | Main intelligence dashboard |
      | DOC.md | Documentation domain dashboard |
      | FULL.md | Complete catalog for /full command |
      | INDEX.md | Directory listing for /index command |
    And all files should have proper timestamps
    And all files should validate against expected structure

  Scenario: Handle template generation failures
    Given template generation encounters errors
    When the system attempts to write template files
    Then partial success should be preserved
    And clear error messages should be provided
    And system should not corrupt existing templates
```