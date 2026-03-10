<script setup lang="ts">
const { date } = defineProps<{
  date: string | Date | number
}>()

const { locale } = useI18n()
</script>

<template>
  <time>
    <NuxtTime :datetime="date" :locale="locale" />
  </time>
</template>
