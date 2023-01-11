/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        'cb' : "url('./assets/chefBackground.png')",
        'gb': "url('./assets/guide-banner.png')",

      }
    },
  },
  plugins: [],
}