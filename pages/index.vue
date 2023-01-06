<template>
  <div class="scroll-smooth space-y-10 mb-10">
    <LandingMainBlock />
    <LandingFeatureBlock class="sm:mx-10" />
  </div>
</template>
<script setup lang="ts">
const path = useRoute()
const { t } = useI18n()

// Update this
const desc = t('Landing.meta.description');
const title = t('Landing.meta.title')

useHead({
  title: title,
  meta: [
    { property: 'og:title', content: title },
    { name: 'description', content: desc },
    { property: 'og:description', content: desc },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: desc },
    { property: 'og:url', content: `https://xanzhu.com${path}` },
    { property: 'og:image', content: 'https://source.unsplash.com/Q1p7bh3SHj8' }
  ]
})
</script>
