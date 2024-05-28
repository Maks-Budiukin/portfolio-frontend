/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        common: 'url(src/images/section-bg.webp)',
        photo: 'url(../public/pic6.png)'
      }
    }
  },
  plugins: []
}
