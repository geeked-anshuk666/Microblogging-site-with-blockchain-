/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Gold
        secondary: '#000000', // Black
        accent: '#B8860B', // Dark Goldenrod
      },
    },
  },
  plugins: [],
};