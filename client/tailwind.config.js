const colors = require('tailwindcss/colors')



module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      // screens: {
      //   xs: "540px",
      // },
    },
    colors: {
      green: {
        darkest: '#1C2C2A',
        dark: '#213E3B',
        DEFAULT: '#41AEA9',
        op_15: '#E3F3F2',
        light: '#A6F6F1',
        lightest: '#E8FFFF',
      },
      gray: colors.coolGray,
      white: colors.white,
      red: colors.red,

    },
    boxShadow: {
      '3xl': '0 32px 240px -10px rgba(60, 148, 124, 10)',
    },
    extend: {
      backgroundImage: theme => ({
       'cat_bandung': "url('./assets/images/cat_bandung.jpg')",
       'cat_jakarta': "url('./assets/images/cat_jakarta.png')",
       'cat_semarang': "url('./assets/images/cat_semarang.jpg')",
       'cat_surabaya': "url('./assets/images/cat_surabaya.jpg')",
       'cat_yogyakarta': "url('./assets/images/cat_yogyakarta.png')",
       'hero_2': "url('./assets/images/hero2.jpg')",
      })
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
