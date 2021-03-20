const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        dark: '#213E3B',
        DEFAULT: '#41AEA9',
        light: '#A6F6F1',
        lightest: '#E8FFFF',
      },
      gray: colors.coolGray,

    }
  },
  fontFamily: {
    sans: ['Noto Sans', 'sans-serif']
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
