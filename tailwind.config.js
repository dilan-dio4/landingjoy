var customColors = require('./utils/colors');
var defaultColors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...defaultColors,
      ...customColors
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class'
}
