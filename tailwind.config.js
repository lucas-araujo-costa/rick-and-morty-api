/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-default": "#0E0A1B",
      },
      backgroundImage: {
        "hero": "url('https://i.imgur.com/ADqwK2l.png')"
      }
    },
  },
  plugins: [],
}