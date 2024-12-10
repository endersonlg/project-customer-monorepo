import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-green": {
          100: "#F6FBF9",
          200: "#C1E3D6",
          300: "#A7D7C5",
          400: "#84C7AE",
        },
        gray: {
          700: "#32403B",
          750: "#212B27",
        },
      },
      height: {
        46: "736px",
      },
      width: {
        46: "736px",
      },
      animation: {
        fadeInSlide: "fadeInSlide forwards 0.2s ease-out",
      },
      keyframes: {
        fadeInSlide: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
