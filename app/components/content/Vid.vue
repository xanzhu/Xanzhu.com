<template>
  <figure>
    <video class="rounded-md rounded-md core-border" muted :autoplay="true" :loop="true" :controls="false" playsinline
      :poster="thumbnail">
      <source :src="source" />
    </video>
    <figcaption v-if="credit" v-bind:credit="credit">
      {{ $t("Blog.source") }}{{ ": " + credit }}
    </figcaption>
  </figure>
</template>
<script setup lang="ts">
defineProps({
  source: { type: String },
  credit: { type: String },
  thumbnail: { type: String },
});
</script>
