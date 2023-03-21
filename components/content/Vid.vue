<template>
  <figure>
    <video class="rounded-sm" muted :autoplay="true" :loop="true" :poster="thumbnail">
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
  thumbnail: {type: String}
});
</script>
