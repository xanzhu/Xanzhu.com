<script setup lang="ts">
const id = useId()
const { t } = useI18n()
</script>

<template>
  <aside
    class="mt-6 border border-neutral-200 rounded-lg bg-neutral-50 p-4 text-sm dark:border-neutral-800 dark:bg-neutral-900"
    :aria-labelledby="id"
  >
    <h3
      :id="id"
      class="m0 text-sm text-neutral-900 font-medium dark:text-neutral-100"
    >
      {{ t('blog.article.changelog') }}
    </h3>

    <ul class="p0 text-neutral-700 space-y-2 dark:text-neutral-300">
      <slot />
    </ul>
  </aside>
</template>
