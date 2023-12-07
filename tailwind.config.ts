import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tangerine: ["Tangerine", "sans-serif"],
        graffiti: ["Sedgwick Ave Display", "sans-serif"],
        ciolla: ["Fjalla One", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
