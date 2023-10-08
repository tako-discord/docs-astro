const colors = require("tailwindcss/colors");
const starlightPlugin = require("@astrojs/starlight-tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent: {
          50: "EAF5F6;",
          100: "#BDE0E2",
          200: "#9DD1D5",
          300: "#70BCC1",
          400: "#54AFB5",
          500: "#299BA3",
          600: "#258D94",
          700: "#1D6E74",
          800: "#0D3A3D",
          900: "#072527",
          950: "#041819",
        },
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray: {
          50: "EAEBEC;",
          100: "#DCDEE0",
          200: "#C8CDD2",
          300: "#A5A8AD",
          400: "#3A4049",
          500: "#303640",
          600: "#2C313A",
          700: "#22262D",
          800: "#1A1E23",
          900: "#14171B",
        },
      },
      fontFamily: {
        sans: ["Lato", "Inter"],
      },
    },
  },
  plugins: [starlightPlugin()],
};
