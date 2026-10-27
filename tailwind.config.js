/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zooroOrange: '#FF6B00',
        zooroGreen: '#4CAF50',
        zooroCream: '#FCF9F2',
        zooroDark: '#1A1A1A',
      },
    },
  },
  plugins: [],
}