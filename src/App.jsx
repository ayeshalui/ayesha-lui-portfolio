import { useState } from "react";
import "./App.css";
import ProjectPage from "./ProjectPage";
import anipalImage from "./assets/anipal neat.jpg";
import anipalImage2 from "./assets/anipal logo 3D 1.png";
import sodaCans from "./assets/Soda cans double splash.jpg"
import perfumeProducts from "./assets/Perfume with ad complete.jpg";
import gymSports from "./assets/Sport Cover.jpg";
import threeDProducts from "./assets/3D Finale.jpg";
import geoshapes from "./assets/Geo Shapes Done.jpg";
import phoneButtons from "./assets/Phone buttons.jpg";
import brandIdentity1 from "./assets/All icons-01.jpg";
import brandIdentity2 from "./assets/All icons-02.jpg";
import brandIdentity3 from "./assets/Placement Image.jpg";
import dodoLogo1 from "./assets/Dodo App Logo 1.png";
import dodoLogo2 from "./assets/Dodo Slogan.png";
import dodoLogo3 from "./assets/Dodo.png";
import shoesGif from "./assets/Shoes-Gif.gif";
import consoleAd from "./assets/MacBook Pro 16_ - 1.png";
import editedVersions1 from "./assets/Whale collage.jpg";
import editedVersions2 from "./assets/Comparison 11.jpg";
import editedVersions3 from "./assets/Comparison 1.jpg";
import editedVersions4 from "./assets/Comparison 2.jpg";
import editedVersions5 from "./assets/Comparison 3.jpg";
import editedVersions6 from "./assets/Comparison 4.jpg";
import editedVersions7 from "./assets/Comparison 5.jpg";
import editedVersions8 from "./assets/Comparison 9.jpg";
import editedVersions9 from "./assets/Comparison 10.jpg";
import editedVersions10 from "./assets/Comparison 12.jpg";
import editedVersions11 from "./assets/Comparison d&b.jpg";
import editedVersions12 from "./assets/Racoon Manipulated.jpg";
import editedVersions13 from "./assets/sky comparisons.jpg";
import editedVersions14 from "./assets/Hair Colour Comparisons 8.jpg";
import patterns1 from "./assets/Warp Text Final.jpg";
import rocketLogo01 from "./assets/Rocket logo 01.jpg";
import rocketLogo02 from "./assets/Rocket logo 02.jpg";
import rocketLogo03 from "./assets/Rocket logo 03.jpg";
import rocketLogo04 from "./assets/Rocket logo 04.jpg";
import rocketLogo05 from "./assets/Rocket logo 05.jpg";
import rocketLogo06 from "./assets/Rocket logo 06.jpg";
import magazine01 from "./assets/Cookbook Facing.jpg";
import magazine02 from "./assets/Cookbook Facing2.jpg";
import magazine03 from "./assets/Cookbook Facing3.jpg";
import magazine04 from "./assets/Cookbook Facing4.jpg";
import magazine05 from "./assets/Cookbook Facing5.jpg";
import magazine06 from "./assets/Cookbook Facing6.jpg";
import magazine07 from "./assets/Cookbook Facing7.jpg";
import pipes from "./assets/Pipes.png";
import weatherFace from "./assets/Weather App Face UI Design.png";
import nikeShoe from "./assets/Nike Shoe Ad Done.jpg";
import raitecheMouse from "./assets/Mouse RaiTeche.png";
import nikeFootball from "./assets/Nike Football.png";

import { renderToPipeableStream } from "react-dom/server";

// =====================================================
// YOUR PORTFOLIO PROJECTS
// Replace these images, titles and descriptions later.
// =====================================================

const projects = [
  {
    id: 1,
    title: "Edits / 05- RaiTeche Mouse",
    category: "Website UI Design",
    year: "2026",
    image: nikeShoe,
    description: "A social media post design featuring a Nike shoe advertisement with a clean and modern aesthetic.",
    software: "Figma",
  },
  {
    id: 2,
    title: "Edits / 03- Weather App Face UI Design",
    category: "Website UI Design",
    year: "2026",
    image: weatherFace,
    description: "A social media post design featuring a weather app face UI design with a clean and modern aesthetic.",
    software: "Figma",
  },
  {
    id: 3,
    title: "Perfume Product Advertisement",
    category: "Packaging Design",
    year: "2026",
    image: perfumeProducts,
    description:
    "A 3D product advertisement for a perfume brand, showcasing the product in a visually appealing and elegant way that highlights its unique features and design.",
    software: "Adobe Dimension, Adobe Illustrator & Adobe Photoshop ",
  },
  {
    id: 4,
    title: "Edits / 02- Pipes Intersection",
    category: "Illustration",
    year: "2026",
    image: pipes,
    description: "An abstract illustration project exploring the use of symmetry, patterns and color to create visually engaging and harmonious compositions.",
    software: "Figma",
  },
  {
    id: 5,
    title: "Mono",
    category: "Illustration",
    year: "2026",
    image: threeDProducts,
    description:"A 3D illustration project exploring the use of color, texture and composition to create visually striking and memorable images that convey a sense of depth and dimensionality.",
    software: "Adobe Dimension, Adobe Illustrator & Adobe Photoshop",
  },
  {
    id: 6,
    title: "Digital Bloom",
    category: "Illustration",
    year: "2026",
    image: geoshapes,
    description: "A geometric illustration project exploring the use of shapes, colors, and patterns to create visually engaging and harmonious compositions.",
    software: "Adobe Illustrator & Adobe Photoshop",
  },
  {
    id: 7,
    title: "Social / 01- Gym Sports",
    category: "Social Media",
    year: "2026",
    image: gymSports,
    description: "A social media post design for a gym and sports brand, featuring bold typography and dynamic imagery that conveys energy and motivation.",
    software: "Adobe Illustrator & Adobe Photoshop",
  },
  {
    id: 8,
    title: "Social / 07- Console Advertisement",
    category: "Website UI Design",
    year: "2026",
    image: consoleAd,
    description: "A console advertisement design project exploring the use of typography, imagery and layout to create visually striking and memorable advertisements that convey the essence of the product's features.",
    software: "Figma",
  },
  {
    id: 9,
    title: "Social / 08- Nike Football",
    category: "Website UI Design",
    year: "2026",
    image: nikeFootball,
    description: "A social media post design for a Nike football advertisement, featuring bold typography and dynamic imagery that conveys energy and motivation.",
    software: "Figma",
  },
  {
    id: 10,
    title: "Rocket Logo",
    category: "Brand Identity/Logo Design",
    year: "2026",
    image: rocketLogo05,
    images : [rocketLogo01, rocketLogo02, rocketLogo03, rocketLogo04, rocketLogo05, rocketLogo06],
    category: "Brand Identity/Logo Design",
    year: "2026",
    description:
    "A visual identity project exploring the relationship between form and function in design, with a focus on creating a cohesive and versatile brand identity that reflects the values and personality of the brand.",
    software: "Adobe Illustrator",
  },
  {
    id: 11,
    title: "Social / 02- Apple Buttons & Icons neumorphic designs",
    category: "Brand Identity/Logo Design",
    year: "2026",
    image: phoneButtons,
    description: "A social media post design featuring phone-style buttons & iconswith a clean and modern aesthetic.",
    software: "Adobe Illustrator & Figma",
  },
  {
    id: 12,
    title: "Social / 05- Shoes Gif",
    category: "Advertisement",
    year: "2026",
    image: shoesGif,
    description: "A social media post design featuring a GIF of shoes with a clean and modern aesthetic.",
    software: "Adobe Illustrator & Adobe Photoshop",
  },
  {
    id: 13,
    title: "Social / 06- Warp Text",
    category: "Typography",
    year: "2026",
    image: patterns1,
    description: "A typography project exploring the use of warp text to create visually engaging and dynamic compositions.",
    software: "Adobe Illustrator & Adobe Photoshop",
  },
  {
    id: 14,
    title: "Anime App Logo",
    category: "Brand Identity/Logo Design",
    year: "2026",
    image: anipalImage2,
    images: [anipalImage, anipalImage2],
    description:
    "A simple visual identity developed around the Anipal brand name, with a focus on creating a clean and distinctive logo that feels memorable and versatile.",
    software: "Adobe Illustrator & Adobe Photoshop",
  },
  {
    id: 15,
    title: "Thumbnail for Seltzers Taste Test",
    category: "Social Media",
    year: "2026",
    image: sodaCans,
    description:
    "A thumbnail design for a YouTube video featuring a taste test of various seltzer brands, with a focus on creating a visually engaging and attention-grabbing image that encourages viewers to click and watch the video.",
    software: "Adobe Illustrator & Adobe Photoshop",
  },
  {
    id: 16,
    title: "My Magazine",
    image: magazine01,
    images: [
      magazine01,
      magazine02,
      magazine03,
      magazine04,
      magazine05,
      magazine06,
      magazine07,
    ],
    category: "Editorial Design",
    year: "2026",
    description:
    "A 12-page editorial magazine exploring visual storytelling through typography, imagery and layout.",
    software: "Adobe InDesign & Adobe Photoshop",
  },
  {
    id: 17,
    title: "Social / 04- Dodo App Logo",
    category: "Brand Identity/Logo Design",
    year: "2026",
    image: dodoLogo1,
    images : [dodoLogo1, dodoLogo2, dodoLogo3],
    description: "A visual identity project exploring the relationship between form and function in design, with a focus on creating a cohesive and versatile brand identity that reflects the values and personality of the brand.",
    software: "Adobe Illustrator & Adobe Photoshop",
  },
  {
    id: 18,
    title: "Social / 03- Brand Identity",
    category: "Brand Identity/Logo Design",
    year: "2026",
    image: brandIdentity3,
    images : [brandIdentity1, brandIdentity2, brandIdentity3],
    description: "A visual identity project exploring the relationship between form and function in design, with a focus on creating a cohesive and versatile brand identity that reflects the values and personality of the brand.",
    software: "Adobe Illustrator & Adobe Photoshop",
  },
  {
    id: 19,
    title: "Edits / 01- Edited Versions",
    category: "Social Media",
    year: "2026",
    image: editedVersions1,
    images: [editedVersions1, editedVersions2, editedVersions3, editedVersions4, editedVersions5, editedVersions6, editedVersions7, editedVersions8, editedVersions9, editedVersions10, editedVersions11, editedVersions12, editedVersions13, editedVersions14],
    description: "Edited versions of prior originals.",
    software: "Adobe Photoshop",
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
  "Advertisement",
  "Website UI Design",
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
