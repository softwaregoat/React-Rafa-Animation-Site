/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Titillium: ['Titillium Web', 'sans-serif'],  // Add your custom font here
      },
    },
  },
  plugins: [],
}

