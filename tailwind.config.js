module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins']
      },
      colors: {
        lime: {
          '100': '#b4d669',
          '200': '#aad055',
          '300': '#a0cb41',
          '400': '#93be34',
          '500': '#84aa2f',
          '600': '#749629',
          '700': '#658224',
        }
      },
      backgroundImage: theme => ({
        'main-pic': "linear-gradient(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0), rgba(0, 0, 0, 1)), url('/images/AMAIA DUPLEX - PERSPECTIVE RENDER 3.jpg')",
        'hero-pic': "linear-gradient(rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0), rgba(0, 0, 0, 1)), url('/images/Modern-residence.jpg')",

       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
