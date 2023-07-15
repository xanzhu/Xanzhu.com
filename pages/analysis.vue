<template>
  <div class="flex flex-col justify-center items-center h-[78vh]">
    <LazyUiAlertFeat title="Updated: 16/7/23" />
    <!-- <div class="flexflex-col items-center space-y-5 lg:max-w-lg xl:max-w-2xl">
      <h1 class="text-5xl font-bold">{{ seoTitle }}</h1>
      <p class="dark:(opacity-100) opacity-80 p-2">
        {{ seoDesc }}
      </p>
    </div> -->
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
