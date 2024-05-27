/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        common: 'url(../../public/try2.jpg)'
      }
    }
  },
  plugins: []
}
