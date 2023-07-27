/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cta-pattern': "url('/assets/cta-mask.png')",
      },
      fontFamily: {
        manrope: ['"Manrope"', ...defaultTheme.fontFamily.sans],
        vt323:['"VT323"', ...defaultTheme.fontFamily.sans],
        orbitron:['"Orbitron"', ...defaultTheme.fontFamily.sans],
        bruno:['"Bruno Ace SC"', ...defaultTheme.fontFamily.sans],
        piazzolla:['"Piazzolla"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
