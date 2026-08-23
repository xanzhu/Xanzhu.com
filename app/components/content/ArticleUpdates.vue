<script setup lang="ts">
const changeId = useId()
const { t } = useI18n()
</script>

<template>
  <aside
    class="text-sm mt-6 p-4 border border-neutral-200 rounded-lg bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900"
    :aria-labelledby="changeId"
  >
    <h3
      :id="changeId"
      class="text-sm text-neutral-900 font-medium m0 dark:text-neutral-100"
    >
      {{ t('blog.article.changelog') }}
    </h3>

    <ul class="text-neutral-700 p0 space-y-2 dark:text-neutral-300">
      <slot />
    </ul>
  </aside>
</template>
