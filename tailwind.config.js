/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FDD700', // Bright Gold
          500: '#D4AF37', // Standard Gold
          600: '#AA8C2C', // Dark Gold
        },
        black: {
          DEFAULT: '#000000',
          900: '#0a0a0a',
          800: '#121212' // Card background
        }
      }
    },
  },
  plugins: [],
}
