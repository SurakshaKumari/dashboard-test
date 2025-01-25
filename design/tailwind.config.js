/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0154AA', // blue color
        secondary: '#F4F4F4', // gray color
        accent: '#737A91', // blue text color buttons
        dark: '#333333', // black text
        light: '#585D6E', // Light color gray
        box: '#F6F9FF'
      },
      fontFamily: {
        'display': ['"Neue Haas Grotesk Display Pro"', 'sans-serif'],
      },
      font:{        'display': ['"Neue Haas Grotesk Display Pro"', 'sans-serif'],


      }  
      },
  },
  plugins: [],
};

