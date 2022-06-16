module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    screens: {
      laptop: { min: '1024px' },
      tablet: { max: '1024px' },
      // => @media (max-width: 1024px) { ... }
      mobile: { max: '550px' },
      // => @media (max-width: 550px) { ... }
    },
    container: {
      center: true,
      screens: {
        DEFAULT: '1366px',
      },
      padding: {
        DEFAULT: '2rem',
        mobile: '1rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
