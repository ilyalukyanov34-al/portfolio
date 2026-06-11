import React from "react";
import "../scss/About.scss";
import google from "../assets/google.svg";
import github from "../assets/github.svg";
import insta from "../assets/insta.svg";
import my from "../assets/my.png";

const About = () => {
  return (
    <div className="about">
      <div className="about__left">
        <h1 className="about__left-job">FRONTEND DEVELOPER</h1>
        <h2 className="about__left-lastName">LUKYANOV</h2>
        <h2 className="about__left-name">ILYA</h2>
        <p className="about__left-work">
          Создаю быстрые, адаптивные <br />и удобные web-приложения.
        </p>
        <div className="about__left-actions">
          <a href="#about" className="about__left-btn">
            ↓ Связаться со мной ↓
          </a>
          <div className="about__left-contacts">
            <a
              className="about__left-contacts-google"
              href="mailto:ilyalukyanov34@gmail.com"
            >
              <img src={google} alt="" />
            </a>

            <a
              className="about__left-contacts-git"
              href="https://github.com/ilyalukyanov34-al"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" />
            </a>

            <a
              className="about__left-contacts-insta"
              href="https://www.instagram.com/developer__lukyanov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="about__right">
        <img className="about__right-photo" src={my} alt="Lukyanov Ilya" />
      </div>
    </div>
  );
};

export default About;
