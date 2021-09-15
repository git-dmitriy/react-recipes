module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{jsx,js}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
      minHeight: {
        300: '300px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
