/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Kanit: ['Kanit', 'sans-serif'],
      },
      colors:{
        bgPrimary: " rgba(133, 133, 133, 0.26)"
      }
    },
  },
  plugins: [],
}