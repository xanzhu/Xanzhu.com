<template>
  <figure>
    <NuxtImg
      class="rounded-sm border-1 rounded-md border-light-900 dark:border-dark-300"
      :src="source"
      :alt="alt"
      :title="alt"
      loading="Lazy"
      decoding="async"
    />
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
