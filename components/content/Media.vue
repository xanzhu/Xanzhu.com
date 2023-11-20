<template>
  <figure class="flex flex-col object-cover">
    <NuxtImg class="rounded-md dark:bg-white bg-black b-1 b-solid border-light-5 dark:border-dark-700" :src="source"
      :alt="alt" :title="alt" loading="lazy" decoding="async" />
    <figcaption v-if="credit" v-bind:credit="credit">
      {{ t("Blog.source") + ": " + credit }}
    </figcaption>
  </figure>
</template>
<script setup lang="ts">
const { t } = useI18n();

defineProps({
  source: { type: String },
  credit: { type: String },
  alt: { type: String },
});
</script>
<style>
.prose figure figcaption {
  color: #000;
  font-size: 12px;
  letter-spacing: 0.025em;
  opacity: 0.7;
}

@media (prefers-color-scheme: dark) {
  .dark .prose figure figcaption {
    color: white;
  }
}
</style>
