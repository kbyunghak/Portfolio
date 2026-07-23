import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { findProjectBySlug } from "../data/projectData";

const BulletSection = ({ title, items }) => (
  <section className="case-study-section">
    <h2>{title}</h2>
    <ul>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  </section>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = findProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className="case-study-page">
      <Link to="/projects" className="back-link"><ArrowLeft aria-hidden="true" size={18} /> Back to projects</Link>

      <header className="case-study-hero">
        <p className="section-kicker">Featured case study</p>
        <h1>{project.title}</h1>
        <p className="case-study-meta">{project.organization} <span aria-hidden="true">|</span> {project.role}</p>
        <p className="case-study-lead">{project.summary}</p>
        <ul className="technology-list">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </header>

      <div className="case-study-layout">
        <div className="case-study-copy">
          <section className="case-study-section">
            <h2>Business problem</h2>
            <p>{project.problem}</p>
          </section>
          <BulletSection title="My role & responsibilities" items={project.responsibilities} />
          <BulletSection title="Technical challenges" items={project.challenges} />
          <BulletSection title="Key decisions" items={project.decisions} />
          <BulletSection title="Outcomes" items={project.outcomes} />
        </div>

        <aside className="project-snapshot" aria-labelledby="snapshot-title">
          <h2 id="snapshot-title">At a glance</h2>
          <ul>
            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </aside>
      </div>

      <section className="case-study-visuals" aria-labelledby="visuals-title">
        <h2 id="visuals-title">Architecture &amp; Workflow</h2>
        <div className="case-study-image-grid">
          {project.images.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} />
              <figcaption>{image.alt}</figcaption>
              <a
                className="full-size-diagram-link"
                href={image.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`View full-size diagram: ${image.alt}`}
              >
                View full-size diagram
              </a>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
