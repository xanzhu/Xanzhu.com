import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'
// import windiColors from 'windicss/colors';

export default defineConfig({
  theme: {},
  shortcuts: {
    'btn-focus': 'focus:(outline-none border-red-600 border-1 rounded-md) border-1 border-transparent',
    'nav-link': 'hover:(border-b-2 border-red-600) border-b-2 border-transparent mr-auto',
    'nav-internal': 'p-2 rounded-md dark:hover:bg-dark-600 hover:bg-light-700 md:(hover:border-red-600 border-b-2 border-transparent rounded-none hover:bg-transparent dark:hover:bg-transparent p-0)',
    'btn-prev-next': 'font-medium px-4 py-2 dark:(hover:bg-dark-700 bg-dark-500) hover:(bg-gray-300) bg-light-900 rounded-md sm:px-6'
  },
  darkMode: 'class',
  plugins: [
    typography({
      dark: true
    })
  ]
})
