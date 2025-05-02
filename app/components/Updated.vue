<template>
  <NuxtTime :datetime="date" relative :locale="$i18n.locale" />
</template>
<script setup lang="ts">
defineProps<{
  date: string;
}>();
</script>