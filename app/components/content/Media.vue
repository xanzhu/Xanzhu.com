<template>
  <figure class="flex flex-col object-cover">
    <NuxtImg class="rounded-lg dark:bg-white bg-black core-border" :src="source" :alt="alt" :title="alt" loading="lazy"
      decoding="async" />
    <figcaption v-if="credit" v-bind:credit="credit">
      {{ $t("Blog.source") + ": " + credit }}
    </figcaption>
  </figure>
</template>
<script setup lang="ts">
defineProps({
  source: { type: String },
  credit: { type: String },
  alt: { type: String },
});
</script>