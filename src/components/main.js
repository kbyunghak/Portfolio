import { Link } from "react-router-dom";
import { Cloud, Database, Factory, Server } from "lucide-react";

const metrics = [
  { value: "8+ years", label: "Enterprise application experience" },
  { value: "50K+", label: "Telemetry files processed daily" },
  { value: "90%+", label: "Reduction in manual monitoring" },
  { value: "Production", label: "Manufacturing, logistics, and ERP/MES systems" },
];

const capabilities = [
  {
    icon: Server,
    title: "Backend Engineering",
    description: "C#, .NET, ASP.NET Core, REST APIs, Entity Framework",
  },
  {
    icon: Cloud,
    title: "Cloud & Integration",
    description: "Azure Functions, Azure Service Bus, Durable Entities, REST integrations",
  },
  {
    icon: Database,
    title: "Data & Reliability",
    description: "SQL Server, validation, reconciliation, monitoring, structured logging",
  },
  {
    icon: Factory,
    title: "Enterprise & Desktop Systems",
    description: "Windows Forms, Oracle ERP, AVEVA MES, CMMS, manufacturing applications",
  },
];

const Main = () => (
  <div className="home-page">
    <main>
      <section className="career-hero" aria-labelledby="hero-title">
        <p className="hero-eyebrow">Software Developer</p>
        <h1 id="hero-title">Andrew Kim</h1>
        <p className="hero-specialty">C#/.NET <span aria-hidden="true">|</span> Azure <span aria-hidden="true">|</span> Enterprise Integration</p>
        <p className="hero-summary">
          I build and support reliable enterprise applications, cloud integrations,
          desktop systems, and production data workflows for manufacturing and
          operational environments.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <Link to="/projects" className="button button-primary">View Projects</Link>
          <a
            href={`${process.env.PUBLIC_URL}/documents/Andrew_Kim_Resume.pdf`}
            className="button button-secondary"
            download
          >
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/kbyunghak/"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-tertiary"
          >
            LinkedIn
          </a>
        </div>
        <a
          className="portfolio-download-link"
          href={`${process.env.PUBLIC_URL}/documents/Andrew_Kim_Project_Portfolio.pdf`}
          download
        >
          Download the detailed project portfolio (PDF)
        </a>
      </section>

      <section className="career-metrics" aria-labelledby="metrics-title">
        <div className="section-heading">
          <p className="section-kicker">Selected impact</p>
          <h2 id="metrics-title">Production experience measured in outcomes</h2>
        </div>
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="core-capabilities" aria-labelledby="capabilities-title">
        <div className="section-heading">
          <p className="section-kicker">Core capabilities</p>
          <h2 id="capabilities-title">Engineering reliable operational systems</h2>
        </div>
        <div className="capabilities-grid">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <article className="capability-card" key={title}>
              <Icon aria-hidden="true" size={24} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>

    <footer className="site-footer">©{new Date().getFullYear()} Andrew Kim</footer>
  </div>
);

export default Main;
