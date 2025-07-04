<script setup lang="ts">
const head = useLocaleHead({
  dir: true,
  seo: true,
})

useHead({
  link: [
    {
      rel: 'mask-icon',
      href: '/images/favicon/favicon.svg',
      color: '#FDFDFD',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/images/favicon/favicon.svg',
      sizes: 'any',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/images/favicon/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'preconnect',
      href: 'https://cdn.xanzhu.com',
      crossorigin: 'anonymous',
    },
  ],
  meta: [
    { name: 'naver-site-verification', content: '' },
    { name: 'og:logo', content: 'https://xanzhu.com/images/favicon/logo.png' },
  ],
})

useSeoMeta({
  titleTemplate: '%s - Xanzhu',
  twitterCard: 'summary_large_image',
  ogType: 'website',
  ogSiteName: 'Xanzhu',
  charset: 'utf-8',
  formatDetection: 'telephone=no',
  colorScheme: 'dark light',
})
</script>

<template>
  <Html v-if="head.htmlAttrs" :lang="head.htmlAttrs.lang" class="scroll-pt-[73px] antialiased">
    <Head>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body class="m0 core-theme font-sans">
      <AppHeader class="sticky top-0 z-20" />
      <UiInfoBar />
      <NuxtPage />
      <LazyAppFooter />
    </Body>
  </Html>
</template>
