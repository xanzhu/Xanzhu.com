<script setup>
const { t } = useI18n();
const seoTitle = computed(() => t("app.seo.advisoryTitle"));
const seoDesc = computed(() => t("app.seo.advisoryDesc"));

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogTitle: seoTitle,
  ogDescription: seoDesc,
  ogImage: "https://cdn.xanzhu.com/2026/defaults/xanzhu-default-page.webp",
});
</script>

<template>
  <div class="flex-1 justify-center items-center flex bg-green-500">
    <UiAlertFeat />
  </div>
</template>
