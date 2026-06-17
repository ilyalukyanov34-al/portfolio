import { useState, useEffect } from "react";
import "../scss/Header.scss";
import sun from "../assets/sun.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Закрывать при скролле
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header">
      <a href="#" className="header__link-logo">
        LI
      </a>

      <div className={`header__links ${isOpen ? "header__links--open" : ""}`}>
        <a
          href="#about"
          className="header__link"
          onClick={() => setIsOpen(false)}
        >
          Обо мне
        </a>
        <a
          href="#skills"
          className="header__link"
          onClick={() => setIsOpen(false)}
        >
          Навыки
        </a>
        <a
          href="#projects"
          className="header__link"
          onClick={() => setIsOpen(false)}
        >
          Проекты
        </a>
        <a
          href="#contacts"
          className="header__link"
          onClick={() => setIsOpen(false)}
        >
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
        <button className="header__burger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
