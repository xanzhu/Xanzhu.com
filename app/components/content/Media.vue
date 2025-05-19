<script setup lang="ts">
defineProps({
  source: { type: String },
  credit: { type: String },
  alt: { type: String },
})

const { t } = useI18n()
</script>

<template>
  <figure class="w-full flex flex-col">
    <div class="w-full overflow-hidden border border-neutral-200 rounded-lg dark:border-neutral-800">
      <NuxtImg
        :src="source" :alt="alt" :title="alt" loading="lazy" decoding="async"
        class="h-auto max-w-full w-full rounded-lg object-contain"
      />
    </div>
    <figcaption v-if="credit" class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
      {{ `${t('Blog.source')}: ${credit}` }}
    </figcaption>
  </figure>
</template>
