// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetWebFonts,
  presetTypography,
} from "unocss";
import presetUno from "@unocss/preset-uno";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Noto Sans KR",
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    colors: {
      brand: {
        dark: "#ff0000", // text-brand-dark
        light: "#001EFA", // text-brand-light
      },
    },
  },
});
