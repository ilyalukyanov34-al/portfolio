import React from "react";
import "../scss/Projects.scss";
import clothingStore from "../assets/clothingStore.jpg";
import fengShui from "../assets/fengShui.jpg";
import brutalizm from "../assets/brutalizm.jpg";

const projects = [
  {
    id: 1,
    title: "Clothing store",
    stack: "HTML / CSS",
    image: clothingStore,
    github: "https://github.com/ilyalukyanov34-al/git-lesson-clothing-store-",
    live: "https://ilyalukyanov34-al.github.io/git-lesson-clothing-store-/",
  },
  {
    id: 2,
    title: "Feng Shui",
    stack: "HTML / CSS",
    image: fengShui,
    github: "https://github.com/ilyalukyanov34-al/ceramics",
    live: "https://ilyalukyanov34-al.github.io/ceramics/",
  },
  {
    id: 3,
    title: "Brutalizm",
    stack: "HTML / CSS",
    image: brutalizm,
    github: "https://github.com/ilyalukyanov34-al/myBrytalizm",
    live: "https://ilyalukyanov34-al.github.io/myBrytalizm/",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__header">
        <div className="projects__title">
          <div className="projects__title-circle"></div>
          <h2 className="projects__title-text">Избранные проекты</h2>
        </div>
        <a href="#" className="projects__see-all">
          Смотреть все →
        </a>
      </div>

      <div className="projects__list">
        {projects.map((project) => (
          <div className="projects__card" key={project.id}>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <div className="projects__card-preview">
                <img src={project.image} alt={project.title} />
              </div>
            </a>
            <h3 className="projects__card-title">{project.title}</h3>
            <p className="projects__card-stack">{project.stack}</p>
            <div className="projects__card-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__card-github"
              >
                GitHub →
              </a>
              
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__card-live"
              >
                Live →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
