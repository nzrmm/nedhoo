const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
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
          lg : '4rem'
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
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        '.icon-search' : {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.1'%3E%3Cpath d='M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.25 12.25L9.71251 9.71246' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E%0A")`,
          backgroundRepeat : 'no-repeat',
          backgroundPosition : '20px',
          color : 'white'
        }
      }

      addUtilities(utilities);
    })
  ],
}
