import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kunyit: {
          50: '#FFFDF0',
          100: '#FFF9C2',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15',
          500: '#EAB308', // base kunyit
          600: '#CA8A04', // deep turmeric
          700: '#A16207', // roasted kunyit
          800: '#854D0E',
          900: '#713F12',
          warm: '#F59E0B',
          amber: '#D97706',
          vintage: '#45260A'
        }
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      }
    },
  },
  plugins: [],
};
export default config;
