<script setup lang="ts">
defineProps({
  source: { type: String },
  credit: { type: String },
  thumbnail: { type: String },
})

const { t } = useI18n()
</script>

<template>
  <figure class="m-y-6">
    <video
      class="block h-auto max-w-full w-full core-border rounded-md object-cover"
      muted
      autoplay
      loop
      playsinline
      :poster="thumbnail"
    >
      <source :src="source">
    </video>

    <figcaption
      v-if="credit"
      class="mt-1 text-left text-xs text-gray-600 leading-relaxed font-mono opacity-85 dark:text-light-900"
    >
      {{ t('Blog.source') }}{{ `: ${credit}` }}
    </figcaption>
  </figure>
</template>
