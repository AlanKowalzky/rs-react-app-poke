/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pokemon-orange': '#FF7043',
        'pokemon-red': '#E53935',
        'dark-bg': '#1A1A1A',
        'dark-card': '#212121',
        'dark-header': '#23272b',
        'border-gray': '#424242',
        'text-light': '#F5F5F5',
        'text-muted': '#BDBDBD',
      },
    },
  },
  plugins: [],
};
