/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Siyam Rupali', 'Tiro Bangla', 'system-ui', 'sans-serif'],
        'tiro-bangla': ['Tiro Bangla', 'system-ui', 'sans-serif'],
        'siyam-rupali': ['Siyam Rupali', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: 'rgb(20, 83, 45)',
        secondary: 'rgb(6, 95, 70)',
        accent: 'rgb(5, 150, 105)',
        light: 'rgb(209, 250, 229)',
        dark: 'rgb(1, 50, 32)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
