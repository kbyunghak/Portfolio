# Personal Project README Standard

All personal project READMEs use the section order defined below. Sections must not
be reordered. Content and diagrams should be adapted to the project, but the
document structure remains consistent across repositories.

## Required Order

1. Badges
2. Overview
3. Project Type
4. Live Demo
5. Problem
6. Solution
7. Key Features
8. How It Works
9. Architecture
10. Tech Stack
11. Project Structure
12. Current Status
13. Getting Started
14. Testing
15. CI/CD
16. Documentation
17. Roadmap
18. Limitations
19. License

`Project Type` is part of the Overview section and appears immediately after the
overview text as a concise, recruiter-friendly label.

## Section Template

````markdown
# Project Name

One-sentence project description.

[![CI](WORKFLOW_BADGE_URL)](WORKFLOW_URL)
[![Demo](https://img.shields.io/badge/demo-GitHub%20Pages-1f6feb)](DEMO_URL)

## Overview

Short explanation of the project, intended users, and primary value.

**Project Type:** Project category

## Live Demo

[Open the live application](DEMO_URL)

State whether the demo is production, prototype, static, mock-data, or otherwise
limited. If there is no public demo, state that clearly.

## Problem

Describe the user or domain problem.

## Solution

Explain how the project addresses the problem.

## Key Features

- Feature

## How It Works

Project-specific flow explanation or Mermaid diagram.

## Architecture

Major components, responsibilities, and system boundaries.

## Tech Stack

| Area | Technology |
| --- | --- |
| Example | Example |

## Project Structure

```text
project/
```

## Current Status

Describe what works now, the release stage, and known active work.

## Getting Started

Requirements and local setup instructions.

## Testing

Commands and test coverage scope.

## CI/CD

Workflow triggers, checks, and deployment path.

## Documentation

Links to detailed project documentation.

## Roadmap

- Planned improvement

## Limitations

- Known boundary

## License

State the license or explicitly state that no license has been granted.
````

## Badge Rules

Projects with a public web demo use:

```markdown
[![CI](WORKFLOW_BADGE_URL)](WORKFLOW_URL)
[![Demo](https://img.shields.io/badge/demo-GitHub%20Pages-1f6feb)](DEMO_URL)
```

Projects without a public web demo use:

```markdown
[![CI](WORKFLOW_BADGE_URL)](WORKFLOW_URL)
[![Status](https://img.shields.io/badge/status-active%20development-yellow)](#current-status)
```

Badge labels stay short and use `CI`, `Demo`, or `Status`.

## Project-Specific How It Works Flows

### MacroBrief — Data Flow

```text
Holdings
  ↓
Macro Mapping
  ↓
Impact Engine
  ↓
Dashboard
  ↓
AI Guardrails
```

### Burnaby PlanLab — Simulation Flow

```text
Select Facilities
  ↓
Budget Allocation
  ↓
Simulation
  ↓
2050 Projection
  ↓
Charts
```

### ReadTheRoom — Game Flow

```text
Episode
  ↓
Choice
  ↓
Stat Update
  ↓
Feedback
  ↓
Ending
```

### SpeakFall — Learning Flow

```text
Select Lesson
  ↓
Speech Recording
  ↓
Pronunciation Evaluation
  ↓
Feedback
  ↓
Progress
```

## Project Types

| Project | Project Type |
| --- | --- |
| MacroBrief | Financial Information Dashboard |
| Burnaby PlanLab | Urban Planning Simulation |
| ReadTheRoom | Narrative Mobile Game |
| SpeakFall | Language Learning Web Application |

## Writing Rules

- Lead with the user value before implementation details.
- Use current, verifiable project status; do not describe planned functionality as
  complete.
- Keep detailed specifications and historical implementation notes in `docs/`.
- Use diagrams when they clarify a real flow or component boundary.
- Link back to the portfolio where appropriate.
- Do not expose proprietary code, data, credentials, or internal identifiers.
