<template>
  <Html v-if="head.htmlAttrs" :lang="head.htmlAttrs.lang" class="bg-black">

  <Head>
    <template v-for="link in head.link" :key="link.id">
      <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
    </template>
    <template v-for="meta in head.meta" :key="meta.id">
      <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
    </template>
  </Head>
  <div class="m0 font-sans dark:(bg-black text-white) text-black bg-white">
    <AppHeaderV2 class="sticky top-0 z-1" />
    <UiInfoBar />
    <NuxtPage />
    <LazyAppFooterV2 />
  </div>

  </Html>
</template>
<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

useHead({
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
      href: "/images/favicon/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  meta: [
    { name: 'naver-site-verification', content: '' },
    { name: 'og:logo', content: 'https://xanzhu.com/images/favicon/logo.png' }
  ]
})

useSeoMeta({
  titleTemplate: '%s - Xanzhu',
  twitterCard: 'summary_large_image',
})

// Static Meta Configuration
useServerSeoMeta({
  ogType: 'website',
  ogSiteName: 'Xanzhu',
  charset: 'utf-8',
  formatDetection: 'telephone=no',
  colorScheme: 'dark light'
})

</script>
<style>
body {
  margin: 0;
}
</style>