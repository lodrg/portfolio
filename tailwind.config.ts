import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        forest: {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce4c9',
          300: '#8dd0a8',
          400: '#5bb583',
          500: '#3d9b6b',
          600: '#2f7d56',
          700: '#2a6447',
          800: '#25503a',
          900: '#1f4230',
          950: '#0f2a1d',
        },
      },
    },
  },
  plugins: [
    typography,
  ],
};

export default config; 