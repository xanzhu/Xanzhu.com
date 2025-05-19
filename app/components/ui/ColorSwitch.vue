<script lang="ts" setup>
const colorMode = useColorMode()

const colorIcon = computed(() => {
  return colorMode.preference === 'dark' ? 'line-md:moon-filled-alt-to-sunny-filled-loop-transition' : 'line-md:moon-filled-alt-loop'
})

function switchColor() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="hidden">
    <Icon name="line-md:moon-filled-alt-to-sunny-filled-loop-transition" />
    <Icon name="line-md:moon-filled-alt-loop" />
  </div>
  <button
    class="mr-0 inline-block flex cursor-pointer border-none bg-transparent" aria-label="Color Switcher"
    @click="switchColor"
  >
    <Icon :name="colorIcon" class="h-6 w-6 text-black transition-all duration-500 dark:text-white" />
  </button>
</template>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
