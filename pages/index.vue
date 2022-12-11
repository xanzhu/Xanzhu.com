<script setup lang="ts">
const path = useRoute()
const { t } = useI18n()

const desc = t('meta.description');
const title = t('meta.title')

useHead({
  title: title,
  meta: [
    { property: 'og:title', content: title },
    // Reduce description char size
    { name: 'description', content: desc },
    { property: 'og:description', content: desc },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: desc },
    { property: 'og:url', content: `https://xanzhu.com${path}` }
    // Add og:image
  ]
})

</script>
<template>
  <div class="scroll-smooth space-y-10 mb-10">
    <UILanding class="md:h-[42rem]" />
    <UIFeature class="sm:mx-10" />
  </div>
</template>
