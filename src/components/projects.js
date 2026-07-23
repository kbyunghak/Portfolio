import React from "react";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects, otherProjects } from "../data/projectData";

const Projects = () => (
  <main className="projects-page redesigned-projects">
    <header className="projects-intro">
      <p className="section-kicker">Selected work</p>
      <h1>Production systems and enterprise integrations</h1>
      <p>
        Case studies focused on business problems, technical decisions, production
        reliability, and measurable operational outcomes.
      </p>
    </header>

    <section aria-labelledby="featured-projects-title">
      <div className="section-heading">
        <h2 id="featured-projects-title">Featured case studies</h2>
      </div>
      <div className="featured-project-grid">
        {featuredProjects.map((project, index) => (
          <article className="featured-project-card" key={project.slug}>
            <div className="project-number">0{index + 1}</div>
            <BriefcaseBusiness aria-hidden="true" size={22} />
            <p className="project-organization">{project.organization}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <ul className="technology-list" aria-label={`${project.title} technologies`}>
              {project.technologies.slice(0, 5).map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <Link
              to={`/projects/${project.slug}`}
              className="case-study-link"
              aria-label={`Read ${project.title} case study`}
            >
              Read case study <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </article>
        ))}
      </div>
    </section>

    <section className="other-projects-section" aria-labelledby="other-projects-title">
      <div className="section-heading">
        <p className="section-kicker">Additional work</p>
        <h2 id="other-projects-title">Other projects</h2>
      </div>
      <div className="other-project-grid">
        {otherProjects.map((project) => (
          <article className="other-project-card" key={project.title}>
            <img src={project.image} alt="" />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.technologies}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default Projects;
