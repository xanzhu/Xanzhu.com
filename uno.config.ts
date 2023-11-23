// uno.config.ts
import { defineConfig, presetTypography } from "unocss";
import presetUno from "@unocss/preset-uno";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [presetUno(), presetTypography()],
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
