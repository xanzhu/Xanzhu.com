export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "format-detection", content: "telephone=no" },
        { name: "twitter:site", content: "@xanzhu1" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: light)",
          content: "#fff",
        },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: dark)",
          content: "#000",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
          sizes: "any",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
          sizes: "32x32",
          media: "(prefers-color-scheme:light)",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-dark.png",
          sizes: "32x32",
          media: "(prefers-color-scheme:dark)",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-180-dark.png",
        },
        { rel: "mask-icon", href: "/favicon.svg", color: "#FDFDFD" },
      ],
    },
  },
  css: ["virtual:windi.css"],
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "nuxt-windicss",
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
    "nuxt-simple-sitemap",
  ],
  i18n: {
    vueI18n: {
      fallbackLocale: ["en", "ko", "zh"],
      legacy: false,
    },
    baseUrl: process.env.BASE_URL,
    defaultLocale: "en",
    strategy: "prefix_and_default",
    langDir: "i18n",
    trailingSlash: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "xanzhu-i18n-v2",
      redirectOn: "root",
      alwaysRedirect: true,
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
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  sitemap: {
    hostname: process.env.BASE_URL,
  },
});
