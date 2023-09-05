module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  extend: {
    backgroundImage: {
      'gradient-yellow-purple': 'linear-gradient(270deg, #faa036, #8a7af5)',
    },
    keyframes: {
      'spin': {
        '0%, 100%': { transform: 'rotate(0deg)' },
        '50%': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      'spin': 'spin 10s ease infinite',
    },
  },
};
