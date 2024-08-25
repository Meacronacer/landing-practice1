/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': {max: '1024px'},
      'md': {max: '768px'},
      'sm': {max:'480px'},
    },
    extend: {
      colors: {
        'green': '#009379',
        'green-light': '#e5f4f2'

      },
    },
  },
  plugins: [],
}

