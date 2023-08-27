export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxt/image",
    "@unocss/nuxt",
    "nuxt-simple-sitemap",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-simple-robots",
  ],

  colorMode: {
    classSuffix: "",
    preference: "dark",
  },
  app: {
    head: {
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

  // i18n Beta 13
  i18n: {
    vueI18n: "i18n.config.ts",
    baseUrl: "https://xanzhu.com",
    defaultLocale: "en",
    lazy: true,
    strategy: "prefix_except_default",
    langDir: "locales",
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
      cookieKey: "xanzhu-2",
      redirectOn: "root",
      // alwaysRedirect: true,
    },
  },

  // Sitemap V3 Syntax
  site: {
    url: "https://xanzhu.com",
  },

  sitemap: {
    // autoAlternativeLangPrefixes: false,
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
    "/blog/**": {
      isr: 3000,
    },
    "/ko/blog/**": {
      isr: 3000,
    },
    "/zh/blog/**": {
      isr: 3000,
    },
  },

  // Vercel Analytics
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],

  // Experimental Nuxt Features
  // experimental: {
  //   headNext: true
  // }
});
