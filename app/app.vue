<script setup lang="ts">
const head = useLocaleHead({
  dir: true,
  seo: true,
})

useSeoMeta({
  titleTemplate: '%s - Xanzhu',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://xanzhu.com/#organization',
        'name': 'Xanzhu',
        'url': 'https://xanzhu.com',
        'logo': 'https://xanzhu.com/images/favicon/logo.png',
      })),
    },
  ],
})
</script>

<template>
  <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir" class="scroll-pt-[73px] antialiased">
    <Head>
      <Link
        v-for="link in head.link"
        :key="link.id ?? link.href"
        :rel="link.rel"
        :href="link.href"
        :hreflang="link.hreflang"
      />
      <Meta
        v-for="meta in head.meta"
        :key="meta.id"
        :property="meta.property"
        :name="meta.name"
        :content="meta.content"
      />
    </Head>
    <Body class="m0 core-theme font-sans">
      <LayoutAppHeader class="sticky top-0 z-50" />
      <UiInfoBar />
      <NuxtPage />
      <LazyLayoutAppFooter />
      <LazyUiScrollButton />
    </Body>
  </Html>
</template>
