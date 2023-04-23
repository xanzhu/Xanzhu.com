// uno.config.ts
import { defineConfig, presetUno, presetWebFonts, presetTypography } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
    presets: [
        presetUno(),
        presetTypography(),
        presetWebFonts({
            provider: 'fontshare',
            fonts: {
              sans: 'Satoshi',
            },
          }),
    ],
    transformers: [
        transformerVariantGroup(),
    ],
})