# Python Project Rules

## Detection Criteria

- requirements.txt, pyproject.toml, or setup.py present
- .py files in project root
- conda environment.yml file

## Development Rules

### Environment Management

- Check ~/py for existing conda environments
- Match env to project type (ML, web, data science)
- Never create new envs without permission
- Document env selection in README

### Code Structure

- Follow PEP 8 style guide
- Use type hints for function signatures
- Docstrings for all public functions
- Keep modules focused and < 200 lines

### Project Patterns

```
project/
  src/            # Main package code
  tests/          # Unit and integration tests
  docs/           # Sphinx documentation
  scripts/        # CLI and utility scripts
  notebooks/      # Jupyter exploration
```

### Framework-Specific

- Django: Follow MVT pattern
- FastAPI: Separate routers, services, models
- Flask: Blueprints for modularity
- Data Science: Clear pipeline stages
