# Node.js Project Rules

## Detection Criteria

- package.json present (without React/Vue/Angular)
- Node.js specific files (.nvmrc, .node-version)
- Server frameworks (Express, Koa, Fastify)

## Development Rules

### Package Management

- Check for lock files (pnpm > yarn > npm)
- Use pnpm by default for new projects
- Keep dependencies minimal
- Regular security audits

### Code Structure

- Separation of concerns (routes, controllers, services)
- Environment variables via .env
- Proper error handling middleware
- Input validation on all endpoints

### Project Patterns

```
src/
  routes/         # API route definitions
  controllers/    # Request handlers
  services/       # Business logic
  models/         # Data models
  middleware/     # Express middleware
  utils/          # Helper functions
```

### Best Practices

- Use async/await over callbacks
- Implement proper logging (Winston/Pino)
- Handle uncaught exceptions
- Graceful shutdown handlers
- API versioning strategy
