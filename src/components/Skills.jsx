// import html from "../assets/html.svg";
// import css from "../assets/css.svg";
// import javascript from "../assets/javascript.svg";
// import typescript from "../assets/typescript.svg";
// import react from "../assets/react.svg";
// import zustand from "../assets/zustand.svg";
// import git from "../assets/git.svg";
// import dom from "../assets/dom.svg";
// import oop from "../assets/oop.svg";
// import vite from "../assets/vite.svg";
// import laptop_phone from "../assets/laptop_phone.svg";
// import english from "../assets/english.svg";

// const Skills = () => {
//   return (
//     <section className="skills" id="skills">
//       <div className="skills__title">
//         <div className="skills__title-circle"></div>
//         <h2 className="skills__title-text">Навыки</h2>
//       </div>
//       <div className="skills__list">
//         <div className="skills__html">
//           <img className="skills__html-img" src={html} alt="" />
//         </div>
//         <div className="skills__css">
//           <img className="skills__css-img" src={css} alt="" />
//         </div>
//         <div className="skills__javaScript">
//           <img className="skills__javaScript-img" src={javascript} alt="" />
//         </div>
//         <div className="skills__typeScript">
//           <img className="skills__typeScript-img" src={typescript} alt="" />
//         </div>
//         <div className="skills__react">
//           <img className="skills__react-img" src={react} alt="" />
//         </div>
//         <div className="skills__zustand">
//           <img className="skills__zustand-img" src={zustand} alt="" />
//         </div>
//         <div className="skills__git">
//           <img className="skills__git-img" src={git} alt="" />
//         </div>
//         <div className="skills__dom">
//           <img className="skills__dom-img" src={dom} alt="" />
//         </div>
//         <div className="skills__oop">
//           <img className="skills__oop-img" src={oop} alt="" />
//         </div>
//         <div className="skills__vite">
//           <img className="skills__vite-img" src={vite} alt="" />
//         </div>
//         <div className="skills__laptop_phone">
//           <img className="skills__laptop_phone-img" src={laptop_phone} alt="" />
//         </div>
//         <div className="skills__english">
//           <img className="skills__english-img" src={english} alt="" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import "../scss/Skills.scss";
import zustand from "../assets/zustand.svg";
import dom from "../assets/dom.svg";
import oop from "../assets/oop.svg";
import laptop__phone from "../assets/laptop__phone.svg";
import english from "../assets/english.svg";

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
    name: "ООП",
    img: oop,
  },
  {
    name: "Vite",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "Адаптация",
    img: laptop__phone,
  },
  {
    name: "English",
    img: english,
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__title">
        <div className="skills__title-circle"></div>
        <h2 className="skills__title-text">Навыки</h2>
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
