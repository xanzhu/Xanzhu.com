<template>
  <button
    class="cursor-pointer text-dark-900 dark:text-light-200 px-2 btn-focus"
    :aria-label="$t('aria.button.theme')"
    @click="switchTheme"
  >
    <Sun
      v-if="ColourScheme === 'light'"
      class="h-6 w-6 pt-1"
    />

    <Moon v-else class="h-6 w-6 pt-1" />
  </button>
</template>

<script>
import Moon from '~/assets/moon.svg?inline'
import Sun from '~/assets/sun.svg?inline'

export default {
  components: {
    Moon,
    Sun
  },
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
