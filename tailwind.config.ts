import { type Config } from "tailwindcss";

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
  prefix: "",

theme: {
  extend: {},
},
darkMode: "class",

  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography"), require("@nextui-org/react")],
} satisfies Config

export default config