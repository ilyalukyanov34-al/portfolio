import { useState, useEffect } from "react";
import "../scss/Header.scss";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import { useTranslation } from "react-i18next";

const Header = ({ toggleTheme, theme }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("ru");

  const changeLangHandler = () => {
    const currentLang = language == "ru" ? "en" : "ru";
    setLanguage(currentLang);
    i18n.changeLanguage(currentLang);
  };

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
          href="#info"
          className="header__link"
          onClick={() => setIsOpen(false)}
        >
          {t("about")}
        </a>
        <a
          href="#skills"
          className="header__link"
          onClick={() => setIsOpen(false)}
        >
          {t("skills")}
        </a>
        <a
          href="#projects"
          className="header__link"
          onClick={() => setIsOpen(false)}
        >
          {t("projects")}
        </a>
        <a
          href="#contact"
          className="header__link"
          onClick={() => setIsOpen(false)}
        >
          {t("contacts")}
        </a>
      </div>

      <div className="header__actions">
        <button
          className="header__lang-btn"
          onClick={() => changeLangHandler()}
        >
          {language === "ru" ? "EN" : "RU"}{" "}
        </button>
        <button className="header__change-background" onClick={toggleTheme}>
          <img
            src={theme === "dark" ? sun : moon}
            alt="Change theme"
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
