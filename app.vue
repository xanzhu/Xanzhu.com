<template>
  <div class="min-h-screen font-main">
    <Html v-if="head.htmlAttrs" :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

    <Head>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <AppHeader
      class="sticky top-0 z-1 transition-transform duration-700 backdrop-blur-md backdrop-filter dark:backdrop-brightness-70" />
    <NuxtPage />
    <LazyAppFooter />

    </Html>
  </div>
</template>
<script setup lang="ts">
import "@fontsource/open-sans";

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

useHead({
  bodyAttrs: {
    class: "dark:(bg-black text-white) bg-white text-black",
  },
});

useSeoMeta({
  titleTemplate: "%s | Xanzhu",
  ogType: "website",
  ogSiteName: "Xanzhu",
});
</script>
