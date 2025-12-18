<script setup lang="ts">
defineProps<{
  content: string
  author?: string
}>()
</script>

<template>
  <blockquote class="my-6 border border-neutral-200 rounded-lg border-solid bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
    <p class="mb-2 mt0 text-lg text-neutral-900 leading-relaxed italic dark:text-neutral-100">
      {{ content }}
    </p>
    <footer v-if="author" class="text-sm text-neutral-600 font-medium dark:text-neutral-400">
      — {{ author }}
    </footer>
  </blockquote>
</template>
