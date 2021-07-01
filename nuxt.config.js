export default {
  target: 'static',

  head: {
    title: 'Xanzhu Security',
    bodyAttrs: {
      class: 'dark:bg-black bg-gray-200'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'http-equiv', content: 'Content-Security-Policy' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'mask-icon', href: '/favicon.svg', color: '#FFFFFF' }
    ]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    '@nuxt/image'
  ],
  modules: [
    'nuxt-i18n'
  ],

  i18n: {
    vueI18n: {
      fallbackLocale: ['en', 'ko'],
      dateTimeFormats: {
        en: {
          short: {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }
        },
        ko: {
          short: {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }
        }
      }
    },
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'i18n/',
    detectBrowserLanguage: {
      onlyOnRoot: true,
      useCookie: true,
      alwaysRedirect: true
    },
    seo: false,
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.js'
      },
      {
        code: 'ko',
        iso: 'ko',
        name: '한국어',
        file: 'ko.js'
      }
    ]
  },
  content: {},
  build: {}
}
