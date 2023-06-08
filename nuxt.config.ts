export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-simple-sitemap",
    "@unocss/nuxt",
    "@nuxtjs/web-vitals",
  ],

  colorMode: {
    classSuffix: "",
    preference: "dark",
  },

  app: {
    head: {
      meta: [
        { name: "format-detection", content: "telephone=no" },
        { name: "twitter:site", content: "@xanzhu1" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        {
          rel: "mask-icon",
          href: "/images/favicon/favicon.svg",
          color: "#FDFDFD",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/images/favicon/favicon.svg",
          sizes: "any",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/images/favicon/favicon.png",
          sizes: "32x32",
          media: "(prefers-color-scheme:light)",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/images/favicon/favicon-dark.png",
          sizes: "32x32",
          media: "(prefers-color-scheme:dark)",
        },
      ],
    },
  },

  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    lazy: true,
    langDir: "i18n",
    vueI18n: "./i18n.config.ts",
    // experimental: {
    //   jsTsFormatResource: true,
    // },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "xanzhu-i18n-v6",
      redirectOn: "root",
      // alwaysRedirect: true,
    },
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
  },

  runtimeConfig: {
    public: {
      siteUrl: "https://xanzhu.com" || process.env.NUXT_PUBLIC_SITE_URL,
      i18n: {
        baseUrl: "https://xanzhu.com" || process.env.NUXT_PUBLIC_I18N_BASE_URL,
      },
    },
  },

  devtools: {
    enabled: true,
  },

  // Testing: Simple Sitemap
  sitemap: {
    sitemaps: false,
    trailingSlash: false,
    autoLastmod: true,
    discoverImages: true,

    // i18n support?
    autoAlternativeLangPrefixes: undefined,
  },

  // Nitro
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/ko", "/zh"],
    },
    // Testing: Route Rules
    routeRules: {
      "/blog/**": {
        sitemap: { changefreq: "daily", priority: 0.3 },
        isr: 3000,
      },
      "/ko/blog/**": {
        sitemap: { changefreq: "daily", priority: 0.3 },
        isr: 3000,
      },
      "/zh/blog/**": {
        sitemap: { changefreq: "daily", priority: 0.3 },
        isr: 3000,
      },
    },
  },

  // Vercel Analytics
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
});
