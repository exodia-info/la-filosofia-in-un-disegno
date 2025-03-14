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
        loginTitle: "Immergiti nel mondo della filosofia",
        loginSubtitle:
          "Bezos, Zuckerberg e Musk gia hanno venduto i tuoi dati in Cina, non aver paura di un sito di arte e filosofia",
        loginAction: "Ancora senza account?",
        loginLink: "Registrati",
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
        loginTitle: "Immerse yourself in the philosophy world",
        loginSubtitle:
          "Bezos, Zuckerberg and Musk have already sold your data to China. Do not be afraid of an art and philosophy website",
        loginAction: "No account yet?",
        loginLink: "Register now",
      },
    },
  },
});

export default i18n;
