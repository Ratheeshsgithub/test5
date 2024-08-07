/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./dist/*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '600px',
      lg: '1200px',
      xl: '1440px',
      '2xl': '1836px',
      '3xl': '2500px',

    },
    extend: {},
  },
  plugins: [],
}

