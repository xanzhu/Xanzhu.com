import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#0066CC",
          dark: "#FF0000",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#3182ce",
              textDecoration: "none",
              "&:hover": {
                color: "#2c5282",
              },
            },
          },
        },
      },
    },
  },
  shortcuts: {
    "btn-focus":
      "focus:(outline-none border-red-600 border-1 rounded-md) border-1 border-transparent",
    "nav-link":
      "hover:(border-b-2 border-red-600) border-b-2 border-transparent",
    "nav-internal":
      "p-2 rounded-md dark:hover:bg-dark-600 hover:bg-light-700 md:(hover:border-primary-light dark:hover:border-primary-dark border-b-2 border-transparent rounded-none hover:bg-transparent dark:hover:bg-transparent p-0)",
    "btn-prev-next":
      "font-medium px-4 py-2 dark:(hover:bg-dark-700 bg-dark-500) hover:(bg-gray-300) bg-light-900 rounded-md sm:px-6",
    "border-outline":
      "border-1 border-gray-300 dark:border-dark-300 rounded-md",
  },
  darkMode: "class",
  plugins: [
    require("windicss/plugin/typography")({
      dark: true,
    }),
  ],
});
