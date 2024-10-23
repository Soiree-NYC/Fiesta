/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive_r_1: '#043474',
        olive_r_2: '#5454A4',
        olive_r_3: '#AAA4CD',
        olive_l_1: '#D82C40',
        olive_l_2: '#8FC7FB',
        olive_l_3: '#043474',

      },
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