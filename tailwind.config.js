/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens:{
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
          forestGreen: '#86bf45',
          darkYello: 'hsl(88, 49%, 40%)',
          lightBlue: 'rgb(110,193,228)',
          linkden: 'rgb(0,123,182)',
          twitter: 'rgb(0,172,237)',
          ring: 'hsl(128, 53%, 59%)',
      },
      width: {
          card: "400px",
      },
    },
  },
  plugins: [],
}
