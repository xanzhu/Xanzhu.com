<script setup lang="ts">
const { t } = useI18n()
const colorMode = useColorMode()
const colorIcon = computed(() =>
  colorMode.value === 'dark'
    ? 'line-md:sunny-filled'
    : 'line-md:moon-filled-alt-loop',
)
function switchColor() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="px1.5 py0.5 pt1.5 b-none bg-transparent cursor-pointer"
    :aria-label="colorMode.value === 'dark' ? t('ui.colorMode.light') : t('ui.colorMode.dark')"
    @click="switchColor"
  >
    <ColorScheme>
      <Icon :name="colorIcon" class="text-black h6 w6 transition-colors duration-500 dark:text-white" />
      <template #fallback>
        <span class="h6 w6 inline-block" aria-hidden="true" />
      </template>
    </ColorScheme>
  </button>
</template>
