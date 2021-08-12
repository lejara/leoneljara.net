module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        title: "14rem",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
