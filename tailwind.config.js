/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#083F9B',
        secondary1: '#7F56D9',
        primary2: '#04016C',
        secondary2: '#4A16BD',
        header1: '#0E38CD',
        rating: '#0094E7',
        primary3: '#2E08C7',
        secondary3: '#7E08C7',
        primary4: '#D9ECFF',
        secondary4: '#F0F3FF',
        primary5: '#739FE8',
        secondary5: '#4F18CA',
        primary6: '#D9ECFF',
        secondary6: '#D9ECFF',
        color1: '#E441FF',
        color2: '#1901F8',
        color3: '#00B3FF',
        primary7: '#477AE3',
        secondary7: '#931BBD',
      },
      fontFamily: {
        Righteous: ['Righteous', 'sans-serif'],
        Rowdies: ['Rowdies', 'sans-serif'],
       },
    },
  },
  plugins: [],
}

