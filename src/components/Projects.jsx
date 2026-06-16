

// 2. от ИИ

import React, { useState } from "react";
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
  // Добавляем вторую тройку проектов для демонстрации
  {
    id: 4,
    title: "Project 4",
    stack: "React / SCSS",
    image: clothingStore,
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Project 5",
    stack: "JavaScript",
    image: fengShui,
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "Project 6",
    stack: "Next.js",
    image: brutalizm,
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // 1. Вычисляем индекс ПОСЛЕДНЕГО проекта для текущей страницы.
  // Формула: текущая страница умноженная на количество элементов на странице.
  const indexOfLastProjects = currentPage * itemsPerPage;

  // 2. Вычисляем индекс ПЕРВОГО проекта для текущей страницы.
  // Формула: индекс последнего проекта минус количество элементов на странице.
  const indexOfFirstProject = indexOfLastProjects - itemsPerPage;

  // 3. Обрезаем наш большой массив проектов, чтобы получить только 3 нужных.
  // Синтаксис: имяБольшогоМассива.slice(индексНачала, индексКонца)
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProjects,
  );

  // 4. Считаем общее количество страниц (пригодится для блокировки кнопок в будущем).
  // Делим длину массива на количество элементов на странице и округляем в большую сторону через Math.ceil()
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  return (
    <section className="projects" id="projects">

      <div className="projects__header">
        {/* Статическая левая часть: круг и заголовок */}
        <div className="projects__title">
          <div className="projects__title-circle"></div>
          <h2 className="projects__title-text">Проекты</h2>
        </div>

        {/* Динамическая правая часть с кнопками */}
        <div className="projects__controls">
          {/* 1. Если страница первая, рендерим одну кнопку */}
          {currentPage === 1 ? (
            <button
              className="projects__see-all"
              onClick={() => setCurrentPage(2)} // Меняем страницу на 2
            >
              Смотреть дальше →
            </button>
          ) : (
            /* 2. Иначе (если страница вторая), рендерим группу из двух кнопок */
            <div className="projects__nav-group">
              <button
                className="projects__nav-btn"
                onClick={() => setCurrentPage(currentPage - 1)} // Вычитаем 1, чтобы вернуться назад
              >
                ← Назад
              </button>
              <button
                className="projects__nav-btn"
                disabled={currentPage === totalPages} // Кнопка станет неактивной, если это конец
                onClick={() => setCurrentPage(currentPage + 1)} // Прибавляем 1 для движения вперед
              >
                Вперед →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 1. Создаем обертку-сетку для карточек */}
      <div className="projects__list" key={currentPage}>
        {/* 2. Берём наш обрезанный массив currentProjects и превращаем каждый проект в разметку */}
        {currentProjects.map((project) => (
          /* 3. Главный тег карточки ОБЯЗАТЕЛЬНО должен иметь уникальный key */
          <div className="projects__card" key={project.id}>
            {/* Ссылка-картинка на живой сайт */}
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <div className="projects__card-preview">
                <img src={project.image} alt={project.title} />
              </div>
            </a>

            {/* Название проекта */}
            <h3 className="projects__card-title">{project.title}</h3>

            {/* Технологии (HTML / CSS и т.д.) */}
            <p className="projects__card-stack">{project.stack}</p>

            {/* Блок с кнопками-ссылками */}
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
        ))}{" "}
        {/* Конец карты массива */}
      </div>
    </section>
  );
};

export default Projects;
