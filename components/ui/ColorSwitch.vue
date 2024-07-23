<template>
  <div class="hidden">
    <Icon name="line-md:moon-filled-alt-to-sunny-filled-loop-transition" />
    <Icon name="line-md:moon-filled-alt-loop" />
  </div>
  <button @click="switchColor" class="bg-transparent border-none flex inline-block cursor-pointer mr-0"
    aria-label="Color Switcher">
    <Icon :name="colorIcon" class="h-6 w-6 transition-all duration-500 dark:text-black text-white" />
  </button>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

const colorIcon = computed(() => {
  return colorMode.preference === 'dark' ? 'line-md:moon-filled-alt-to-sunny-filled-loop-transition' : 'line-md:moon-filled-alt-loop';
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