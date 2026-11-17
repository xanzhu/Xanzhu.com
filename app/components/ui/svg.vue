<script setup lang="ts">
const { loadSVG } = defineProps<{
  loadSVG: string;
}>();
</script>

<template>
  <div class="flex h-full w-full items-center justify-center">
    <img
      v-if="loadSVG === 'beta02'"
      src="/background.svg"
      alt="background"
      aria-hidden="true"
      width="1440"
      height="910"
      decoding="async"
      fetchpriority="high"
      class="max-w-full absolute overflow-hidden -top-0.5 invert rotate-180 dark:invert-0 pointer-events-none select-none"
    />
  </div>
</template>
