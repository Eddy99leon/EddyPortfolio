/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ColorVert: '#0ec10b',
        ColorOrange: '#ff4000',
      },
      fontFamily: {
        HandWriter:'Borel',
        Poppins:'Poppins',
      }
    },
  },
  plugins: [],
}

