/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#f8f5ff',
          100: '#f2eafa',
          200: '#e3d7f5',
          300: '#cbb7eb',
          400: '#a786df',
          500: '#8e6bd6',
          600: '#764dbf',
          700: '#5e36a8',
          800: '#462291',
          900: '#300e7a',
        },
      },
    },
  },
  plugins: [],
} 