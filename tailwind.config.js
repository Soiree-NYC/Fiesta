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
      keyframes: {
        sparkle: {
          '0%': { backgroundPosition: '0% 50%'},
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        sparkle: 'sparkle 1s linear infinite',
      },
      backgroundImage: {
        'skyline': `url('/nycskyline.jpg')`,
      },
    },
  },
  plugins: [],
}