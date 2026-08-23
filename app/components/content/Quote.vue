<script setup lang="ts">
const { content, author } = defineProps<{
  content: string
  author?: string
}>()
</script>

<template>
  <blockquote class="my-6 p-4 border border-neutral-200 rounded-lg border-solid bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
    <p class="text-lg text-neutral-900 leading-relaxed mb-2 mt0 italic dark:text-neutral-100">
      {{ content }}
    </p>
    <footer v-if="author" class="text-sm text-neutral-600 font-medium dark:text-neutral-400">
      — {{ author }}
    </footer>
  </blockquote>
</template>
