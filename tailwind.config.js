/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9182c4',
        secondary: '#d8aed3',
        accent: '#486989',
        light: '#ebd9dd',
      },
      fontFamily: {
        maximanova: ['MaximaNouva', 'sans-serif'],
      },
    },
  },
  plugins: [],
}