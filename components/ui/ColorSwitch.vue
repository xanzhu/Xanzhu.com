<template>
  <button @click="switchColor" class="bg-transparent b-hidden flex inline-block cursor-pointer mr0"
    aria-label="Color Switcher">
    <span v-if="$colorMode.preference === 'dark'" class="h4.5 w4.5 text-white i-tabler-sun" />
    <span v-else class="h5 w5 text-black i-tabler-moon" />
  </button>
</template>
<script setup lang="ts">
const c = useColorMode();

function switchColor() {
  c.preference = c.value === "dark" ? "light" : "dark";
}
</script>
