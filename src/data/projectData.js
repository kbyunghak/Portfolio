import freightArchitecture from "../images/freightlogics-architecture.png";
import ballardFlow from "../images/ballard-data-flow.png";
import moduleTimerScreenshot from "../images/Module_Assembly_Timer.png";
import azzierScreenshot from "../images/Azzier.png";
import schedulerScreenshot from "../images/scheduler.png";
import vocaboostScreenshot from "../images/vocaboost.png";
import pronunciationScreenshot from "../images/pronunciation_game.png";
import portfolioScreenshot from "../images/portfolio.png";

export const featuredProjects = [
  {
    slug: "logistics-integration",
    title: "Logistics Integration & Event Processing",
    organization: "FreightLogics Systems",
    role: "Contract Software Developer",
    summary: "An event-driven Azure integration workflow connecting internal business systems with external transportation services.",
    problem: "Shipment processing crossed multiple internal and partner systems. External API failures, duplicate messages, and inconsistent records needed to be isolated without blocking the core messaging pipeline.",
    responsibilities: [
      "Developed Azure Functions-based processors integrated with Azure Service Bus.",
      "Implemented retry policies, validation controls, duplicate-message detection, and dead-letter handling.",
      "Used Durable Entities to manage fault states and isolate external-system failures.",
      "Reconciled shipment data in SQL Server and investigated production integration issues.",
    ],
    challenges: [
      "Maintaining traceability across asynchronous, distributed workflows.",
      "Preventing partner-system failures from blocking unrelated shipment processing.",
      "Detecting duplicate or inconsistent data across internal storage and partner APIs.",
    ],
    decisions: [
      "Separated transport messaging from fault-state management to contain failures.",
      "Used correlation IDs and structured logging for end-to-end investigation.",
      "Added validation and reconciliation checkpoints instead of relying on successful API responses alone.",
    ],
    outcomes: [
      "Improved operational resilience by isolating external API failures.",
      "Made asynchronous failures traceable through correlation IDs and structured logs.",
      "Improved consistency between internal records and transportation-service APIs.",
    ],
    technologies: ["C#", ".NET", "Azure Functions", "Azure Service Bus", "Durable Entities", "REST APIs", "SQL Server", "Application Insights", "Serilog"],
    highlights: ["Event-driven Azure integration", "External-system fault isolation", "End-to-end traceability"],
    images: [
      { src: freightArchitecture, alt: "Event-driven Azure logistics integration architecture" },
    ],
    confidentiality: "Company and partner identifiers, message contracts, queue names, database structures, and proprietary implementation details are intentionally omitted.",
  },
  {
    slug: "industrial-data-ingestion",
    title: "Industrial Data Ingestion & Monitoring",
    organization: "Ballard Power Systems",
    role: "Software Development Engineer",
    summary: "A production telemetry workflow for high-volume ingestion, validation, monitoring, missing-data detection, and recovery.",
    problem: "Engineering teams needed a reliable way to ingest telemetry from distributed FTP and SFTP sources, identify missing or inconsistent records, and recover failed processing without continuous manual monitoring.",
    responsibilities: [
      "Designed and supported an end-to-end ingestion pipeline for high-volume telemetry data.",
      "Built validation, missing-data detection, and automated backfill capabilities.",
      "Investigated production failures using application logs, database records, and processing history.",
      "Developed monitoring tools that exposed ingestion status and data-quality issues.",
    ],
    challenges: [
      "Processing large daily file volumes from distributed data sources.",
      "Distinguishing delayed data from genuinely missing or invalid records.",
      "Recovering failed ingestion without introducing duplicates.",
    ],
    decisions: [
      "Separated ingestion, validation, persistence, and recovery responsibilities.",
      "Recorded processing state so failed items could be investigated and safely retried.",
      "Combined automated detection with an operational dashboard for exception-driven support.",
    ],
    outcomes: [
      "Processed approximately 50,000 telemetry files per day.",
      "Reduced manual monitoring workload by more than 90%.",
      "Improved detection and recovery of missing and inconsistent records.",
      "Enabled faster production investigation through centralized status and history.",
    ],
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Azure Functions", "Azure Blob Storage", "FTP/SFTP", "REST APIs"],
    highlights: ["Approximately 50,000 files per day", "90%+ reduction in manual monitoring", "Automated detection and recovery"],
    images: [
      { src: ballardFlow, alt: "Industrial telemetry ingestion and recovery data flow" },
    ],
    confidentiality: "The public case study uses a reconstructed architecture diagram instead of internal production screens. Server, customer, employee, and telemetry identifiers are not included.",
  },
  {
    slug: "module-assembly-timer",
    title: "Module Assembly Timer",
    organization: "Ballard Power Systems",
    role: "Production Application",
    summary: "A Windows Forms factory-floor application for assembly cycle tracking, process validation, and operator visibility.",
    problem: "Production teams needed consistent cycle-time tracking and real-time visibility into assembly progress, pause reasons, test steps, and workflow bottlenecks in a noisy factory environment.",
    responsibilities: [
      "Developed and supported a Windows Forms application used by production operators.",
      "Implemented real-time timers, process status, pause tracking, and assembly-step validation.",
      "Reproduced defects on the production line and verified fixes after deployment.",
      "Improved usability and reliability based on direct operator feedback.",
    ],
    challenges: [
      "Keeping the interface clear and responsive for factory-floor use.",
      "Representing pauses, rework, testing, and partial builds accurately.",
      "Validating fixes in an active production environment.",
    ],
    decisions: [
      "Used a focused desktop workflow suited to fixed production workstations.",
      "Captured structured process events instead of relying only on final cycle time.",
      "Integrated visual status feedback to improve communication between operators and engineering teams.",
    ],
    outcomes: [
      "Enabled real-time visibility into assembly progress and build status.",
      "Supported bottleneck analysis through production-data tracking.",
      "Improved communication and reliability for production support workflows.",
    ],
    technologies: ["C#", ".NET", "Windows Forms", "Entity Framework 6", "SQL Server"],
    highlights: ["Live factory-floor application", "Real-time cycle and pause tracking", "Windows Forms with EF6"],
    images: [
      { src: moduleTimerScreenshot, alt: "Module Assembly Timer workflow and process validation diagram" },
    ],
    confidentiality: "The public case study uses a reconstructed workflow diagram. The original production interface and operational identifiers are not shown.",
  },
  {
    slug: "azzier-cmms",
    title: "Azzier CMMS & Mobile",
    organization: "Tero Consulting Ltd.",
    role: "Software Developer",
    summary: "Development, maintenance, integration, and production support for a CMMS web and mobile platform.",
    problem: "Maintenance teams required configurable work-order and asset-management workflows across web and mobile clients, with reliable data exchange and support for customer-specific operational requirements.",
    responsibilities: [
      "Contributed to CMMS development, maintenance, feature enhancements, testing, and deployment support.",
      "Implemented customer-requested UI and workflow enhancements using Telerik and Kendo UI.",
      "Supported REST API, CORS, SQL Server, and mobile data-transfer workflows.",
      "Investigated customer issues and delivered production fixes and documentation.",
    ],
    challenges: [
      "Supporting customer-specific behavior without destabilizing shared product workflows.",
      "Maintaining consistent data exchange between web, API, database, and mobile layers.",
      "Troubleshooting issues across configurable enterprise environments.",
    ],
    decisions: [
      "Kept customer-facing customization within reusable UI and configuration patterns.",
      "Used API boundaries to separate mobile data transfer from core CMMS business logic.",
      "Combined development work with deployment validation and production support.",
    ],
    outcomes: [
      "Delivered customer-requested enhancements across web and mobile workflows.",
      "Supported reliable work-order and asset-management operations.",
      "Improved maintainability through documented fixes and reusable UI customization.",
    ],
    technologies: ["C#", "ASP.NET", "SQL Server", "REST APIs", "JavaScript", "Telerik", "Kendo UI", "Android"],
    highlights: ["Enterprise CMMS web and mobile", "Customer-specific workflows", "Development through production support"],
    images: [
      { src: azzierScreenshot, alt: "Azzier CMMS work order and mobile maintenance workflow" },
    ],
    confidentiality: "The public case study uses a simplified workflow diagram. The actual application interface and customer data are not shown.",
  },
];

export const otherProjects = [
  {
    title: "Scheduler System",
    description: "A scheduling interface with recurring events, resource allocation, and conflict-aware workflows.",
    technologies: "C#, ASP.NET MVC, JavaScript, SQL Server",
    image: schedulerScreenshot,
  },
  {
    title: "VocaBoost",
    description: "A vocabulary-learning application with daily study organization and progress tracking.",
    technologies: "React, Node.js, Express, MongoDB",
    image: vocaboostScreenshot,
  },
  {
    title: "Interactive Pronunciation Trainer",
    description: "A browser-based pronunciation practice application using speech recognition and interactive visual feedback.",
    technologies: "React, Web Speech API, HTML Canvas",
    image: pronunciationScreenshot,
  },
  {
    title: "Portfolio Website",
    description: "This responsive portfolio, designed to present enterprise experience and production case studies.",
    technologies: "React, React Router, CSS, GitHub Pages",
    image: portfolioScreenshot,
  },
];

export const findProjectBySlug = (slug) => featuredProjects.find((project) => project.slug === slug);
