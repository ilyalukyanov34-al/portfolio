import React from "react";
import { useTranslation } from "react-i18next";
import "../scss/Info.scss";

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="info" id="info">
      <div className="info__title">
        <div className="info__title-circle"></div>
        <h2 className="info__title-text">{t("about__me")}</h2>
      </div>
      <p className="info__paragraph">{t("about__paragraph")}</p>
      <div className="info__projects">
        <a href="#info" className="info__projects-btn">
          {t("lookProjects")}
        </a>
      </div>
    </div>
  );
};

export default Info;
