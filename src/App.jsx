import { useState } from "react";
import "./App.css";
import ProjectPage from "./ProjectPage";
import anipalImage from "./assets/anipal neat.jpg";
import sodaCans from "./assets/Soda cans double splash.jpg"

// =====================================================
// YOUR PORTFOLIO PROJECTS
// Replace these images, titles and descriptions later.
// =====================================================

const projects = [
  {
    id: 1,
    title: "Anime App Logo",
    category: "Brand Identity/Logo Design",
    year: "2026",
    image: anipalImage,
    description:
    "A simple visual identity developed around the Anipal brand name, with a focus on creating a clean and distinctive logo that feels memorable and versatile.",
    software: "Adobe Illustrator & Adobe Photoshop",
  },
  {
    id: 2,
    title: "Thumbnail for Seltzers Taste Test",
    category: "Social Media",
    year: "2026",
    image: sodaCans,
    description:
    "A thumbnail design for a YouTube video featuring a taste test of various seltzer brands, with a focus on creating a visually engaging and attention-grabbing image that encourages viewers to click and watch the video.",
    software: "Adobe Illustrator & Adobe Photoshop",
  },
  {
    id: 3,
    title: "Echoes",
    category: "Album Cover",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Visual Noise",
    category: "Typography",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "Form / Function",
    category: "Editorial Design",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "Mono",
    category: "Packaging Design",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 7,
    title: "Digital Bloom",
    category: "Illustration",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 8,
    title: "Social / 01",
    category: "Social Media",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 9,
    title: "Social / 02",
    category: "Social Media",
    year: "2028",
    image:
      "/src/assets/anipal neat.jpg",
  },
];

// Portfolio categories
const categories = [
  "All",
  "Brand Identity/Logo Design",
  "Poster Design",
  "Album Cover",
  "Typography",
  "Packaging Design",
  "Editorial Design",
  "Illustration",
  "Social Media",
];

function App() {

  const projectPage = new URLSearchParams(window.location.search).get("project");

    if (projectPage) {
    const selectedProject = projects.find(
    (project) => String(project.id) === projectPage
    );

    if (selectedProject) {
    return <ProjectPage project={selectedProject} />;
  }
}


  const [activeCategory, setActiveCategory] = useState("All");

  // Only show projects belonging to the selected category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="app">
      {/* ============================================
          NAVIGATION
      ============================================ */}

      <header className="navbar">
        <a href="#top" className="logo">
          al<span>.</span>
        </a>

        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-status">
          <span className="status-dot"></span>
          Available for work
        </div>
      </header>

      <main id="top">

        {/* ============================================
            HERO
        ============================================ */}

        <section className="hero">

          <div className="hero-background">
            <div className="circle circle-one"></div>
            <div className="circle circle-two"></div>
            <div className="grid-lines"></div>
          </div>

          <div className="hero-top">
            <p className="eyebrow">Independent creative / 2026</p>

            <p className="hero-location">
              Based in India
              <br />
              Working worldwide
            </p>
          </div>

          <div className="hero-content">

            <h1>
              ayesha
              <br />
              <span
                className="brandNameSpacing"
                style={{ position: "relative", left: "30px" }}
              >lui
              </span>
              <i style={{ position: "relative", left: "30px" }}>.</i>
            </h1>

            <div className="hero-bottom">

              <p className="hero-description">
                Graphic designer focused on visual identities, typography,
                posters and digital experiences.
              </p>

              <a href="#work" className="hero-button">
                <span>View my work</span>
                <span className="arrow">↓</span>
              </a>

            </div>

          </div>

          <div className="hero-number">01 / 05</div>

        </section>


        {/* ============================================
            INTRODUCTION
        ============================================ */}

        <section className="intro">

          <p className="section-label">/ 01 — Introduction</p>

          <h2>
            I create visual
            <br />
            <em>identities</em> that
            <br />
            people remember.
          </h2>

          <div className="intro-description">
            <p>
              I'm a graphic designer exploring the space between
              typography, imagery and culture. I like turning ideas
              into visual systems that feel simple, distinctive and
              intentional.
            </p>
          </div>

        </section>


        {/* ============================================
            WORK
        ============================================ */}

        <section className="work-section" id="work">

          <div className="section-heading">

            <div>
              <p className="section-label">/ 02 — Selected work</p>

              <h2>Selected<br />works<span>.</span></h2>
            </div>

            <p className="work-count">
              {filteredProjects.length.toString().padStart(2, "0")} projects
            </p>

          </div>


          {/* Category filter */}

          <div className="filters">

            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category ? "filter active" : "filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}

          </div>


          {/* Portfolio grid */}

          <div className="projects-grid">

            {filteredProjects.map((project, index) => (

              <article
                className={`project-card ${
                  index % 3 === 1 ? "project-large" : ""
                }`}
                key={project.id}
              >

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <a
                     className="project-overlay"
                     href={`/?project=${project.id}`}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                  <span>View project</span>
                  <span>↗</span>
                  </a>

                </div>

                <div className="project-info">

                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>

                  <span>{project.year}</span>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ============================================
            ABOUT
        ============================================ */}

        <section className="about" id="about">

          <div className="about-title">

            <p className="section-label">/ 03 — About me</p>

            <h2>
              Designer.
              <br />
              <em>Observer.</em>
              <br />
              Problem solver.
            </h2>

          </div>


          <div className="about-content">

            <p className="about-large">
              I believe good design doesn't need to shout. It needs to
              communicate clearly, create curiosity and leave a lasting
              impression.
            </p>

            <p>
              I'm currently building my experience as a graphic designer
              through personal projects, collaborations and creative
              experiments.
            </p>

            <p>
              My interests range from brand identities and typography
              to posters, editorial layouts and digital design.
            </p>


            <div className="skills">

              <div className="skill-column">

                <h3>Skills</h3>

                <ul>
                  <li>Brand Identity</li>
                  <li>Typography</li>
                  <li>Poster Design</li>
                  <li>Art Direction</li>
                  <li>Social Media Design</li>
                </ul>

              </div>


              <div className="skill-column">

                <h3>Tools</h3>

                <ul>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Figma</li>
                  <li>Adobe InDesign</li>
                  <li>After Effects</li>
                </ul>

              </div>

            </div>

          </div>

        </section>


        {/* ============================================
            CONTACT
        ============================================ */}

        <section className="contact" id="contact">

          <div className="contact-top">

            <p>/ 04 — Contact  <span className="section-label">P.No.+91-7972878871 Email: ayeshalui696@gmail.com</span></p>

            <span className="bigger-lettering">Have a project in mind?</span>

          </div>

          <h2>
            Let's make
            <br />
            something <em>great.</em>
          </h2>

          <a
             href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=ayeshalui696@gmail.com"
             target="_blank"
             rel="noopener noreferrer"
             className="email-link"
          >
            ayeshalui696@gmail.com
            <span>↗</span>
          </a>


          <div className="social-links">

            <a href="#" target="_blank" rel="noreferrer">
              Instagram ↗
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              Behance ↗
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>

          </div>

        </section>

      </main>


      {/* ============================================
          FOOTER
      ============================================ */}

      <footer>

        <div className="footer-name">
          ayeshalui<span>.</span>
        </div>

        <p>© 2026 All rights reserved.</p>

        <a href="#top">Back to top ↑</a>

      </footer>

    </div>
  );
}

export default App;
