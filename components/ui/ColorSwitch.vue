<template>
  <button
    @click="switchColor"
    class="bg-transparent b-hidden flex inline-block cursor-pointer mr0"
    aria-label="Color Switcher"
  >
    <Icon
      v-if="$colorMode.preference === 'dark'"
      class="h4.5 w4.5 text-white"
      name="uil:sun"
    />
    <Icon v-else class="h5 w5 text-black" name="uil:moon" />
  </button>
</template>
<script setup lang="ts">
  const c = useColorMode();

  function switchColor() {
    c.preference = c.value === "dark" ? "light" : "dark";
  }
</script>
