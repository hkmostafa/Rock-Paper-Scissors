/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ScissorsFrom: "hsl(39, 89%, 49%)",
        ScissorsTo: "hsl(40, 84%, 53%)",
        PaperFrom: "hsl(230, 89%, 62%)",
        PaperTo: "hsl(230, 89%, 65%)",
        RockFrom: "hsl(349, 71%, 52%)",
        RockTo: "hsl(349, 70%, 56%)",
        DarkText: "hsl(229, 25%, 31%)",
        ScoreText: "hsl(229, 64%, 46%)",
        HeaderOutline: "hsl(217, 16%, 45%)",
        BackgroundColorFrom: "hsl(214, 47%, 23%)",
        BackgroundColorTo: "hsl(237, 49%, 15%)",
        White: "#fff",
        Black: "#000",
        Gray: "#6c757d",
      },
      fontFamily: {
        Barlow700: ["var(--Barlow-700)"],
        Barlow600: ["var(--Barlow-600)"],
        Barlow300: ["var(--Barlow-300)"],
      },
      borderWidth: {
        12: "12px",
      },
    },
  },

  plugins: [],
};
