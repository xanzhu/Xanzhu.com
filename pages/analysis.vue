<template>
  <div class="flex h-[78vh] items-center justify-center">
    <LazyUiAlertFeat title="Updated: 16/7/23" />
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

const seoImage = 'https://source.unsplash.com/yLDabpoCL3s'

const seoTitle = computed(() => {
  return t('Analysis.h1');
});

const seoDesc = computed(() => {
  return t('Analysis.soon');
});

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogTitle: seoTitle,
  ogDescription: seoDesc,
  twitterDescription: seoDesc,
  twitterTitle: seoTitle,
  twitterImage: seoImage,
  ogImage: seoImage,
});
</script>
