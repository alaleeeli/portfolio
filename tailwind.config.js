/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sochelia: ["sochelia"]
      },
      colors: {
        'coffee-50': '#F0EDEA',
        'coffee-100': '#E7E1DC',
        'coffee-200': '#DDD4CD',
        'coffee-300': '#C3B5A9',
        'coffee-400': '#A68F7E',
        'coffee-500': '#886A53',
        'coffee-600': '#75553C',
        'coffee-700': '#624025',
        'coffee-800': '#4E331D',
        'coffee-900': '#322113',
      },
    },
  },
  plugins: [
    
  ],
}

