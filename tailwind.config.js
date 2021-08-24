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
      zIndex: {
        "-10": "-10",
        "-15": "-15",
        "-20": "-20",
        "-40": "-40",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
