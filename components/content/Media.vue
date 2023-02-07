<template>
  <figure>
    <NuxtImg
      class="rounded-md"
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
