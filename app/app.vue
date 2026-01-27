<script setup lang="ts">
const head = useLocaleHead({
  dir: true,
  seo: true,
})

useSeoMeta({
  titleTemplate: '%s - Xanzhu',
})
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs?.dir" class="scroll-pt-[73px] antialiased">
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
