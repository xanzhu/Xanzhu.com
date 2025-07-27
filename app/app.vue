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
      <UiScrollButton />
    </Body>
  </Html>
</template>
