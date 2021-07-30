import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'
// import windiColors from 'windicss/colors';

export default defineConfig({
  theme: {},
  shortcuts: {
    // Replaces old focus outline method
    'btn-focus': 'focus:outline-none focus:border-red-600 focus:border-1 focus:rounded-md border-1 border-transparent'
  },
  darkMode: 'class',
  plugins: [
    typography({
      dark: true
    })
  ]
})
