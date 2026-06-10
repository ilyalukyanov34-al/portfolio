import React from "react";
import "./App.scss";
import sun from "./assets/sun.svg";
import "./components/Header.scss";

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <a href="#" className="header__link-li">
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

          {/* 📦 Новый контейнер-коробка для пары управления */}
          <div className="header__actions">
            <button className="header__lang-btn">EN</button>

            <button className="header__change-backgraund">
              <img
                src={sun}
                alt="Смена темы"
                className="header__change-backgraund_img"
              />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
