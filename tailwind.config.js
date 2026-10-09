/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#C47B91',    // لون الخلفية الـ Dusty Rose الأصلي
          ink: '#451A28',   // لون الكتابة العنابي الغامق
          accent: '#9A3B5C', // لون الزراير
          paper: '#F4E3E1',  // لون ورقة الرسالة
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'], // الخط الكيرسيف الراقي
        body: ['"Cormorant Garamond"', 'serif'],
        arabic: ['"Alexandria"', '"Amiri"', 'sans-serif'],
        arabicTitle: ['"Amiri"', '"Alexandria"', 'serif'],
      },
      boxShadow: {
        polaroid: '0 15px 25px -5px rgba(69, 26, 40, 0.4), 0 8px 10px -6px rgba(69, 26, 40, 0.2)',
      }
    },
  },
  plugins: [],
}