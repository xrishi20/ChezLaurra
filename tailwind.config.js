module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
    colors: {
      linen: "#FBF3EB",
      wattle: "#CADA4B",
      chicago: "#616159",
      dustyGray: "#9C9494",
      black: "#000000",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    fontFamily: {
      esteban: '"Esteban", Georgia, Cambria, "Times New Roman", Times, serif',
    },
  },
  variants: {},
  plugins: [],
};
// npx tailwindcss build css/build.css -o css/tailwind.css