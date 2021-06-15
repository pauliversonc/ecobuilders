module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins']
      },
      backgroundImage: theme => ({
        'main-pic': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('/images/webaliser-_TPTXZd9mOo-unsplash.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
