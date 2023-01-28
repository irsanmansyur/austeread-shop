module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        gray: { normal: "#b4b4b4" },
        primary: {
          DEFAULT: "#BE0BF7",
          others: "#40DF5F",
        },
        secondary: "#f788aee6",
        light: "#f8f9fa",
        muted: "#6c757d",
        dark: "#030304",
      },
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        garnet: ["garnett", "Poppins"],
        GarnettBold: ["garnett-bold", "Poppins"],
        GarnettRegular: ["garnett-regular", "Poppins"],
        GarnettLight: ["garnett-ligth", "Poppins"],
        GarnettMedium: ["garnett-medium", "Poppins"],

        PublicSansBlack: ["PublicSansBlack", "Poppins"],
        PublicSansBold: ["PublicSansBold", "Poppins"],
        PublicSansBoldItalic: ["PublicSansBoldItalic", "Poppins"],
        PublicSansLight: ["PublicSanslight", "Poppins"],
        PublicSansMedium: ["PublicSansMedium", "Poppins"],
        PublicSansRegular: ["PublicSansRegular", "Poppins"],
      },
    },
  },

  variants: {},
  plugins: [],
};
