import {heroui} from "@heroui/theme"

const fontSize = require('./config/typography/fontSize');
const fontFamily = require('./config/typography/fontFamily.ts');
const colors = require('./config/abstracts/colors.ts');
const letterSpacing = require('./config/typography/letterSpacing');
const screens = require('./config/abstracts/screens.ts');
const boxShadow = require('./config/abstracts/shadows.ts');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      screens,
      fontFamily,
      fontSize,
      letterSpacing,
      boxShadow,
    },
  },
  darkMode: "class",
  plugins: [heroui({
    prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: "#000000",
            secondary: "#ef7f7a",
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
      },
  })],
}
