// uno.config.ts
import {
  defineConfig,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography({
      cssExtend: {
        h1: {
          visibility: "hidden",
        },
        "h2 > a, h3 > a, h4 > a, h5 > a, h6 > a": {
          "pointer-events": "none",
          "text-decoration": "none",
        },
        "pre, code": {
          "--uno":
            "dark:(bg-dark-800 text-light-700 border-dark-300) text-dark8",
          border: "1px solid #d1d1d1",
          overflow: "hidden",
          "background-color": "#f1f1f1",
          "white-space": "pre-wrap",
        },
        "pre > code": {
          border: "none",
        },
        ".ifr iframe": {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          "border-radius": "5px",
        },
        ".ifr": {
          position: "relative",
          width: "100%",
          "padding-bottom": "56.25%",
          height: "0",
        },
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    colors: {
      brand: {
        dark: "#007BFF", // text-brand-dark
        light: "#0067d4", // text-brand-light
      },
    },
  },
});
