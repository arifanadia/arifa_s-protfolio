/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_color: '#2e165a',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },

  },
  plugins: [
    require('daisyui'),
  ],
}

