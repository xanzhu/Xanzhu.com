<script setup lang="ts">
const color = useColorMode()
function colorSwitch() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <!-- Add translations here -->
  <button @click="colorSwitch" aria-label="Theme Switch" class="text-dark-900 dark:text-light-200 px-1 pt-0.5">
    <IconSun v-if="color.preference === 'dark'" aria-label="Dark Mode" class="h-5 w-5" />
    <IconMoon v-else aria-label="Light mode" class="h-5 w-5" />
  </button>
</template>