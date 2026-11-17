<script setup lang="ts">
import type { Collections } from "@nuxt/content";
import AlertFeat from "~/components/ui/AlertFeat.vue";

const { locale, t } = useI18n();

const collection = computed(() => `resources_${locale.value}` as keyof Collections);

const { data: allContent } = await useAsyncData(
  `resources-index-${locale.value}`,
  () => queryCollection(collection.value).all(),
  { dedupe: "defer" },
);

const pageIndex = computed(() => {
  return allContent.value?.find(
    (item) =>
      item.id === `${collection.value}/resources/index.md` ||
      item.id === `${collection.value}/${locale.value}/resources/index.md`,
  );
});

const seoTitle = computed(() => t("app.seo.resourcesTitle"));
const seoDesc = computed(() => t("app.seo.resourcesDesc"));

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogTitle: seoTitle,
  ogDescription: seoDesc,
  ogImage: "https://cdn.xanzhu.com/2026/defaults/xanzhu-default-page.webp",
  ogType: "website",
  ogImageWidth: 1200,
  ogImageHeight: 630,
});
</script>

<template>
  <AlertFeat />
  <div class="text-neutral-9 bg-white flex flex-col 2xl:px35 md:(py4 flex-row gap-4) xl:px28">
    <LazyResourcesSidebar />

    <main
      v-if="pageIndex"
      class="text-neutral-900 p5 b-1 border-neutral-300 b-solid flex flex-1 flex-col dark:text-neutral-300"
      tabindex="-1"
      aria-labelledby="page-title"
    >
      <h1 id="page-title" class="text-2xl text-white m0 px4 py2 bg-black flex w-fit">
        {{ pageIndex.title }}
      </h1>
      <p class="text-neutral-900 m0 px4 py3 b-1 b-neutral-300 b-solid bg-neutral-100 w-fit">
        {{ pageIndex.description }}
      </p>

      <ContentRenderer :value="pageIndex" class="max-w-none prose" aria-label="Main content" />
    </main>
  </div>
</template>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
</style>
