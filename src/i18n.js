import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    it: {
      translation: {
        schopenhauerContent: "Welcome to React and react-i18next",
      },
    },
    en: {
      translation: {
        schopenhauerContent: "Bienvenue à React et react-i18next",
      },
    },
  },
});
