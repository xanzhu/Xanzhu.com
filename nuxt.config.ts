import process from 'node:process'

const isDev = process.env.NODE_ENV === 'development'
const siteUrl = 'https://xanzhu.com'
const cdnUrl = 'https://cdn.xanzhu.com'

export default defineNuxtConfig({
  devtools: { enabled: isDev },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxt/hints',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-security',
    '@nuxt/fonts',
    'nitro-cloudflare-dev',
    '@nuxt/scripts',
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
        { property: 'og:url', content: siteUrl },
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
        { rel: 'preconnect', href: cdnUrl, crossorigin: 'anonymous' },
        // Fallback
        { rel: 'dns-prefetch', href: cdnUrl },
      ],
    },
  },

  colorMode: {
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
        files: ['en/common.json', 'en/app.json'],
      },
      {
        code: 'ko',
        language: 'ko',
        name: '한국어',
        files: ['ko/common.json', 'ko/app.json'],
      },
      {
        code: 'zh',
        language: 'zh',
        name: '中文',
        files: ['zh/common.json', 'zh/app.json'],
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

  // Sitemap
  sitemap: {
    autoI18n: true,
    autoLastmod: true,
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '50%' },
    ],
    xslTips: false,
    credits: false,
    cacheMaxAgeSeconds: 3600,
    zeroRuntime: true,
  },

  routeRules: {
    '/**': {
      headers: {
        'x-robots-tag': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
    },
    '**/blog/**': {
      isr: true,
    },
    '/_nuxt/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable',
      },
    },
    '/images/**': {
      headers: {
        'Cache-Control': 'public, max-age=86400, must-revalidate',
      },
    },
  },

  image: {
    domains: [cdnUrl],
  },

  content: {
    experimental: { nativeSqlite: true },
  },

  // API
  runtimeConfig: {
    public: {
      version: '2.2.29',
      i18n: {
        baseUrl: siteUrl,
      },
    },
  },

  // ICON
  icon: {
    provider: 'server',
    mode: 'svg',
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
    },
    serverBundle: {
      collections: ['lucide', 'line-md'],
    },
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
          'https://*.xanzhu.workers.dev',
          'https://s.ytimg.com',
          'https://www.youtube.com',
          '\'wasm-unsafe-eval\'',
        ],
        'style-src': [
          '\'self\'',
          isDev ? '\'unsafe-inline\'' : '\'nonce-{{nonce}}\'',
          'https://*.xanzhu.com',
        ],
        'base-uri': '\'none\'',
        'img-src': [
          '\'self\'',
          'data:',
          cdnUrl,
          'https://assets.lotofcarrots.com/media/home/section/desktop/4.webp',
          'https://storage.googleapis.com/gweb-uniblog-publish-prod/',
          'https://i.ytimg.com',
        ],
        'media-src': [
          'https://storage.googleapis.com/gweb-uniblog-publish-prod/',
          'https://storage.quantum-engine.ai/Rabbits_Factory_4K_h264.mp4',
          'https://assets.lotofcarrots.com/media/home/section/desktop/4.mp4',
          'https://www.apple.com/105/media/us/macbook-air-13-and-15/2023/f52c7a72-dff4-4f3c-9511-bf08e46c6f5f/anim/design/hero/medium_2x.mp4',
          'https://www.apple.com/105/media/us/macos/sonoma-preview/2023/e6d837c5-8a7e-49d8-b0bd-137b21320db3/anim/share-preview/large_2x.mp4',
        ],
        'font-src': ['\'self\'', 'data:'],
        'object-src': ['\'none\''],
        'script-src-attr': ['\'none\''],
        'style-src-attr': ['\'unsafe-inline\''],
        'form-action': ['\'self\''],
        'connect-src': [
          '\'self\'',
          'https://*.xanzhu.com',
          'https://*.xanzhu.workers.dev',
          'https://api.weatherapi.com',
          'https://api.iconify.design',
          ...(isDev
            ? ['ws://localhost:4000', 'ws://localhost:24678']
            : []),
        ],
        'frame-src': [
          '\'self\'',
          'https://*.xanzhu.workers.dev',
          'https://www.youtube.com',
          'https://www.youtube-nocookie.com',
        ],
        'upgrade-insecure-requests': !isDev,
      },
      strictTransportSecurity: {
        maxAge: 31536000,
        includeSubdomains: true,
        preload: true,
      },
      crossOriginEmbedderPolicy: 'unsafe-none',
      crossOriginOpenerPolicy: 'same-origin',
      crossOriginResourcePolicy: 'same-origin',
    },
    sri: true,
  },

  compatibilityDate: '2026-01-01',

  sourcemap: isDev,

  unocss: {
    disableNuxtInlineStyle: false,
    content: {
      pipeline: {
        include: [/\.(vue|ts|mdx?|html)($|\?)/],
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
    minify: true,
    compressPublicAssets: true,
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

  // Experimental
  experimental: {
    extractAsyncDataHandlers: true,
  },

  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },

  future: {
    compatibilityVersion: 5,
  },
})
