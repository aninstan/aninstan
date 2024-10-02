import type { Config } from "tailwindcss";
import flowbitePlugin from 'flowbite/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#2a2d3e",
        bg2: "#212433",
        bg_dark: "#26293a",
        bg_light: "#31364a",
        border: "#2c2f40",
        highlight: "#444267",
        text_side: "#53587d",

      },
    },
  },
  plugins: [
    flowbitePlugin
  ],
};
export default config;
