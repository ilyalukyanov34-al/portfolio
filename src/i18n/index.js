import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import trasnlationEn from "../locales/en/translation.json";
import translationRU from "../locales/ru/translation.json";

const resources = {
  ru: {
    translation: translationRU,
  },
  en: {
    translation: trasnlationEn,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ru",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
