/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DB1B1B',
          dark: '#a01515',
          light: '#e63939',
        },
        charcoal: '#2d2d2d',
        grey: {
          50: '#fafafa',
          100: '#f5f5f5',
        },
        gray: {
          100: '#f3f4f6',
          700: '#374151',
        },
      },
    },
  },
  plugins: [],
}
