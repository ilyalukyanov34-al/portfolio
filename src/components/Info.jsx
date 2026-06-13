import React from "react";
// import "./Info.scss";
import "../scss/Info.scss"
const Info = () => {
  return (
    <div className="info" id="info">
      <div className="info__title">
        <div className="info__title-circle"></div>
        <h2 className="info__title-text">Обо мне</h2>
      </div>
      <p className="info__paragraph">
        Меня зовут Лукьянов Илья, я фронтед разработчик.
        Люблю чистый код, внимание к деталям и создание
        классных пользовательских интерфейсов
      </p>
      <div className="info__projects" >
        <a href="#info" className="info__projects-btn">
          ↓ Смотреть проекты ↓
        </a>
      </div>
    </div>
  );
};

export default Info;
