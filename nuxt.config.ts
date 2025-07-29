import process from 'node:process'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-security',
    '@nuxt/fonts',
    'nitro-cloudflare-dev',
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'color-scheme', content: 'dark light' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:site_name', content: 'Xanzhu' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://xanzhu.com' },
        { property: 'og:logo', content: 'https://xanzhu.com/images/favicon/logo.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@xanzhu1' },
        // Naver Verification
        { name: 'naver-site-verification', content: '' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg', sizes: 'any' },
        { rel: 'preconnect', href: 'https://cdn.xanzhu.com', crossorigin: 'anonymous' },
      ],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
    storageKey: 'xanzhu-color-mode',
  },

  // i18n V10
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        language: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'ko',
        language: 'ko',
        name: '한국어',
        file: 'ko.json',
      },
      {
        code: 'zh',
        language: 'zh',
        name: '中文',
        file: 'zh.json',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'xanzhu-i18n',
      redirectOn: 'root',
      cookieSecure: true,
    },
    hmr: true,
  },

  site: {
    url: 'https://xanzhu.com',
    name: 'Xanzhu',
  },

  sitemap: {
    autoI18n: true,
    strictNuxtContentPaths: true,
    autoLastmod: true,
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '50%' },
    ],
    xslTips: false,
    credits: false,
  },

  routeRules: {
    '/blog/**': { isr: true },
  },

  image: {
    domains: ['cdn.xanzhu.com'],
  },

  content: {
    defaultLocale: 'en',
  },

  // API
  runtimeConfig: {
    public: {
      Version: '1.0.211',
      WeatherAPI: process.env.WEATHER_API,
      i18n: {
        baseUrl: 'https://xanzhu.com',
      },
    },
  },

  // ICON
  icon: {
    provider: 'iconify',
    mode: 'svg',
  },

  // SECURITY V1.7
  security: {
    nonce: true,
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: true,
    },
    headers: {
      contentSecurityPolicy: {
        'default-src': ['\'self\'', 'https://*.xanzhu.com'],
        'script-src': [
          '\'self\'',
          '\'strict-dynamic\'',
          '\'nonce-{{nonce}}\'',
          'https://*.xanzhu.com',
        ],
        'style-src': [
          '\'self\'',
          // Allow devtools !
          process.env.NODE_ENV === 'development' ? '\'unsafe-inline\'' : '\'nonce-{{nonce}}\'',
          'https://*.xanzhu.com',
        ],
        'base-uri': '\'none\'',
        'img-src': [
          '\'self\'',
          'data:',
          'https://cdn.xanzhu.com',
          'https://assets.lotofcarrots.com/media/home/section/desktop/4.webp',
          'https://storage.googleapis.com/gweb-uniblog-publish-prod/',
        ],
        'media-src': [
          'https://storage.googleapis.com/gweb-uniblog-publish-prod/',
          'https://storage.quantum-engine.ai/Rabbits_Factory_4K_h264.mp4',
          'https://assets.lotofcarrots.com/media/home/section/desktop/4.mp4',
          'https://www.apple.com/105/media/us/macbook-air-13-and-15/2023/f52c7a72-dff4-4f3c-9511-bf08e46c6f5f/anim/design/hero/medium_2x.mp4',
          'https://www.apple.com/105/media/us/macos/sonoma-preview/2023/e6d837c5-8a7e-49d8-b0bd-137b21320db3/anim/share-preview/large_2x.mp4',
        ],
        'font-src': ['\'self\''],
        'object-src': ['\'none\''],
        'script-src-attr': ['\'none\''],
        'style-src-attr': ['\'unsafe-inline\''],
        'form-action': ['\'self\''],
        'connect-src': [
          '\'self\'',
          'https://*.xanzhu.com',
          'https://api.weatherapi.com',
          'https://api.iconify.design',
          ...(process.env.NODE_ENV === 'development'
            ? ['ws://localhost:4000']
            : []),
        ],
        'frame-src': [
          '\'self\'',
          'https://www.youtube.com',
          'https://youtube.com',
        ],
      },
      strictTransportSecurity: {
        maxAge: 31536000,
        includeSubdomains: true,
        preload: true,
      },
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === 'development'
          ? 'unsafe-none'
          : 'credentialless',
      crossOriginOpenerPolicy: 'same-origin',
      crossOriginResourcePolicy: 'same-origin',
    },
    sri: true,
  },

  compatibilityDate: '2025-07-15',

  // Testing features
  sourcemap: false,

  unocss: {
    disableNuxtInlineStyle: false,
  },

  nitro: {
    future: {
      nativeSWR: true,
    },
    prerender: {
      routes: ['/robots.txt', '/sitemap.xml'],
    },
  },
})
