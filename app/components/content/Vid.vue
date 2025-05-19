<script setup lang="ts">
defineProps({
  source: { type: String },
  credit: { type: String },
  thumbnail: { type: String },
})

const { t } = useI18n()
</script>

<template>
  <figure>
    <video
      class="rounded-md rounded-md core-border" muted :autoplay="true" :loop="true" :controls="false" playsinline
      :poster="thumbnail"
    >
      <source :src="source">
    </video>
    <figcaption v-if="credit" :credit="credit">
      {{ t("Blog.source") }}{{ `: ${credit}` }}
    </figcaption>
  </figure>
</template>
