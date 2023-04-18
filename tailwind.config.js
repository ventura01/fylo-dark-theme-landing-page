/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkBlueIntro: "hsl(217, 28%, 15%)",
        darkBlueMain: "hsl(218, 28%, 13%)",
        darkBlueFooter: "hsl(216, 53%, 9%)",
        darkBlueTest: "hsl(219, 30%, 18%)",
        cyanGrad: "hsl(176, 68%, 64%)",
        blueGrad: "hsl(198, 60%, 50%)",
        lightRedError: "hsl(0, 100%, 63%)",
      },
    },
  },
  plugins: [],
};
