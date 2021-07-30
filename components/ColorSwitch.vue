<template>
  <div
    class="cursor-pointer text-dark-900 dark:text-light-200 mx-2"
    @click="switchTheme"
  >
    <Sun
      v-if="ColourScheme === 'light'"
      class="h-6 w-6 pt-1"
    />

    <Moon v-else class="h-6 w-6 pt-1" />
  </div>
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
