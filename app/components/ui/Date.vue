<script setup lang="ts">
defineProps<{
  date: string | Date | number
}>()

const { locale } = useI18n()
</script>

<template>
  <NuxtTime
    :datetime="date"
    :locale="locale"
    month="long"
    day="numeric"
    year="numeric"
  />
</template>
