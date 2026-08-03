/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode toggle via a 'dark' class on the html/body element
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Dark Blue
          light: '#2563EB',
          dark: '#1E40AF',
        },
        accent: {
          DEFAULT: '#F59E0B', // Orange
          light: '#FBBF24',
          dark: '#D97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Professional typography
      }
    },
  },
  plugins: [],
}
