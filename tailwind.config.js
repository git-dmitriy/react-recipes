module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-100%)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
        },
      },
      minHeight: {
        300: '300px',
      },
    },
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      '170p': '170px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
