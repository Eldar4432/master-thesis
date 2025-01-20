import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ru from "./ru.json";
import ky from "./ky.json";

i18n
  .use(initReactI18next) // Используем react-i18next
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      ky: { translation: ky },
    },
    lng: "ky", // Язык по умолчанию
    fallbackLng: "ky", // Резервный язык, если перевод не найден
    interpolation: {
      escapeValue: false, // Не нужно экранировать значения
    },
  });

export default i18n;
