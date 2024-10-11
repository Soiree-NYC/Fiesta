/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        sixtyfourConvergence: ['Sixtyfour Convergence', 'cursive'],
      },
      backgroundImage: {
        'skyline': `url('/nycskyline.jpg')`,
      },
    },
  },
  plugins: [],
}