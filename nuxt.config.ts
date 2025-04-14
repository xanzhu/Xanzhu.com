export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@unocss/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-security",
    "@nuxt/fonts",
    "nitro-cloudflare-dev",
  ],

  colorMode: {
    classSuffix: "",
    preference: "dark",
  },

  i18n: {
    defaultLocale: "en",
    lazy: true,
    strategy: "prefix_except_default",
    bundle: {
      optimizeTranslationDirective: false,
    },
    locales: [
      {
        code: "en",
        language: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "ko",
        language: "ko",
        name: "한국어",
        file: "ko.json",
      },
      {
        code: "zh",
        language: "zh",
        name: "中文",
        file: "zh.json",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "0002",
      redirectOn: "root",
      cookieSecure: true,
    },
    experimental: {
      generatedLocaleFilePathFormat: "off",
      hmr: true
    },
  },

  site: {
    url: "https://xanzhu.com",
    name: "Xanzhu",
  },

  sitemap: {
    autoI18n: true,
    strictNuxtContentPaths: true,
    autoLastmod: true,
    xslColumns: [
      { label: "URL", width: "50%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "50%" },
    ],
    xslTips: false,
    credits: false,
  },

  routeRules: {
    "/blog/**": { isr: true },
  },

  image: {
    domains: ["cdn.xanzhu.com"],
  },

  content: {
    defaultLocale: "en",
  },

  // API
  runtimeConfig: {
    public: {
      Version: "1.0.112",
      WeatherAPI: process.env.WEATHER_API,
      i18n: {
        baseUrl: "https://xanzhu.com",
      },
    },
  },

  // ICON
  icon: {
    provider: "iconify",
    mode: "svg",
  },

  // SECURITY V1.5
  security: {
    nonce: true,
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: true,
    },
    headers: {
      contentSecurityPolicy: {
        "default-src": ["'self'", "https://*.xanzhu.com"],
        "script-src": [
          "'self'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'",
          "'unsafe-inline'",
          "https://*.xanzhu.com",
        ],
        "style-src": ["'self'", "'unsafe-inline'"],
        "base-uri": "'none'",
        "img-src": [
          "'self'",
          "https://cdn.xanzhu.com",
          "https://assets.lotofcarrots.com/media/home/section/desktop/4.webp",
          "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/AI_features_feb6.gif",
          "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/feb_6_AI_hero.width-1000.format-webp.webp",
          "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/KW_Fig1.width-1000.format-webp.webp",
          "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/KW_Fig4.width-1000.format-webp.webp",
        ],
        "media-src": [
          "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_videos/Super_G_BRD2023_blogEXP_v024a.mp4",
          "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_videos/Docs_Web_030623_1.mp4",
          "https://storage.quantum-engine.ai/Rabbits_Factory_4K_h264.mp4",
          "https://assets.lotofcarrots.com/media/home/section/desktop/4.mp4",
          "https://www.apple.com/105/media/us/macbook-air-13-and-15/2023/f52c7a72-dff4-4f3c-9511-bf08e46c6f5f/anim/design/hero/medium_2x.mp4",
          "https://www.apple.com/105/media/us/macos/sonoma-preview/2023/e6d837c5-8a7e-49d8-b0bd-137b21320db3/anim/share-preview/large_2x.mp4",
        ],
        "font-src": ["'self'"],
        "object-src": ["'none'"],
        "script-src-attr": ["'none'"],
        "connect-src": [
          "'self'",
          "https://*.xanzhu.com",
          "https://api.weatherapi.com",
          "https://api.iconify.design",
          ...(process.env.NODE_ENV === "development"
            ? ["ws://localhost:4000"]
            : []),
        ],
        "frame-src": [
          "'self'",
          "https://www.youtube.com",
          "https://youtube.com",
        ],
      },
      strictTransportSecurity: {
        maxAge: 31536000,
        includeSubdomains: true,
        preload: true,
      },
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development"
          ? "unsafe-none"
          : "credentialless",
      crossOriginOpenerPolicy: "same-origin",
      crossOriginResourcePolicy: "same-origin",
    },
    sri: true,
  },

  robots: {
    disallow: process.env.NODE_ENV === "development" ? "/" : "",
  },

  compatibilityDate: "2025-01-31",

  // Experimental Features
  experimental: {
    // buildCache: true,
    headNext: true,
  },
  future: {
    compatibilityVersion: 4,
  },

  // Testing features
  sourcemap: false,

  nitro: {
    future: {
      nativeSWR: true,
    },
  },
});
