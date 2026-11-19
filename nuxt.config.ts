import process from "node:process";
import pkg from "./package.json" with { type: "json" };

const isDev = process.env.NODE_ENV === "development";
const siteUrl = "https://xanzhu.com";
const cdnUrl = "https://cdn.xanzhu.com";

export default defineNuxtConfig({
  devtools: { enabled: isDev },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@unocss/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-security",
    "@nuxt/fonts",
    "@nuxt/scripts",
    "@nuxt/a11y",
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "format-detection", content: "telephone=no" },
        { name: "color-scheme", content: "dark light" },
        { name: "naver-site-verification", content: "efe8928c52c47ffddfbd678ff1ac6fe5ca08b009" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico", sizes: "32x32" },
        { rel: "icon", type: "image/svg+xml", href: "/icon.svg", sizes: "any" },
        { rel: "preconnect", href: cdnUrl, crossorigin: "anonymous" },
      ],
    },
  },

  colorMode: {
    preference: "system",
    fallback: "dark",
    storageKey: "xanzhu-color-mode",
  },

  // i18n V10
  i18n: {
    defaultLocale: "en",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        language: "en-NZ",
        name: "English",
        files: ["en.ts"],
      },
      {
        code: "ko",
        language: "ko-KR",
        name: "한국어",
        files: ["ko.ts"],
      },
      {
        code: "zh",
        language: "zh-Hans",
        name: "简体中文",
        files: ["zh.ts"],
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "xanzhu-i18n",
      redirectOn: "root",
      cookieSecure: true,
    },
    experimental: {
      compactRoutes: true,
    },
  },

  site: {
    url: siteUrl,
    name: "Xanzhu",
  },

  // Sitemap
  sitemap: {
    autoI18n: true,
    autoLastmod: true,
    xslColumns: [
      { label: "URL", width: "50%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "50%" },
    ],
    xslTips: false,
    credits: false,
    cacheMaxAgeSeconds: 3600,
    zeroRuntime: true,
    discoverImages: true,
    exclude: ["/health"],
  },

  routeRules: {
    "/**": {
      headers: {
        "Cache-Control": "public, max-age=0, must-revalidate, s-maxage=604800",
      },
    },
    "/_nuxt/**": {
      headers: { "Cache-Control": "public, max-age=31536000, immutable" },
    },
    "/images/**": {
      headers: { "Cache-Control": "public, max-age=2592000, stale-while-revalidate=86400" },
    },
    "/health": {
      security: { headers: false },
      prerender: false,
      headers: { "Cache-Control": "no-store", "x-robots-tag": "nofollow, noindex" },
    },
  },

  content: {
    experimental: { sqliteConnector: "native" },
    database: isDev
      ? { type: "sqlite", filename: ".data/content/contents.sqlite" }
      : { type: "d1", bindingName: "DB" },
    build: {
      markdown: {
        highlight: false,
      },
    },
  },

  // API
  runtimeConfig: {
    public: {
      version: pkg.version,
      i18n: {
        baseUrl: siteUrl,
      },
    },
  },

  // ICON
  icon: {
    mode: "svg",
    clientBundle: { scan: true, sizeLimitKb: 128 },
    serverBundle: {
      collections: ["lucide", "line-md", "ri"],
    },
  },

  // SECURITY
  security: {
    nonce: true,
    corsHandler: false,
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: true,
    },
    headers: {
      contentSecurityPolicy: {
        "default-src": ["'self'"],
        "script-src": ["'self'", "'nonce-{{nonce}}'", "'strict-dynamic'", "'wasm-unsafe-eval'"],
        "style-src": ["'self'", isDev ? "'unsafe-inline'" : "'nonce-{{nonce}}'", cdnUrl],
        "frame-ancestors": ["'self'"],
        "base-uri": "'none'",
        "img-src": ["'self'", "data:", cdnUrl, "https://i.ytimg.com"],
        "media-src": ["'self'", cdnUrl, "https://www.apple.com"],
        "font-src": ["'self'", "data:"],
        "object-src": ["'none'"],
        "script-src-attr": [
          "'unsafe-hashes'",
          "'sha256-bwK6T5wZVTANitXbrTsel7kl/PyCjCd/Dq5Qoz3imjM='", // Tied to nuxt/img onError
          "'sha256-mBvouFQXZ+YpxtV0t+4I0l1LKREvZlkEWrzJDXRRXXU='", // Tied to mousedown
        ],
        "style-src-attr": ["'unsafe-inline'"],
        "form-action": ["'self'"],
        "connect-src": [
          "'self'",
          cdnUrl,
          "https://api.iconify.design",
          ...(isDev ? ["ws://localhost:*"] : []),
        ],
        "frame-src": ["'self'", "https://www.youtube-nocookie.com"],
        "upgrade-insecure-requests": !isDev,
      },
      strictTransportSecurity: {
        maxAge: 31536000,
        includeSubdomains: true,
        preload: true,
      },
      permissionsPolicy: {
        camera: [],
        "display-capture": [],
        fullscreen: ["self"],
        geolocation: [],
        microphone: [],
        payment: [],
        "publickey-credentials-get": [],
      },
      crossOriginEmbedderPolicy: "unsafe-none",
      crossOriginOpenerPolicy: "same-origin",
      crossOriginResourcePolicy: "same-origin",
      // Disabled deprecated options: 01/09
      xXSSProtection: false,
      xPermittedCrossDomainPolicies: false,
      xDownloadOptions: false,
    },
    sri: true,
  },

  compatibilityDate: "2026-11-17",

  scripts: {
    privacy: true,
  },

  sourcemap: isDev,

  nitro: {
    prerender: {
      crawlLinks: true,
    },

    minify: !isDev,
    compressPublicAssets: true,
    preset: isDev ? "node" : "cloudflare_module", // Fix for Dev mode
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

  experimental: {
    nitroAutoImports: true, // Temp fix problems with modules not supporting Nuxt 4.6 imports syntax
    typedPages: false, // Temp disabled waiting for correct method w i18n
  },

  // Experimental Vue Features
  // experimental: {
  //   extractAsyncDataHandlers: true,
  //   payloadExtraction: "client",
  // },

  vite: {
    build: {
      cssMinify: "lightningcss",
    },
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit", "@vueuse/core"],
    },
  },

  future: {
    compatibilityVersion: 5,
  },
});
