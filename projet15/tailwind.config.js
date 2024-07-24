/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter-regular': ['Inter-Regular', 'sans-serif'],
        'inter-bold': ['Inter-Bold', 'sans-serif'],
        'inter-extrabold': ['Inter-ExtraBold', 'sans-serif'],
      },
      colors:{
        'soft-orange' : "hsl(35, 77%, 62%)",
        'off-white':'hsl(36, 100%, 99%)',
        'very-dark-blue':'hsl(240, 100%, 5%)',
        'grayish-blue':'hsl(233, 8%, 79%)',
        'dark-grayish-blue':'hsl(236, 13%, 42%)',
        'soft-red':'hsl(5, 85%, 63%)'
      },
      keyframes: {
          slideIn: {
            '0%': {
              transform: 'translateX(100%)',
            },
            '100%': {
              transform: 'translateX(0%)',
            },
          },
          slideOut: {
            '0%': {
              transform: 'translateX(0%)',
            },
            '100%': {
              transform: 'translateX(100%)',
            },
          },
      
      },
      animation: {
        slideIn: 'slideIn 0.6s ease-in-out',
        slideOut: 'slideOut 0.6s ease-in-out',
      }
    },
  },
  plugins: [],
}
