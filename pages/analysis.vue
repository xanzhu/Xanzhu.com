<template>
  <div class="flex min-h-screen items-center justify-center">
    <LazyUiAlertFeat date="02/09/23" />
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

const seoImage = 'https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg';

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
