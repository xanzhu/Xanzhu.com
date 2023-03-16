<template>
  <time :datetime="date">
    {{ formatDate(date) }}
  </time>
</template>
<script setup lang="ts">
defineProps<{
  date: string;
}>();
</script>
