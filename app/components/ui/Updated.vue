<script setup lang="ts">
defineProps<{
  date: string
}>()
</script>

<template>
  <NuxtTime :datetime="date" relative :locale="$i18n.locale" />
</template>
