const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      }
    },
    colors: {
      primary: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#c2410c',
        900: '#7c2d12'
      },

      secondary: {
        100: '#7c8ba1',
        200: '#667892',
        300: '#506582',
        400: '#3a5173',
        500: '#243E63',
        600: '#203859',
        700: '#1d324f',
        800: '#192b45',
        900: '#16253b',
      },
      ...colors,
    },
    extend: {
      fontFamily: {
        'sans': ['Inter, sans-serif', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
