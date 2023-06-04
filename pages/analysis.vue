<template>
  <div class="flex justify-center items-center h-[70%]">
    <LazyUiAlertFeat title="Updated: 23/4/23" />
    <div class="flex flex-col items-center space-y-5 lg:max-w-lg xl:max-w-2xl">
      <h1 class="text-5xl font-bold">{{ title }}</h1>
      <p class="dark:(bg-dark-900 border-dark-700 opacity-100) opacity-80 p-2 border-1 xl:max-w-lg">
        {{ desc }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t, locale } = useI18n();

const title = t("Analysis.h1");
const desc = t("Analysis.soon");
const image = 'https://source.unsplash.com/yLDabpoCL3s'

useSeoMeta({
  title: title,
  description: desc,
  ogTitle: title,
  ogDescription: desc,
  twitterDescription: desc,
  twitterTitle: title,
  twitterImage: image,
  ogUrl: `https://xanzhu.com${locale.value === "en" ? "" : `/${locale.value}`}/analysis`,
  ogImage: image,
  // Disable index while under development
  robots: "noindex"
});
</script>
