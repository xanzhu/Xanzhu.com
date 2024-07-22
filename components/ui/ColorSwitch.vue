<template>
  <div class="hidden">
    <Icon name="fluent:weather-sunny-32-filled" />
    <Icon name="fluent:weather-moon-48-filled" />
  </div>
  <button @click="switchColor" class="bg-transparent border-none flex inline-block cursor-pointer mr-0"
    aria-label="Color Switcher">
    <Icon :name="colorIcon" class="h-6 w-6 transition-all duration-500 dark:text-black text-white" />
  </button>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

const colorIcon = computed(() => {
  return colorMode.preference === 'dark' ? 'fluent:weather-sunny-32-filled' : 'fluent:weather-moon-48-filled';
});

function switchColor() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>