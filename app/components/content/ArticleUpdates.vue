<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div
    class="text-sm mt-6 p-4 border border-neutral-200 rounded-lg bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900"
  >
    <p class="text-sm text-neutral-900 font-medium m0 mb-2 dark:text-neutral-100">
      {{ t("common.article.changelog") }}
    </p>

    <div class="text-neutral-700 dark:text-neutral-300 [&_ul]:(m0 pl-6 space-y-2)">
      <slot />
    </div>
  </div>
</template>
