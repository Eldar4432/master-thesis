import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./i18n/en.json"; // Путь к файлу с переводами
import ru from "./i18n/ru.json";
import ky from "./i18n/ky.json";

i18n
  .use(initReactI18next) // подключаем React
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      ky: { translation: ky },
    },
    lng: "ru", // Стартовый язык
    fallbackLng: "ru", // Язык по умолчанию
    interpolation: {
      escapeValue: false, // не нужно экранировать
    },
  });

export default i18n;
