<template>
  <button
    class="text-dark-900 dark:text-light-200 px-1 pt-0.5"
    @click="switchTheme"
  >
    <IconSun
      v-if="ColourScheme === 'light'"
      :aria-label="$t('aria.button.light')"
      class="h-6 w-6 p-1"
    />

    <IconMoon v-else :aria-label="$t('aria.button.dark')" class="h-6 w-6 p-1" />
  </button>
</template>

<script>
export default {
  computed: {
    ColourScheme () {
      return this.$colorMode.value
    }
  },
  methods: {
    switchTheme () {
      this.$colorMode.preference =
        this.ColourScheme === 'dark' ? 'light' : 'dark'
    }
  }
}
</script>
