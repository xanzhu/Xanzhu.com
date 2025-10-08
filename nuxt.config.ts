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
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        // Open Graph
        { property: 'og:site_name', content: 'Xanzhu' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://xanzhu.com' },
        { property: 'og:logo', content: 'https://xanzhu.com/images/favicon/logo.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@xanzhu1' },
        // Naver Verification
        { name: 'naver-site-verification', content: 'efe8928c52c47ffddfbd678ff1ac6fe5ca08b009' },
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
    trailingSlash: false,
  },

  sitemap: {
    autoI18n: true,
    autoLastmod: true,
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '50%' },
    ],
    xslTips: false,
    credits: false,
  },

  routeRules: {
    '/**': {
      headers: {
        'x-robots-tag': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
    },
  },

  image: {
    domains: ['cdn.xanzhu.com'],
  },

  content: {
    experimental: { nativeSqlite: true },
  },

  // API
  runtimeConfig: {
    public: {
      Version: '2.0.30',
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
          '\'wasm-unsafe-eval\'',
        ],
        'style-src': [
          '\'self\'',
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
          'https://api.iconify.design',
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
      crossOriginOpenerPolicy: 'same-origin',
      crossOriginResourcePolicy: 'same-origin',
    },
    sri: true,
  },

  compatibilityDate: '2025-10-01',

  // Testing features
  sourcemap: false,

  unocss: {
    disableNuxtInlineStyle: false,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  $development: {
    site: {
      url: 'http://localhost:4000',
    },
    sourcemap: true,
    security: {
      headers: {
        contentSecurityPolicy: {
          'connect-src': [
            'ws://localhost:4000',
          ],
          'style-src': [
            '\'unsafe-inline\'',
          ],
        },
        crossOriginEmbedderPolicy: 'unsafe-none',
      },
    },
    runtimeConfig: {
      public: {
        i18n: {
          baseUrl: 'http://localhost:4000',
        },
      },
    },
  },

  $production: {
    security: {
      headers: {
        contentSecurityPolicy: {
          'style-src': [
            '\'nonce-{{nonce}}\'',
          ],
        },
        crossOriginEmbedderPolicy: 'credentialless',
      },
    },
  },

  $env: {
    cloudflare: {
      nitro: {
        preset: 'cloudflare_module',
        cloudflare: {
          deployConfig: true,
          wrangler: {
            d1_databases: [
              {
                binding: 'DB',
                database_name: 'xanzhu-content',
                database_id: '20794211-4b47-4ee6-8333-f4bce4bf3963',
              },
            ],
          },
        },
      },
    },
  },
})
