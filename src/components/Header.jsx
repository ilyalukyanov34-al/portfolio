import React from "react";
import "../scss/Header.scss";
import sun from "../assets/sun.svg";

const Header = () => {
  return (
    <div className="header">
      <a href="#" className="header__link-logo">
        LI
      </a>

      <div className="header__links">
        <a href="#about" className="header__link">
          Обо мне
        </a>
        <a href="#skills" className="header__link">
          Навыки
        </a>
        <a href="#projects" className="header__link">
          Проекты
        </a>
        <a href="#contacts" className="header__link">
          Контакты
        </a>
      </div>

      <div className="header__actions">
        <button className="header__lang-btn">EN</button>

        <button className="header__change-background">
          <img
            src={sun}
            alt="Смена темы"
            className="header__change-background__img"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
