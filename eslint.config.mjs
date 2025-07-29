import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    markdown: false,
    css: true,
  },
  unocss: true,
  vue: true,
})
