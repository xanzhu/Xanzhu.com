import antfu from '@antfu/eslint-config'
import oxlint from 'eslint-plugin-oxlint'

export default antfu({
  formatters: {
    markdown: false,
    css: true,
  },
  unocss: true,
  vue: true,
}, ...oxlint.buildFromOxlintConfigFile('.oxlintrc.json'))
