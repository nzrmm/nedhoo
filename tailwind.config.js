const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{vue, js}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT : '1.2rem',
          sm : '4rem'
        }
      },
      fontFamily: {
        'sans' : ['Poppins', 'sans-serif']
      },
      colors : {
        'emerald' : colors.emerald,
        'teal' : colors.teal,
        'rose' : colors.rose,
        'amber' : colors.amber,
        'sky' : colors.sky
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
