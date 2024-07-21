export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@unocss/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-simple-robots",
    "@nuxt/image",
    "nitro-cloudflare-dev",
    "nuxt-security",
  ],

  colorMode: {
    classSuffix: "",
    preference: "dark",
  },

  i18n: {
    baseUrl: "https://xanzhu.com",
    defaultLocale: "en",
    lazy: true,
    strategy: "prefix_except_default",
    langDir: "assets/locales",
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "ko",
        iso: "ko",
        name: "한국어",
        file: "ko.json",
      },
      {
        code: "zh",
        iso: "zh",
        name: "中文",
        file: "zh.json",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "0002",
      redirectOn: "root",
    },
  },

  site: {
    url: "https://xanzhu.com",
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

  nitro: {
    preset: "cloudflare-pages",
  },

  image: {
    domains: ["source.unsplash.com"],
  },

  content: {
    defaultLocale: "en",
    experimental: {
      search: true,
    },
  },

  runtimeConfig: {
    public: {
      WEATHER_API: process.env.WEATHER_API,
    },
  },

  security: {
    nonce: true,
    ssg: {
      meta: true, // Enables CSP as a meta tag in SSG mode
      hashScripts: true, // Enables CSP hash support for scripts in SSG mode
      hashStyles: false, // Disables CSP hash support for styles in SSG mode (recommended)
    },
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "unsafe-none",
      contentSecurityPolicy: {
        "script-src": [
          "'self'", // Fallback value, will be ignored by most modern browsers (level 3)
          "https:", // Fallback value, will be ignored by most modern browsers (level 3)
          "'unsafe-inline'", // Fallback value, will be ignored by almost any browser (level 2)
          "'strict-dynamic'", // Strict CSP via 'strict-dynamic', supported by most modern browsers (level 3)
          "'nonce-{{nonce}}'", // Enables CSP nonce support for scripts in SSR mode, supported by almost any browser (level 2)
        ],
        "style-src": [
          "'self'", // Enables loading of stylesheets hosted on same origin
          "https:", // For increased security, replace by the specific hosting domain or file name of your external stylesheets
          "'unsafe-inline'", // Recommended default for most Nuxt apps
        ],
        "base-uri": ["'none'"],
        "img-src": [
          "'self'",
          "data:",
          "https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg",
        ],
        "font-src": ["'self'", "https:", "data:"],
        "object-src": ["'none'"],
        "script-src-attr": ["'none'"],
        "upgrade-insecure-requests": true,
        "connect-src": [
          "'self'",
          "https://web-platforms.sfo2.digitaloceanspaces.com",
          "https://api.weatherapi.com",
        ],
      },
      strictTransportSecurity: {
        includeSubdomains: true,
        maxAge: 63072000,
        preload: true,
      },
      crossOriginResourcePolicy: "cross-origin",
      crossOriginOpenerPolicy: "unsafe-none",
    },
  },
});
