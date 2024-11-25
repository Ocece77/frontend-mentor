/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'purplish': "hsl(243, 100%, 62%)"
       }
    },
  },
  plugins: [],
}