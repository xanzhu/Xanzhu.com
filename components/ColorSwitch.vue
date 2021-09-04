<template>
  <button
    class="text-dark-900 dark:text-light-200 my-0.5 px-2 btn-focus"
    @click="switchTheme"
  >
    <IconSun
      v-if="ColourScheme === 'light'"
      :aria-label="$t('aria.button.light')"
      class="h-4 w-4"
    />

    <IconMoon v-else :aria-label="$t('aria.button.dark')" class="h-4 w-4" />
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
