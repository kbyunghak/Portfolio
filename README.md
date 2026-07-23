# Andrew Kim - Software Development Portfolio

[![Test and deploy portfolio](https://github.com/kbyunghak/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/kbyunghak/Portfolio/actions/workflows/deploy.yml)

Portfolio website presenting production experience in C#/.NET, Azure, enterprise integration, industrial data processing, manufacturing applications, and enterprise CMMS development.

**Live site:** [kbyunghak.github.io/Portfolio](https://kbyunghak.github.io/Portfolio/)

## Featured case studies

### Logistics Integration & Event Processing

Event-driven integration between internal business systems and external transportation services using Azure Functions, Azure Service Bus, Durable Entities, SQL Server, Application Insights, and Serilog.

### Industrial Data Ingestion & Monitoring

High-volume telemetry ingestion, validation, missing-data detection, monitoring, and automated recovery across FTP/SFTP, SQL Server, Azure Functions, and Azure Blob Storage.

Key results include processing approximately 50,000 files per day and reducing manual monitoring by more than 90%.

### Module Assembly Timer

Windows Forms production application for real-time cycle tracking, pause and exception capture, quality validation, production recording, and operator visibility. Built with C#/.NET, Entity Framework 6, and SQL Server.

### Azzier CMMS & Mobile

Enterprise CMMS web and mobile development covering work orders, asset management, REST API integration, mobile synchronization, Telerik/Kendo UI customization, SQL Server, Android, and Azure.

Public case studies use reconstructed workflow diagrams and exclude proprietary implementation details, operational identifiers, customer data, and company source code.

## Website features

- Responsive Home, About, Experience, Projects, project-detail, and Contact pages
- Dedicated case-study routes with responsibilities, challenges, decisions, outcomes, technologies, and architecture diagrams
- Hash-based routing compatible with GitHub Pages
- Compatibility redirect from `/resume` to `/about`
- Safe handling of invalid routes and project slugs
- Downloadable Resume and Project Portfolio PDFs
- Contact form with EmailJS configuration detection and direct-email fallback
- Semantic headings, form labels, keyboard focus states, live status messages, and image alternative text
- Automated test, build, and GitHub Pages deployment workflow

## Technology stack

- React 19
- React Router 6
- JavaScript (ES6+)
- JSON
- CSS
- Lucide React
- EmailJS
- Jest and React Testing Library
- Create React App 5
- GitHub Actions
- GitHub Pages

## Project structure

```text
src/
  components/       Page and case-study components
  data/             Structured project content and validation tests
  images/           Public workflow and architecture diagrams
public/
  documents/        Downloadable Resume and Portfolio PDFs
  sitemap.xml       Public site map
.github/workflows/  Test, build, and deployment workflow
```

## Local development

Requirements:

- Node.js 20 or later
- npm

```bash
git clone https://github.com/kbyunghak/Portfolio.git
cd Portfolio
npm ci
npm start
```

The development site is available at `http://localhost:3000/Portfolio/`.

## Contact form configuration

Copy `.env.example` to `.env.local` when EmailJS delivery is required:

```bash
cp .env.example .env.local
```

Configure these client-side identifiers:

```text
REACT_APP_EMAILJS_SERVICE_ID
REACT_APP_EMAILJS_TEMPLATE_ID
REACT_APP_EMAILJS_PUBLIC_KEY
```

When they are unavailable, the Contact form is disabled and the website displays a direct email option. Do not store private server credentials in client-side environment variables.

## Testing and production build

```bash
npm test -- --watchAll=false
npm run build
```

The test suite covers:

- Primary navigation and page rendering
- Featured project rendering
- Invalid routes and invalid project slugs
- `/resume` compatibility redirect
- Required project fields and unique slugs
- Contact form success and failure behavior
- Contact form behavior when EmailJS is not configured

## Deployment

Pushes to `master` or `main` trigger the workflow in `.github/workflows/deploy.yml`.

The workflow:

1. Installs dependencies with `npm ci`
2. Runs the test suite
3. Creates an optimized production build
4. Uploads the build artifact
5. Deploys the site to GitHub Pages

EmailJS values can be configured as GitHub Actions secrets when production form delivery is enabled.

## Known limitations

- HashRouter produces URLs such as `/Portfolio/#/projects`; individual hash routes are not independently represented in `sitemap.xml`.
- The project currently uses Create React App 5. Dependency audit warnings may originate from transitive build-tool packages.
- A forced dependency upgrade has not been applied because it could introduce breaking changes. Migration to a modern build tool such as Vite can be considered separately.
- Company source code and internal production data are intentionally excluded.

## Contact

- [Portfolio](https://kbyunghak.github.io/Portfolio/)
- [LinkedIn](https://www.linkedin.com/in/kbyunghak/)
- [GitHub](https://github.com/kbyunghak)
- [Email](mailto:kbyunghak@gmail.com)
