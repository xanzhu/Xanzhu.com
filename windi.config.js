import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'
// import windiColors from 'windicss/colors';

export default defineConfig({
  theme: {},
  shortcuts: {
    'btn-focus': 'focus:outline-none focus:border-red-600 focus:border-1 focus:rounded-md border-1 border-transparent',
    'nav-link': 'hover:(border-b-2 border-red-600) border-b-2 border-transparent',
    'nav-internal': 'p-2 rounded-md dark:hover:bg-dark-600 hover:bg-light-700 md:(hover:border-red-600 border-b-2 border-transparent rounded-none hover:bg-transparent dark:hover:bg-transparent p-0)'
  },
  darkMode: 'class',
  plugins: [
    typography({
      dark: true
    })
  ]
})
