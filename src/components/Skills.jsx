import React from "react";
import "../scss/Skills.scss";
import zustand from "../assets/zustand.svg";
import dom from "../assets/dom.svg";
import oop from "../assets/oop.svg";
import laptop__phone from "../assets/laptop__phone.svg";
import english from "../assets/english.svg";
import { useTranslation } from "react-i18next";

const skills = [
  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Zustand",
    img: zustand,
  },
  {
    name: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "DOM",
    img: dom,
  },
  {
    name: "OOP",
    img: oop,
  },
  {
    name: "Vite",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "Adaptation",
    img: laptop__phone,
  },
  {
    name: "English",
    img: english,
  },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="skills" id="skills">
      <div className="skills__title">
        <div className="skills__title-circle"></div>
        <h2 className="skills__title-text">{t("mySkills")}</h2>
      </div>
      <div className="skills__list">
        {skills.map((skill) => (
          <div className="skills__card" key={skill.name}>
            <img
              className="skills__card-img"
              src={skill.img}
              alt={skill.name}
            />
            <span className="skills__card-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
