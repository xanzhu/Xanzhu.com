<script setup lang="ts">
const { t } = useI18n();
const seoTitle = () => t("app.seo.homeTitle");
const seoDesc = () => t("app.seo.homeDesc");

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
  <HomeHero />
</template>
