<template>
  <div class="scroll-smooth sm:space-y-10 mb-10">
    <LandingMainBlock />
    <LandingFeatureBlock class="sm:mx-10 2xl:(max-w-[80%] mx-auto)" />
  </div>
</template>
<script setup lang="ts">
const path = useRoute();
const { t } = useI18n();

// Update this
const desc = t("Landing.meta.description");
const title = t("Landing.meta.title");

useHead({
  title: title,
  meta: [
    { property: "og:title", content: title },
    { name: "description", content: desc },
    { property: "og:description", content: desc },
    { property: "twitter:title", content: title },
    { property: "twitter:description", content: desc },
    { property: "og:url", content: `https://xanzhu.com${path}` },
    {
      property: "og:image",
      content: "https://source.unsplash.com/Q1p7bh3SHj8",
    },
  ],
});
</script>
