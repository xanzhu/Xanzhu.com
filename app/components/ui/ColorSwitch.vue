<script setup lang="ts">
const colorMode = useColorMode()
const colorIcon = computed(() =>
  colorMode.value === 'dark'
    ? 'line-md:moon-filled-alt-to-sunny-filled-loop-transition'
    : 'line-md:moon-filled-alt-loop',
)
function switchColor() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="mr-0 inline-block w-8 flex cursor-pointer items-center justify-center border-none bg-transparent <sm:py1"
    :aria-label="colorMode.value === 'dark' ? $t('v2.colorSwitch.light') : $t('v2.colorSwitch.dark')"
    @click="switchColor"
  >
    <ColorScheme>
      <Icon :name="colorIcon" class="h6 w6 text-black transition-all duration-500 dark:text-white" />
      <template #fallback>
        <span class="inline-block h-6 w-6" aria-hidden="true" />
      </template>
    </ColorScheme>
  </button>
</template>
