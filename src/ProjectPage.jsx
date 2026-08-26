import React, { useState } from "react";
import "./ProjectPage.css";

function ProjectPage({ project }) {
  // If the project has multiple images, use them.
  // Otherwise, fall back to the single image you already have.
  const images = project.images || [project.image];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

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

      {/* Main artwork / Carousel */}
      <div className="project-carousel">

        <button
          className="carousel-button carousel-prev"
          onClick={previousImage}
          aria-label="Previous image"
        >
          ←
        </button>

        <div className="project-hero-image">
          <img
            src={images[currentImage]}
            alt={`${project.title} - page ${currentImage + 1}`}
          />
        </div>

        <button
          className="carousel-button carousel-next"
          onClick={nextImage}
          aria-label="Next image"
        >
          →
        </button>

      </div>

      {/* Page counter */}
      {images.length > 1 && (
        <div className="carousel-counter">
          {currentImage + 1} / {images.length}
        </div>
      )}

      {/* Project information */}
      <section className="project-details">

        <div className="details-label">
          ABOUT THE PROJECT
        </div>

        <div className="details-content">

          <p>
            {project.description ||
              "A visual design project exploring ideas through composition, typography and visual identity."}
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