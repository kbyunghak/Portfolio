# Andrew Kim - Software Development Portfolio

[![CI](https://github.com/kbyunghak/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/kbyunghak/Portfolio/actions/workflows/deploy.yml)
[![Demo](https://img.shields.io/badge/demo-GitHub%20Pages-1f6feb)](https://kbyunghak.github.io/Portfolio/)

Portfolio website presenting production experience in C#/.NET, Azure, enterprise integration, industrial data processing, manufacturing applications, and enterprise CMMS development.

Software developer with 8+ years of experience building enterprise applications,
manufacturing systems, cloud integrations, and data-intensive software. I focus on
reliable production systems and use personal projects to explore AI-assisted
development, modern web applications, and interactive product design.

[LinkedIn](https://www.linkedin.com/in/kbyunghak/) ·
[GitHub](https://github.com/kbyunghak) ·
[Email](mailto:kbyunghak@gmail.com)

## Core Expertise

| Area | Technologies and domains |
| --- | --- |
| Enterprise development | C#, .NET, ASP.NET Core, REST APIs, SQL Server |
| Cloud and integration | Azure Functions, Azure Service Bus, Durable Entities, Azure Storage |
| Manufacturing systems | MES, ERP, SCADA, CMMS, OT/IT integration, Windows applications |
| Modern web and mobile | React, Next.js, TypeScript, React Native, Expo |
| Delivery and quality | GitHub Actions, xUnit, Vitest, Jest, Docker |

## Professional Case Studies

The case studies below describe responsibilities, design decisions, and measurable
outcomes without exposing company source code, customer data, operational
identifiers, or other proprietary details.

### Logistics Integration & Event Processing

Event-driven integration between internal business systems and external
transportation services, designed for fault isolation, traceability, and reliable
asynchronous processing.

**Technologies:** C#, .NET, Azure Functions, Azure Service Bus, Durable Entities,
SQL Server, Application Insights, Serilog

### Industrial Data Ingestion & Monitoring

High-volume telemetry ingestion, validation, missing-data detection, monitoring,
and automated recovery across industrial and cloud systems. The workflow processed
approximately 50,000 files per day and reduced manual monitoring by more than 90%.

**Technologies:** C#, ASP.NET Core, SQL Server, Azure Functions, Azure Blob Storage,
FTP/SFTP, REST APIs

### Module Assembly Timer

Production-floor application for cycle tracking, pause and exception capture,
quality validation, production recording, and operator visibility.

**Technologies:** C#, .NET, Windows Forms, Entity Framework 6, SQL Server

### Azzier CMMS & Mobile

Enterprise maintenance software covering work orders, asset management, REST API
integration, mobile synchronization, and field workflows.

**Technologies:** React Native, TypeScript, REST APIs, SQL Server, SQLite,
Telerik/Kendo UI, Android, Azure

[Explore the full professional case studies on the portfolio website](https://kbyunghak.github.io/Portfolio/#/projects)

## Featured Personal Projects

### MacroBrief

Portfolio-specific macro-impact dashboard that connects same-day macro and
breaking-news events to a user's U.S. stock holdings while maintaining a strict
information-only boundary.

**Highlights:** source-linked impact cards, rule-based exposure mapping, official
RSS ingestion, deterministic AI guardrails, automated API and web testing

**Tech:** Next.js, React, TypeScript, .NET 9, xUnit, Vitest, GitHub Actions

[Repository](https://github.com/kbyunghak/MacroBrief) ·
[Live Demo](https://kbyunghak.github.io/MacroBrief/)

### Burnaby PlanLab

Interactive urban-planning simulator for exploring housing scenarios and comparing
their estimated effects through maps, charts, and clearly labeled assumptions.

**Highlights:** scenario modeling, official-data references, interactive mapping,
comparison charts, transparent model assumptions

**Tech:** React, JavaScript, Leaflet, Recharts, Jest, GitHub Actions

[Repository](https://github.com/kbyunghak/Burnaby-PlanLab) ·
[Live Demo](https://kbyunghak.github.io/Burnaby-PlanLab/)

### ReadTheRoom

Mobile-first narrative choice game about reading social situations, making
decisions, and managing character stats through short story episodes.

**Highlights:** choice-driven scenarios, Korean and English localization,
save/resume support, story progression, encoding and data validation

**Tech:** Expo, React Native, TypeScript, AsyncStorage, Vitest, GitHub Actions

[Repository](https://github.com/kbyunghak/ReadTheRoom)

### SpeakFall

Voice-powered English learning game combining sentence practice, pronunciation
feedback, and a fast-paced falling-word challenge.

**Highlights:** browser speech recognition, word-level comparison, pronunciation
scoring, voice-controlled gameplay, validated learning content

**Tech:** React, Vite, Web Speech API, Vitest, GitHub Actions

[Repository](https://github.com/kbyunghak/SpeakFall) ·
[Live Demo](https://kbyunghak.github.io/SpeakFall/)

## Technical Skills

- **Backend:** C#, .NET, ASP.NET Core, Entity Framework, Node.js
- **Cloud:** Azure Functions, Azure Service Bus, Azure Storage, Application Insights
- **Data:** SQL Server, PostgreSQL, SQLite, JSON-based data pipelines
- **Frontend:** React, Next.js, TypeScript, JavaScript, HTML, CSS
- **Mobile:** React Native, Expo, Android
- **Enterprise:** MES, ERP, SCADA, CMMS, OT/IT integration
- **Testing:** xUnit, Vitest, Jest, React Testing Library
- **DevOps and tools:** GitHub Actions, Git, Docker

## Portfolio Website

This repository contains the React application behind the
[live portfolio](https://kbyunghak.github.io/Portfolio/). It provides dedicated
pages for experience, professional case studies, project details, downloadable
documents, and contact information.

### Run Locally

Requirements: Node.js 20 or later and npm.

```bash
git clone https://github.com/kbyunghak/Portfolio.git
cd Portfolio
npm ci
npm start
```

Run the test suite and production build:

```bash
npm test -- --watchAll=false
npm run build
```

Pushes to `master` or `main` run the test, build, and GitHub Pages deployment
workflow.

## Contact

I am based in Burnaby, British Columbia and am open to software development and
enterprise integration opportunities.

- [Portfolio](https://kbyunghak.github.io/Portfolio/)
- [LinkedIn](https://www.linkedin.com/in/kbyunghak/)
- [GitHub](https://github.com/kbyunghak)
- [Email](mailto:kbyunghak@gmail.com)
