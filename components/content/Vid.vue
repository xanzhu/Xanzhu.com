<template>
  <figure>
    <video
      class="rounded-sm border-1 rounded-md border-light-900 dark:border-dark-300"
      muted
      :autoplay="true"
      :loop="true"
      :poster="thumbnail"
    >
      <source :src="source" />
    </video>
    <figcaption v-if="credit" v-bind:credit="credit">
      {{ t("Blog.source") }}{{ ": " + credit }}
    </figcaption>
  </figure>
</template>
<script setup lang="ts">
const { t } = useI18n();

defineProps({
  source: { type: String },
  credit: { type: String },
  thumbnail: { type: String },
});
</script>
