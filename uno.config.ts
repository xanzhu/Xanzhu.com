// uno.config.ts
import { defineConfig, presetTypography } from "unocss";
import presetUno from "@unocss/preset-uno";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography({
      cssExtend: {
        h1: {
          visbility: "hidden",
        },
        "h2 > a, h3 > a, h4 > a, h5 > a, h6 > a": {
          "pointer-events": "none",
          "text-decoration": "none",
        },
        "pre, code": {
          "--uno": "dark:(bg-dark-800 text-light-700 border-dark-300) text-dark8",
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
