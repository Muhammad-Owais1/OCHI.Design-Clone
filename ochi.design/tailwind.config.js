/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'NeueMontreal': ['NeueMontreal', 'sans-serif'],
        'FoundersGrotesk': ['FoundersGritesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}