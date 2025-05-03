<script setup lang="ts">
defineProps({
  source: { type: String },
  credit: { type: String },
  alt: { type: String },
})

const { t } = useI18n()
</script>

<template>
  <figure class="flex flex-col object-cover">
    <NuxtImg
      class="rounded-lg bg-black core-border dark:bg-white" :src="source" :alt="alt" :title="alt" loading="lazy"
      decoding="async"
    />
    <figcaption v-if="credit" :credit="credit">
      {{ `${t("Blog.source")}: ${credit}` }}
    </figcaption>
  </figure>
</template>
