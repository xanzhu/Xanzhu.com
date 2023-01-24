<template>
  <div class="h-screen flex flex-col">
    <Html
      v-if="head.htmlAttrs"
      :lang="head.htmlAttrs.lang"
      :dir="head.htmlAttrs.dir"
    >
      <Head>
        <template v-for="link in head.link" :key="link.id">
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <GlobalAppHeader />
      <NuxtPage class="flex-1" />
      <GlobalAppFooter />
    </Html>
  </div>
</template>
<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Xanzhu` : "Xanzhu";
  },
  bodyAttrs: {
    class: "dark:(bg-black text-white) bg-white text-black",
  },
});

useSeoMeta({
  ogType: "website",
  ogSiteName: "Xanzhu",
});
</script>
