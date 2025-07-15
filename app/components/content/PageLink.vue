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
    class="text-brand-light decoration-none dark:text-brand-dark hover:(underline decoration-2 underline-offset-3)"
  >
    {{ title }}
  </NuxtLink>
</template>
