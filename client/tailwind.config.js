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
        dark: '#213E3B',
        DEFAULT: '#41AEA9',
        light: '#A6F6F1',
        lightest: '#E8FFFF',
      },
      gray: colors.coolGray,
      white: colors.white,

    },
    boxShadow: {
      '3xl': '0 32px 240px -10px rgba(60, 148, 124, 10)',
    },
    extend: {
      backgroundImage: theme => ({
       'cat_bandung': `${process.env.PUBLIC_URL + '/cat_bandung.png'}`,
       'cat_jakarta': `${process.env.PUBLIC_URL + '/cat_jakarta.png'} `,
       'cat_semarang': `${process.env.PUBLIC_URL + '/cat_semarang.png'} `,
       'cat_surabaya': `${process.env.PUBLIC_URL + '/cat_surabaya.png'} `,
       'cat_yogyakarta': `${process.env.PUBLIC_URL + '/cat_yogyakarta.png'} `,
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
