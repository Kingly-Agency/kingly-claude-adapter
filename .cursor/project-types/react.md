# React Project Rules

## Detection Criteria

- package.json contains: react, react-dom
- Files with .jsx/.tsx extensions
- Next.js, Vite, or CRA configuration

## Development Rules

### Component Architecture

- Separate container/presentational components
- Max 50-100 lines per component file
- Extract complex logic to custom hooks
- Keep components focused on rendering

### State Management

- Local state for component-specific data
- Context/Redux for cross-component state
- Custom hooks for reusable stateful logic

### File Structure

```
src/
  components/     # Reusable UI components
  containers/     # Smart components with logic
  hooks/          # Custom React hooks
  utils/          # Pure utility functions
  services/       # API and external services
```

### Code Patterns

- Prefer functional components with hooks
- Use TypeScript for type safety
- Implement error boundaries
- Memoize expensive computations
- Handle loading and error states explicitly
