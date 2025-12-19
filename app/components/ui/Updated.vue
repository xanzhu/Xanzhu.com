<script setup lang="ts">
defineProps<{
  date: string
}>()

const { locale } = useI18n()
</script>

<template>
  <NuxtTime :datetime="date" :locale="locale" />
</template>
