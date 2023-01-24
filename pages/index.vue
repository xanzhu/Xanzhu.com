<template>
  <div class="scroll-smooth sm:space-y-10 mb-10">
    <LandingMainBlock />
    <LandingFeatureBlock class="sm:mx-10 2xl:(max-w-[80%] mx-auto)" />
  </div>
</template>
<script setup lang="ts">
const path = useRoute();
const { t } = useI18n();
const desc = t("Landing.meta.description");
const title = t("Landing.meta.title");

useSeoMeta({
  title: title,
  ogTitle: title,
  description: desc,
  ogDescription: desc,
  ogImage: "https://source.unsplash.com/Q1p7bh3SHj8",
  twitterTitle: title,
  twitterDescription: desc,
  ogUrl: `https://xanzhu.com${path}`,
});
</script>
