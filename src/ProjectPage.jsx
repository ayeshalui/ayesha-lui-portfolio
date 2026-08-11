import React from "react";
import "./ProjectPage.css";

function ProjectPage({ project }) {
  return (
    <div className="project-page">

      {/* Back to portfolio */}
      <a href="/" className="back-link">
        <span>←</span> Back to selected works
      </a>

      {/* Project heading */}
      <header className="project-header">

        <div>
          <p className="project-number">
            {String(project.id).padStart(2, "0")} / SELECTED WORK
          </p>

          <h1>{project.title}</h1>
        </div>

        <div className="project-meta">
          <p>{project.category}</p>
          <p>{project.year}</p>
        </div>

      </header>

      {/* Main artwork */}
      <div className="project-hero-image">
        <img
          src={project.image}
          alt={project.title}
        />
      </div>

      {/* Project information */}
      <section className="project-details">

        <div className="details-label">
          ABOUT THE PROJECT
        </div>

        <div className="details-content">

          <p>
            {project.description || "A visual design project exploring ideas through composition, typography and visual identity."}
          </p>

          <div className="software">
            <span>SOFTWARE</span>

            <p>
              {project.software || "Adobe Illustrator & Adobe Photoshop"}
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="project-footer">
        <p>AYESHA LUI</p>

        <a href="/">
          Back to portfolio ↗
        </a>
      </footer>

    </div>
  );
}

export default ProjectPage;