import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "it",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    it: {
      translation: {
        cerca: "Cerca una parola chiave",
        toast:
          "il componente non è ancora stato sviluppato... diciamo che per adesso sta li per bellezza",
        indietro: "Continua ad esplorare",
        contro: `CONTRO L'IDEALISMO HEGELIANO`,
        tradizione: "LA TRADIZIONE SUCCESSIVA A HEGEL",
        progresso:
          "INDUSTRIALIZZAZIONE E PROGRESSO: POSITIVISMO E SPIRITUALISMO",
        crisi: "LA CRISI DELLE CERTEZZE FILOSOFICHE",
        codice: "Codice di Mauro Bianchin",
        disegni: "Disegni di Alessandro Beffasti",
        telefono: "Telefono",
      },
    },
    en: {
      translation: {
        cerca: "Search for a keyword",
        toast:
          "the component has not been developed yet... let's say it is there bc is cool",
        indietro: "Keep exploring",
        contro: `AGAINST HEGELIAN IDEALISM`,
        tradizione: "THE TRADITION AFTER HEGEL",
        progresso:
          "INDUSTRIALIZATION AND PROGRESS: POSITIVISM AND SPIRITUALISM",
        crisi: "THE CRISIS OF PHILOSOPHICAL CERTAINTIES",
        codice: "Code by Mauro Bianchin",
        disegni: "Drawings by Alessandro Beffasti",
        telefono: "Phone",
      },
    },
  },
});
