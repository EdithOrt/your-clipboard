import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      orange: "#FF8911",
      "orange-light": "#FFF8EE",
      white: "#FFFFFF",
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      black: colors.black,
    },
  },
  plugins: [],
};
export default config;
