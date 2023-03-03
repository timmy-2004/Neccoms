/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'md': '900px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}