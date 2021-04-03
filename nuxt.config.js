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
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    'nuxt-i18n'
  ],

  // Testing CSP (Disabled 3/5/21)
  // Using Vercel.json
  // csp: {
  //   hashAlgorithm: 'sha256',
  //   policies: {
  //     'script-src': [
  //       "'self' https://cdn.jsdeliver.net"
  //     ],
  //     'style-src': [
  //       "'self'"
  //     ],
  //     'default-src': [
  //       "'self'"
  //     ],
  //     'manifest-src': [
  //       "'self'"
  //     ]
  //   },
  //   addMeta: true
  // },

  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'i18n/',
    lazy: true,
    detectBrowserLanguage: {
      onlyOnRoot: true
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

  pwa: {
    manifest: {
      lang: 'en',
      name: 'Xanzhu Security',
      short_name: 'Xanzhu',
      description: 'Helping improve privacy, accessibility and security of the technology you use.',
      background_color: '#000',
      theme_color: '#fff'
    },
    icon: true
  },

  tailwindcss: {
    jit: true
  },
  content: {},
  build: {}
}
