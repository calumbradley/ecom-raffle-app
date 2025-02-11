export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          lighter: "#F5F3FF",
          light: "#DDD6FE",
          primary: "#5B21B6",
          dark: "#4C1D95",
        },
      },
      fontFamily: {
        primary: ["Josefin Sans"],
      },
    },
  },
  plugins: [],
};
