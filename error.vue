<template>
  <div class="dark:bg-black bg-white">
    <div class="flex justify-center items-center h-screen">
      <GlobalAppError />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object,
});
</script>

<style>
html {
  background-color: #000;
}
</style>
