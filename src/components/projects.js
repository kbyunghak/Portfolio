import React from "react";
import { Database, Clock, Wrench, Smartphone, Calendar, BookOpen, Globe} from "lucide-react";
import ballardImage from "../images/ballard.png"; 
import mat from "../images/Module_Assembly_Timer.png"; 
import azzier from "../images/Azzier.png"; 
import azzierMobile from "../images/AzzierMobile.png"; 
import scheduler from "../images/scheduler.png";
import vocaboost from "../images/vocaboost.png";
import portfolioImage from "../images/portfolio.png";

const projects = [
  {
    title: "Ballard Bus Data",
    icon: <Database className="project-icon" />,
    description: (
      <>
        <p>
          Led the development of a <strong>real-time data ingestion system</strong> that automates 
          the retrieval, processing, and storage of large-scale bus telemetry data. The system 
          <strong> downloads bus data from FTP/SFTP servers</strong>, transforms <strong>DAT files into SQL format</strong>, 
          and efficiently imports <strong>~50K files daily</strong> into a <strong>local SQL database, Azure Cloud, 
          and AVEVA Insight</strong>.
        </p>
      </>
    ),
    features: [
      "Real-time data ingestion, processing, and storage",
      "Automated error detection and backfilling system",
      "Web-based monitoring dashboard with real-time updates",
      "Advanced data visualization with interactive line charts",
      "Seamless integration with Azure Cloud and AVEVA Insight",
      "Multi-threaded architecture for optimized performance"
    ],
    technologies: 
    "C# ASP.NET MVC/Core, VB, MS SQL, Azure, AVEVA Insight, IIS, Git, Window Services, " +
    "FTP/SFTP, WPF, JavaScript, HTML/CSS, Entity Framework, LINQ, SignalR, Highcharts, " +
    "Postman, Jira, Confluence, Agile/Scrum, Chart.js",
    images: [
      { src: ballardImage, alt: "Ballard Bus System" } 
    ],
  },
  {
    title: "Module Assembly Timer",
    icon: <Clock className="project-icon" />,
    description: (
      <>
        <p>
          Designed and developed a <strong>Windows application</strong> that tracks module 
          assembly time, allowing assemblers to <strong>record build progress, analyze 
          efficiency, and monitor issues</strong> in real time.
        </p>
      </>
    ), 
    features: ["Tracks assembly progress", "Records build time", "Identifies process bottlenecks"],
    technologies: "WPF, C#.NET, Entity Framework 6, MS SQL",
    images: [
      { src: mat, alt: "Ballard Bus System" } 
    ],
  },
  {
    title: "Azzier CMMS (Computerized Maintenance Management System)",
    icon: <Wrench className="project-icon" />,
    description: (
      <>
        <p>
          Developed and maintained <strong>CMMS software</strong> to enhance <strong>asset management</strong>, 
          improve <strong>user interface customization</strong>, and implement <strong>mobile application integration</strong>.
        </p>
      </>
    ),
    features: ["Asset tracking & maintenance", "Custom UI components", "Mobile integration"],
    technologies: 
    "ASP.NET, C#, MS SQL, Telerik & Kendo UI, JavaScript, Web API, CORS, GoogleAPI, " + 
    " QuaggaJS, Barcode Scanner, Jira, Confluence, Agile/Scrum",
    images: [
      { src: azzier, alt: "Azzier" }
    ],
    youtube: "https://www.youtube.com/watch?v=gJObNtp79Q4",
  },
  {
    title: "Azzier Mobile",
    icon: <Smartphone className="project-icon" />, // Added icon for mobile development
    description: (
      <>
        <p>
          Led the development of <strong>Azzier Mobile</strong>, a responsive and intuitive mobile 
          application designed to enhance <strong>field maintenance operations</strong>. The app 
          integrates seamlessly with <strong>Azzier CMMS</strong> to allow real-time asset 
          management, work order tracking, and user authentication.
        </p>
        <p>
          Designed and implemented key features such as <strong>offline data synchronization</strong>, 
          <strong>QR code scanning for asset lookup</strong>, and an enhanced <strong>UI/UX</strong> 
          for better usability on mobile devices. Integrated with <strong>RESTful APIs</strong> 
          for seamless data exchange between the mobile app and backend services.
        </p>
      </>
    ),
    features: [
      "Mobile work order management",
      "Offline data sync for remote usage",
      "QR code scanning for asset tracking",
      "Optimized for both iOS and Android",
      "Seamless integration with Azzier CMMS",
    ],
    technologies: "Android, Java, REST API, QR Code Scanner, Node.js",
    images: [{ src: azzierMobile, alt: "Azzier Mobile App" }],
  },
  {
    title: "Scheduler System",
    icon: <Calendar className="project-icon" />,
    description: (
      <>
        <p>
          Designed and developed a <strong>Scheduler System</strong> to automate and optimize <strong>task scheduling, resource 
          allocation, and workflow efficiency</strong> for various business operations. The system enables users to 
          create, update, and manage schedules while providing <strong>real-time notifications and analytics</strong>.
        </p>
        <p>
          Implemented a <strong>drag-and-drop scheduling interface</strong>, integrated <strong>calendar views</strong>, and developed 
          advanced <strong>conflict detection algorithms</strong> to ensure seamless scheduling. The system supports 
          multiple users, permissions, and <strong>custom recurrence patterns</strong> for tasks.
        </p>
      </>
    ),
    features: [
      "Drag-and-drop task scheduling",
      "Real-time notifications and updates",
      "Advanced conflict detection and resolution",
      "Custom recurring event management",
      "Integrated calendar and analytics dashboard",
    ],
    technologies: "C# ASP.NET MVC, JavaScript, REST API, Bootstrap, SQL Server, Entity Framework, dhtmlxScheduler",
    images: [{ src: scheduler, alt: "Scheduler System" }],
  },
  {
    title: "VocaBoost - Vocabulary Learning App",
    icon: <BookOpen className="project-icon" />,
    description: (
      <>
        <p>
          Developed <strong>VocaBoost</strong>, an interactive vocabulary learning platform for my son. 
          The app allows users to <strong>add, organize, and review vocabulary words</strong> in a 
          structured format.
        </p>
        <p>
          Features include a <strong>day-based learning system</strong>, interactive word management, 
          and progress tracking. Users can add new words, define their meanings, and 
          categorize them into daily learning goals.
        </p>
      </>
    ),
    features: [
      "Day-based vocabulary organization",
      "Interactive word addition & review",
      "Progress tracking for effective learning",
      "User-friendly UI for kids",
      "Word hiding and deletion options",
    ],
    technologies: "React, Node.js, Json Server, MongoDB Atlas/ Compress, Express, Render, Postman, Git, WebAPI, RESTful API",
    images: [{ src: vocaboost, alt: "VocaBoost App" }],
  },
  {
    title: "Pronunciation Game",
    icon: <BookOpen className="project-icon" />,
    description: (
      <>
        <p>
          Developed an interactive <strong>English pronunciation game</strong> using <strong>React</strong> and the <strong>Web Speech API</strong>. 
          The app helps users improve their pronunciation by comparing spoken words with target vocabulary or sentences in real-time.
        </p>
        <p>
          Includes a <strong>falling-word canvas game</strong>, color-coded sentence feedback, and dynamic <strong>accuracy tracking</strong>. 
          Users get instant visual feedback on their pronunciation with color-coded highlights—green for correct, red for incorrect.
        </p>
      </>
    ),
    features: [
      "Voice recognition powered by Web Speech API",
      "Falling word game with score, level, and lives",
      "Real-time pronunciation feedback with color-coded text",
      "Dynamic sentence mode with sentence-by-sentence validation",
      "Accuracy and mispronounced word tracking",
      "Responsive UI optimized for web",
    ],
    technologies: "React, JavaScript, Web Speech API, HTML5 Canvas, CSS, GitHub Pages",
    images: [
      { src: require("../images/pronunciation_game.png"), alt: "Pronunciation Game" }
    ]    
  },
  {
    title: "Portfolio Website",
    icon: <Globe className="project-icon" />,
    description: (
      <>
        <p>
          Designed and developed a <strong>personal portfolio website</strong> to showcase 
          my projects, experience, and technical skills. The website provides an interactive 
          and visually appealing layout for visitors to explore my work.
        </p>
        <p>
          Built using <strong>React</strong> with a modern, responsive design. Integrated 
          <strong>dynamic project displays</strong>, an <strong>interactive resume</strong>, 
          and a <strong>contact form</strong> for networking opportunities.
        </p>
      </>
    ),
    features: [
      "Responsive, modern design",
      "Dynamic project showcases",
      "Interactive resume and contact form",
      "Optimized for performance and SEO",
      "Deployed on GitHub Pages / Netlify",
    ],
    technologies: "React, JavaScript, Tailwind CSS, Framer Motion, EmailJS, GitHub Pages, Netlify, Figma",
    images: [{ src: portfolioImage, alt: "Portfolio Website" }],
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-content">
        {projects.map((project, index) => {
          // Check if YouTube link exists
          const hasYoutube = project.youtube && project.youtube.trim() !== "";

          // Extract video ID safely
          const videoId = hasYoutube
            ? project.youtube.includes("youtu.be/")
              ? project.youtube.split("youtu.be/")[1]
              : project.youtube.split("v=")[1]
            : null;

          return (
            <div className="project-box" key={index}>
              <div className="project-header">
                {project.icon} <h3>{project.title}</h3>
              </div>
              <div className="project-description">{project.description}</div>
              <ul className="project-features">
                {project.features &&
                  project.features.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>

              {/*  Correct way to display images */}
              {project.images && project.images.length > 0 && (
                <div className="project-images">
                  {project.images.map((img, i) => (
                    <img key={i} src={img.src} alt={img.alt} className="project-image" />
                  ))}
                </div>
              )}

              {/*  Corrected YouTube embed */}
              {hasYoutube && videoId && (
                <div className="youtube-container">
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              <p className="project-tech">
                <strong>Technologies:</strong> {project.technologies}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
