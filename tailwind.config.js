module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 0 5px #c7c3c8",
      },
      fontSize: {
        xs: [
          "0.75rem",
          {
            // 12px
            lineHeight: "1rem", // 16px
          },
        ],
        "3xl": [
          "1.25rem",
          {
            // 28px
            lineHeight: "2.125rem", // 34px
          },
        ],
        "8xl": [
          "2.5rem",
          {
            // 40px
            lineHeight: "3.8125rem", // 61px
          },
        ],
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        blue: "#4C80CF",
        whiteGray: "#F7F9FA",
      },

      maxWidth: {
        "container-sm": "540px",
        "container-md": "720px",
        "container-lg": "960px",
        "container-xl": "1173px",
        "container-2xl": "1300px",
        "container-3xl": "1500px",
        "container-4xl": "1600px",
      },
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
