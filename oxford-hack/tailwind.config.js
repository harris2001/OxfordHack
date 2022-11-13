/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'one': '#262626',
        'two': '#6441a5',
        'three': '#b9a3e3',
        'four': '#f1f1f1',
        'five':'#d7c9f0',
      }
    },
  },
  plugins: [],
}
