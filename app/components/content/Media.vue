<script setup lang="ts">
const { source, credit, alt } = defineProps<{
  source: string
  credit?: string
  alt?: string
}>()

const { t } = useI18n()
</script>

<template>
  <figure class="flex flex-col w-full">
    <div class="border border-neutral-200 rounded-lg w-full overflow-hidden dark:border-neutral-800">
      <NuxtImg
        :src="source" :alt="alt" :title="alt" loading="lazy" decoding="async"
        class="rounded-lg h-auto max-w-full w-full object-contain"
      />
    </div>
    <figcaption v-if="credit" class="text-sm text-neutral-600 mt-2 dark:text-neutral-400">
      {{ `${t('ui.content.source')}: ${credit}` }}
    </figcaption>
  </figure>
</template>
