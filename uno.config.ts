// uno.config.ts
import { defineConfig, presetTypography } from "unocss";
import presetUno from "@unocss/preset-uno";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    // presetWebFonts({
    //   provider: "google",
    //   fonts: {
    //     sans: "Noto Sans KR",
    //   },
    // }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    colors: {
      brand: {
        dark: "#ff0000", // text-brand-dark //
        light: "#d51600", // text-brand-light // #b0100d // #B00F0C (AAA)
      },
    },
  },
});
