<template>
  <button
    class="cursor-pointer text-dark-900 dark:text-light-200 px-2 btn-focus"
    @click="switchTheme"
  >
    <IconSun
      v-if="ColourScheme === 'light'"
      :aria-label="$t('aria.button.light')"
      class="h-5 w-5 pt-1 mt-1"
    />

    <IconMoon v-else :aria-label="$t('aria.button.dark')" class="h-5 w-5 pt-1 mt-1" />
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
