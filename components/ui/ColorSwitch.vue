<template>
  <button @click="switchColor" aria-label="Color Switcher" class="flex inline-block">
    <Icon
      v-if="$colorMode.preference === 'dark'"
      class="h-4.5 w-4.5"
      name="uil:sun"
    />
    <Icon v-else class="h-4 w-4 text-black" name="uil:moon" />
  </button>
</template>

<script setup lang="ts">
const c = useColorMode();

function switchColor() {
  c.preference = c.value === "dark" ? "light" : "dark";
}
</script>
