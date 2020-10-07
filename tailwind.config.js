module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: [
      "./category.html",
      "./contact.html",
      "./index.html",
      "./recipe.html",
      "./searchResults.html",
    ],
  },
  theme: {
    extend: {},
    colors: {
      linen: "#FBF3EB",
      red: "#DF3B57",
      dBrown: "#483D3F",
      purple: "#5E4AE3",
      almond: "#f5d2af",
      wattle: "#CADA4B",
      transparent: "transparent",
    },
    fontFamily: {
      dLibre:
        '"David Libre", Georgia, Cambria, "Times New Roman", Times, serif',
    },
  },
  variants: {},
  plugins: [],
};
// npx tailwindcss build css/build.css -o css/tailwind.css