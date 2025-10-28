<script setup lang="ts">
interface PageLinkProps {
  title: string
  url: string
  rel?: string
}

defineProps<PageLinkProps>()
</script>

<template>
  <NuxtLink
    :to="url" target="_blank" :rel="rel"
    class="p0.2 underline-1 underline-offset-3 hover:(bg-black text-white no-underline dark:bg-white dark:text-black)"
  >
    {{ title }}
  </NuxtLink>
</template>
