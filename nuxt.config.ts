export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "nuxt-windicss",
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-simple-sitemap",
  ],
  colorMode: {
    classSuffix: "",
    preference: "dark",
  },
  css: ["virtual:windi.css"],
  app: {
    head: {
      meta: [
        { name: "format-detection", content: "telephone=no" },
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
    langDir: "locales",
    baseUrl: "https://xanzhu.com",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "xanzhu-i18n-v5",
      redirectOn: "root",
      alwaysRedirect: true,
    },
    vueI18n: {
      legacy: false,
      fallbackLocale: ["en", "ko", "zh"],
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
  sitemap: {
    siteUrl: "https://xanzhu.com",
  },
  routeRules: {
    "/ko/blog": { sitemap: { changefreq: "weekly" } },
    "/zh/blog": { sitemap: { changefreq: "weekly" } },
    "/blog": { sitemap: { changefreq: "weekly" } },
  },
});
