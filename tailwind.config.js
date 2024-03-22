/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /grid-cols-/, // You can display all the colors that you need
      variants: ['md', 'sm'], // Optional
    },
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: 'rgba(var(--color-black), <alpha-value>)',
      white: 'rgba(var(--color-white), <alpha-value>)',
      gray: 'rgba(var(--color-gray), <alpha-value>)',
      primary: 'rgba(var(--color-primary), <alpha-value>)',
      secondary: 'rgba(var(--color-secondary), <alpha-value>)',
      dark: 'rgba(var(--color-dark), <alpha-value>)',
      error: 'rgba(var(--color-error), <alpha-value>)',
    },
    screens: {
      md: { max: '768px' },
      sm: { max: '480px' },
    },
    extend: {
      keyframes: {
        line: {
          '0%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        '.container': {
          margin: 'auto',
          maxWidth: '140rem',
          '@screen md': {
            maxWidth: '66.8rem',
          },
          '@screen sm': {
            maxWidth: '28.8rem',
          },
        },
      });
    },
  ],
};
