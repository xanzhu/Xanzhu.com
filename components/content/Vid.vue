<template>
  <figure>
    <video class="rounded-md b-1 b-solid rounded-md border-light-5 dark:border-dark-7" muted :autoplay="true" :loop="true"
      :controls="false" playsinline :poster="thumbnail">
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
