import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit', 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          light: '#FFCCB3',
          DEFAULT: '#FFAB40',
          dark: '#FF8A00',
        },
        brown: {
          light: '#D7CCC8',
          DEFAULT: '#BCAAA4',
          dark: '#8D6E63',
        },
        cream: {
          light: '#FFF8E1',
          DEFAULT: '#FFE0B2',
          dark: '#FFD54F',
        },
      },
      fontSize: {
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
      },
    },
  },
  plugins: [],
};

export default config;
