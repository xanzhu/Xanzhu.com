<script setup lang="ts">
const { source, credit, thumbnail } = defineProps<{
  source: string
  credit?: string
  thumbnail?: string
}>()

const { t } = useI18n()
</script>

<template>
  <figure class="m-y-6">
    <video
      class="core-border rounded-md h-auto max-w-full w-full block object-cover"
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
      class="text-xs text-gray-600 leading-relaxed font-mono mt-1 text-left opacity-85 dark:text-light-900"
    >
      {{ t('ui.content.source') }}{{ `: ${credit}` }}
    </figcaption>
  </figure>
</template>
