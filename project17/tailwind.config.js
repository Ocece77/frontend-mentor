/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
       'grayish-blue': 'hsl(225, 20%, 60%)',
       'dark-desaturated-blue': 'hsl(227, 35%, 25%)',
       'soft-cyan' : 'hsl(174, 77%, 80%)',
       'strong-cyan':'hsl(174, 86%, 45%)',
       'toggle-bg':' hsl(223, 50%, 87%)',
       'light-red': 'hsl(15, 100%, 70%)',
       'discount-bg':'hsl(14, 92%, 95%)'

      }
    },
  },
  plugins: [

  ],
}