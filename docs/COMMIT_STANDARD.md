# Personal Project Commit Standard

All personal projects use the commit message and commit-scope rules defined in this
document. Project-specific contributing guides may add validation requirements,
but they should not redefine the shared message format.

## Commit Message Format

Use a Conventional Commits-style message:

```text
type: concise imperative summary
```

Write the summary in English, keep it short, and describe the completed change.
Do not end the subject line with a period.

## Allowed Types

| Type | Use |
| --- | --- |
| `feat` | User-facing feature additions |
| `fix` | Bug fixes and broken behavior recovery |
| `docs` | Documentation-only changes |
| `test` | Tests, validators, or test infrastructure |
| `ci` | CI/CD workflow changes |
| `chore` | Maintenance, tooling, dependencies, or project policy |
| `refactor` | Code structure changes without intended behavior changes |
| `style` | Formatting-only changes |
| `data` | Content, localization, seed data, JSON, or fixtures |
| `perf` | Performance improvements |
| `build` | Build system or packaging changes |

## Examples

```text
feat: add portfolio impact filtering
fix: restore corrupted Korean UI copy
docs: align README with shared standard
test: add scenario graph validation
ci: add production build check
chore: update Node runtime
refactor: simplify scenario registry
data: update episode metadata
style: format markdown tables
perf: reduce dashboard refresh work
build: migrate the web build to Vite
```

## Commit Scope Rules

- Keep each commit focused on one purpose.
- Separate unrelated documentation, UI, data, tests, and infrastructure changes.
- Combine implementation and tests when they describe one coherent change.
- Do not commit credentials, local data, generated secrets, or machine-specific
  configuration.
- Review staged files before committing.
- Use `docs:` when only documentation changes.
- Use `data:` for scenario content, localization, fixtures, seed data, or JSON-only
  domain updates.
- Use `chore:` for maintenance that does not change user-facing behavior.
- Use `fix:` when correcting broken behavior.
- Use `style:` only when behavior and documentation meaning remain unchanged.

## Branch and Pull Request Guidance

- Use descriptive branch names such as `feature/...`, `fix/...`, or `docs/...`.
- Keep pull requests limited to one reviewable objective.
- Explain important behavior changes, validation performed, and known limitations.
- Update documentation when a change affects architecture, setup, testing,
  deployment, data formats, or user-facing behavior.

## Pre-Commit Checklist

Before committing:

1. Confirm the diff contains only intended files.
2. Run formatting, linting, tests, and builds appropriate to the change.
3. Check documentation and configuration for secrets or local paths.
4. Verify user-facing text and localization when applicable.
5. Select the commit type that best represents the change.

Documentation-only changes do not require application tests when they cannot affect
runtime behavior, but Markdown structure and links should still be checked.

