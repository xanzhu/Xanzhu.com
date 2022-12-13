<script setup lang="ts">
const color = useColorMode()
const { t } = useI18n()

function colorSwitch() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

function ariaLabel() {
  return color.preference === 'dark' ? t('aria.button.light') : t('aria.button.dark')
}

</script>
<template>
  <button @click="colorSwitch" :aria-label="ariaLabel" class="text-dark-900 dark:text-light-200 px-1 pt-0.5">
    <IconSun v-if="color.preference === 'dark'" class="h-5 w-5" />
    <IconMoon v-else class="h-5 w-5" />
  </button>
</template>