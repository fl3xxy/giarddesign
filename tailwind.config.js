/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '790px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        creamy: '#DCC1AB',
        customGreen: '#1B5B31',
        customGrey: '#F5F0EC',
        customLightGrey: '#F5F0EC',
      },
    },
  },
  plugins: [],
}

