import React from "react";
import { Download, ExternalLink } from "lucide-react";

const expertise = [
  ["Backend engineering", "C#, .NET 8/Core, ASP.NET Web API, Entity Framework"],
  ["Cloud and integration", "Azure Functions, Service Bus, Durable Entities, REST APIs"],
  ["Data and reliability", "SQL Server, validation, reconciliation, monitoring, structured logging"],
  ["Enterprise systems", "Oracle ERP, AVEVA MES, CMMS, OT/IT integration, Windows Forms"],
];

const Resume = () => (
  <main className="about-page">
    <header className="about-hero">
      <p className="section-kicker">About</p>
      <h1>Building dependable software for operational environments</h1>
      <p>
        I am a software developer with more than eight years of experience building
        and supporting enterprise applications in production environments. My work
        spans C#/.NET applications, Azure integrations, SQL Server data workflows,
        desktop systems, and operational support.
      </p>
      <p>
        I focus on the parts of software that determine whether a system can be
        trusted in daily operation: validation, reconciliation, observability,
        failure recovery, deployment verification, and clear technical communication.
      </p>
      <div className="about-actions">
        <a className="button button-secondary" href={`${process.env.PUBLIC_URL}/documents/Andrew_Kim_Resume.pdf`} download>
          <Download aria-hidden="true" size={18} /> Download Resume
        </a>
        <a className="button about-outline-button" href="https://www.linkedin.com/in/kbyunghak/" target="_blank" rel="noopener noreferrer">
          <ExternalLink aria-hidden="true" size={18} /> LinkedIn
        </a>
      </div>
    </header>

    <section className="expertise-section" aria-labelledby="expertise-title">
      <div className="section-heading">
        <p className="section-kicker">Expertise</p>
        <h2 id="expertise-title">A practical enterprise engineering toolkit</h2>
      </div>
      <dl className="expertise-list">
        {expertise.map(([term, description]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </section>

    <section className="working-style" aria-labelledby="working-style-title">
      <div className="section-heading">
        <p className="section-kicker">How I work</p>
        <h2 id="working-style-title">Production ownership beyond implementation</h2>
      </div>
      <div className="working-style-grid">
        <article><h3>Understand the operation</h3><p>Start with the people, process, data, and constraints the software must support.</p></article>
        <article><h3>Design for failure</h3><p>Add validation, traceability, recovery paths, and actionable operational visibility.</p></article>
        <article><h3>Verify in context</h3><p>Test changes against realistic workflows and confirm behavior after deployment.</p></article>
      </div>
    </section>
  </main>
);

export default Resume;
