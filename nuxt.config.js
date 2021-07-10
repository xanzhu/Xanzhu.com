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
    'nuxt-i18n',
    '@nuxtjs/sitemap'
  ],

  i18n: {
    vueI18n: {
      fallbackLocale: ['en', 'ko', 'zh'],
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
        },
        zh: {
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
      },
      {
        code: 'zh',
        iso: 'zh',
        name: '中文',
        file: 'zh.js'
      }
    ]
  },
  sitemap: {
    hostname: 'https://dev.xanzhu.com',
    gzip: true
  },
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    }
  },
  content: {},
  build: {}
}
