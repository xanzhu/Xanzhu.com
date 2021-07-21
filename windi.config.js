import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'
// import windiColors from 'windicss/colors';

export default defineConfig({
  theme: {},
  darkMode: 'media',
  plugins: [
    typography({
      dark: true
    })
  ]
})
