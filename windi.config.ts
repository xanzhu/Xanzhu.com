import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        main: ['Open-sans', 'system-ui',]
      }
    },
  },
  darkMode: "class",
  plugins: [
    require("windicss/plugin/typography")({
      dark: true,
    }),
  ],
});
