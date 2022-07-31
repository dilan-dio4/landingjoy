var customColors = require('./utils/colors');
var defaultColors = require('tailwindcss/colors');

const typographySelectors = [
  ['h1'],
  ['h2'],
  ['h3'],
  ['h4'],
  ['h5'],
  ['h6'],
  ['p'],
  ['a'],
  ['blockquote'],
  ['figure'],
  ['figcaption'],
  ['strong'],
  ['em'],
  ['code'],
  ['pre'],
  ['ol'],
  ['ul'],
  ['li'],
  ['table'],
  ['thead'],
  ['tr'],
  ['th'],
  ['td'],
  ['img'],
  ['video'],
  ['hr'],
];

const inheritColors = {}
for (const [selector] of typographySelectors) {
  inheritColors[selector] = {
    color: "inherit"
  }
}
inheritColors.color = "inherit";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: [
            inheritColors
          ]
        }
      }
    },
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
