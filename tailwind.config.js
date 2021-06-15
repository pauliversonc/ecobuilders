module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins']
      },
      backgroundImage: theme => ({
        'main-pic': "url('/images/webaliser-_TPTXZd9mOo-unsplash.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
