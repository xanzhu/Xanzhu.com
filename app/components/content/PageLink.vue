<script setup lang="ts">
const { title, url, rel } = defineProps<{
  title: string
  url: string
  rel?: string
}>()
</script>

<template>
  <NuxtLink
    :to="url" target="_blank" :rel="rel"
    class="p0.2 underline-1 underline-offset-3 hover:(text-white bg-black no-underline dark:text-black dark:bg-white)"
  >
    {{ title }}
  </NuxtLink>
</template>
