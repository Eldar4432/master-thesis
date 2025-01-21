import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en/en.json";
import ru from "./ru/ru.json";
import ky from "./ky/ky.json";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Подключаем i18next-http-backend
  .use(LanguageDetector) // Подключаем детектор языка
  .use(initReactI18next) // Подключаем react-i18next
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      ky: { translation: ky },
    },
    lng: "en", // Язык по умолчанию
    fallbackLng: "en", // Язык по умолчанию, если перевод не найден
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
