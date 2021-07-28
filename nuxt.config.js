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
      { name: 'twitter:site', content: '@xanzhu1' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '32x32', media: '(prefers-color-scheme:light)' },
      { rel: 'icon', type: 'image/png', href: '/favicon-dark.png', sizes: '32x32', media: '(prefers-color-scheme:dark)' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/favicon/apple-180-dark.png' },
      { rel: 'mask-icon', href: '/favicon.svg', color: '#FDFDFD' }
    ]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
    '@nuxtjs/svg',
    '@nuxt/image'
  ],
  modules: [
    'nuxt-i18n',
    '@nuxt/content',
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
        file: 'en.json'
      },
      {
        code: 'ko',
        iso: 'ko',
        name: '한국어',
        file: 'ko.json'
      },
      {
        code: 'zh',
        iso: 'zh',
        name: '中文',
        file: 'zh.json'
      }
    ]
  },
  sitemap: {
    hostname: 'https://dev.xanzhu.com',
    gzip: true
  },
  image: {
    domains: [
      'https://res.cloudinary.com'
    ]
  },
  content: {},
  build: {},
  generate: {
    cache: {
      ignore: [
        'content'
      ]
    }
  }
}
