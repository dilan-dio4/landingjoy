var colors = require('./utils/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class'
}
