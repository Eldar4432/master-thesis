import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Для автоматического определения языка

// Местные переводы (можно также загружать из внешних файлов)
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website!",
      language: "Language",
    },
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать на наш сайт!",
      language: "Язык",
    },
  },
};

i18n
  .use(LanguageDetector) // Автоматическое определение языка
  .use(initReactI18next) // Инициализация с React
  .init({
    resources,
    lng: "en", // Язык по умолчанию
    fallbackLng: "en", // Резервный язык
    interpolation: {
      escapeValue: false, // Отключаем экранирование, так как React сам это делает
    },
  });

export default i18n;
