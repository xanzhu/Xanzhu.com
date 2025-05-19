<script setup lang="ts">
defineProps({
  content: { type: String, required: true },
  author: { type: String },
})
</script>

<template>
  <!-- Paragraph Quotes (Beta) v0.1 -->
  <div>
    <blockquote class="mx-auto max-w-xl flex flex-col px-4 pl-0 text-xl text-black italic op90 sm:p10 dark:text-white">
      <span class="m0 font-semibold">"{{ content }}"</span>
      <span v-if="author" class="flex justify-end text-lg font-medium">- {{ author }}</span>
    </blockquote>
  </div>
</template>
