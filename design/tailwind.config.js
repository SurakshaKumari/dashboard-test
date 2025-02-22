/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0154AA',
        secondary: '#F4F4F4',
        accent: '#737A91', 
        dark: '#333333', 
        light: '#585D6E', 
        box: '#F6F9FF'
      },
      fontFamily: {
        'display': ['"Neue Haas Grotesk Display Pro"', 'sans-serif'],
      },
      font:{        'display': ['"Neue Haas Grotesk Display Pro"', 'sans-serif'],

      }  ,
      lineHeight: {
        'custom': '16.8px',
      },
      },
  },
  plugins: [],
};

