# Andrew Kim — Software Development Portfolio

Personal portfolio presenting C#/.NET, Azure, enterprise integration, manufacturing systems, and production support experience.

**Live site:** [kbyunghak.github.io/Portfolio](https://kbyunghak.github.io/Portfolio/)

## Featured case studies

- Logistics Integration & Event Processing — Azure Functions, Service Bus, Durable Entities, SQL Server
- Industrial Data Ingestion & Monitoring — C#/.NET, SQL Server, Azure, FTP/SFTP, monitoring and backfill
- Module Assembly Timer — C#, Windows Forms, Entity Framework 6, SQL Server
- Azzier CMMS & Mobile — ASP.NET, SQL Server, REST APIs, Telerik, Kendo UI, Android

Company and customer identifiers, internal contracts, infrastructure details, and sensitive production data are intentionally excluded. Public diagrams are simplified or reconstructed for portfolio use.

## Site features

- Hash-based routing compatible with GitHub Pages
- Responsive Home, About, Experience, Projects, case-study, and Contact pages
- Downloadable Resume and detailed Project Portfolio PDFs
- Semantic headings, labeled form fields, keyboard focus states, and descriptive image text
- Automated test, build, and GitHub Pages deployment workflow

## Technology

- React 19
- React Router 6
- JavaScript (ES6+)
- JSON
- CSS
- Lucide icons
- EmailJS
- Create React App
- GitHub Pages

## Local setup

```bash
git clone https://github.com/kbyunghak/portfolio.git
cd portfolio
cp .env.example .env.local
npm ci
npm start
```

The EmailJS variables are required only for sending the Contact form. Do not store server secrets in client-side environment variables.

## Environment variables

Copy `.env.example` to `.env.local` and provide the following client-side EmailJS identifiers when contact-form delivery is required:

- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`

When these values are unavailable, the site disables the form and presents a direct email link.

## Validation

```bash
npm test -- --watchAll=false
npm run build
```

The test suite covers primary navigation, featured case-study rendering, invalid routes, required project data, unique slugs, and Contact form success, failure, and unconfigured states.

The production build is configured for the official case-sensitive path `/Portfolio/`.

## Deployment

Pushes to `master` or `main` run tests, build the site, and deploy the `build` directory through GitHub Actions. Configure the three EmailJS values as GitHub Actions secrets before enabling the Contact form in production.

## Accessibility

- Semantic page landmarks and heading hierarchy
- Visible keyboard focus
- Explicit Contact form labels and live status messages
- Alternative text for meaningful case-study images
- Responsive layouts without horizontal scrolling at supported breakpoints

## Known limitations

- HashRouter produces URLs such as `/Portfolio/#/projects`; individual hash routes are not independently listed in the sitemap.
- Company source code and internal production details are not publicly available.
- EmailJS configuration is required for the Contact form to send messages.

## Contact

- [LinkedIn](https://www.linkedin.com/in/kbyunghak/)
- [GitHub](https://github.com/kbyunghak)
- [Email](mailto:kbyunghak@gmail.com)
