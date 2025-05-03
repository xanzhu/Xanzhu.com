<script setup lang="ts">
defineProps<{
  date: string
}>()
</script>

<template>
  <NuxtTime :datetime="date" month="long" day="numeric" year="numeric" :locale="$i18n.locale">
    {{ formatDate(date) }}
  </NuxtTime>
</template>
