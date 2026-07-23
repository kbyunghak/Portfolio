import React from "react";

const experiences = [
  {
    company: "FreightLogics Systems",
    location: "Langley, BC",
    role: "Software Developer, Contract",
    period: "May 2025 – Aug 2025",
    summary: "Built and supported event-driven logistics integrations across internal systems and external transportation services.",
    outcomes: [
      "Developed asynchronous workflows with C#, .NET, Azure Functions, and Azure Service Bus.",
      "Implemented retry, dead-letter, validation, duplicate detection, and fault-state handling.",
      "Improved traceability with structured logging, correlation IDs, Application Insights, and Serilog.",
      "Used SQL Server to validate and reconcile shipment records across connected systems.",
      "Investigated production failures involving external APIs, message state, and duplicate records.",
      "Documented processing and failure scenarios to support maintainable operations.",
    ],
    technologies: ["C#", ".NET", "Azure Functions", "Azure Service Bus", "SQL Server", "Serilog"],
  },
  {
    company: "Ballard Power Systems",
    location: "Burnaby, BC",
    role: "Software Development Engineer",
    period: "Jul 2021 – Sep 2024",
    summary: "Developed production applications, data integrations, monitoring tools, and manufacturing-system workflows.",
    outcomes: [
      "Supported an ingestion system processing approximately 50,000 manufacturing files per day.",
      "Developed monitoring and diagnostics that reduced manual monitoring by more than 90%.",
      "Built C#/.NET REST APIs and data-reconciliation workflows integrating MES, ERP, and SQL Server systems.",
      "Investigated production incidents across application logs, database records, and integration flows.",
      "Implemented missing-data detection, validation, and backfill workflows for production telemetry.",
      "Optimized SQL queries and processing logic for high-volume operational workloads.",
      "Supported release validation, deployment verification, and post-deployment monitoring.",
      "Worked with manufacturing, engineering, operations, infrastructure, and ERP teams.",
    ],
    technologies: ["C#", ".NET", "ASP.NET Core", "SQL Server", "Azure", "Oracle ERP", "AVEVA MES", "Windows Forms"],
  },
  {
    company: "Tero Consulting Ltd.",
    location: "Port Coquitlam, BC",
    role: "Software Developer",
    period: "Jun 2016 – Jun 2021",
    summary: "Developed and supported configurable enterprise CMMS web and mobile applications for customer environments.",
    outcomes: [
      "Delivered product enhancements, bug fixes, reports, and customer-requested workflows.",
      "Worked directly with clients to gather requirements and investigate production issues.",
      "Supported integrations, testing, deployment validation, documentation, and ongoing maintenance.",
      "Developed configurable web functionality using C#, ASP.NET, SQL Server, JavaScript, Telerik, and Kendo UI.",
      "Investigated application, database, configuration, and deployment issues in customer environments.",
      "Maintained shared product behaviour while delivering customer-specific enhancements.",
    ],
    technologies: ["C#", "ASP.NET", "SQL Server", "JavaScript", "REST APIs", "Telerik", "Kendo UI", "Android"],
  },
];

const Experience = () => (
  <main className="experience-page">
    <header className="experience-hero">
      <p className="section-kicker">Experience</p>
      <h1>Enterprise applications from delivery through production support</h1>
      <p>Roles centered on integration, manufacturing systems, operational data, and dependable day-to-day software support.</p>
    </header>

    <div className="experience-list">
      {experiences.map((experience) => (
        <article className="experience-card" key={experience.company}>
          <div className="experience-heading">
            <div>
              <p>{experience.company} <span aria-hidden="true">·</span> {experience.location}</p>
              <h2>{experience.role}</h2>
            </div>
            <time>{experience.period}</time>
          </div>
          <p className="experience-summary">{experience.summary}</p>
          <ul>
            {experience.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
          </ul>
          <ul className="technology-list" aria-label={`${experience.company} technologies`}>
            {experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </article>
      ))}
    </div>
  </main>
);

export default Experience;
