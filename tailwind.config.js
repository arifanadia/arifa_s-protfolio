/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_color: '#2e165a',
        secondary_color: '#502C96',
        light: {
          background: '#ffffff',
          text: '#000000',
        },
        dark: {
          background: '#1a202c',
          text: '#a0aec0',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
      },
    },

  },
  plugins: [
    require('daisyui'),
  ],
}

