<template>
  <div
    class="cursor-pointer p-2 text-dark-900 select-none focus:outline-none dark:text-light-200"
    @click="switchTheme"
  >
    <Sun
      v-if="ColourScheme === 'light'"
      class="h-5 w-5"
    />

    <Moon v-else class="h-5 w-5" />
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
