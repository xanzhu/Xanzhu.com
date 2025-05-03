<script setup lang="ts">
defineProps({
  title: { type: String },
  url: { type: String },
})
</script>

<template>
  <NuxtLink
    :to="url" target="_blank"
    class="text-brand-light decoration-none dark:text-brand-dark hover:(underline decoration-2 underline-offset-3)"
  >
    {{ title }}
  </NuxtLink>
</template>
