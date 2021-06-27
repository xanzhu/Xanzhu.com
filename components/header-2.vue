<template>
  <header class="flex items-center py-3 px-6 dark:bg-black bg-gray-200 dark:text-white text-black">
    <nav class="flex flex-1 justify-start ml-auto">
      <button
        class="sm:flex hidden mr-6 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-md"
        aria-label="Open Language Selection"
        @click="toggle"
      >
        <Translate />
      </button>
      <div v-if="isOpen" class="absolute z-10 dark:bg-gray-900 bg-gray-300 rounded-md mt-7 ml-1 dark:text-gray-200 font-medium flex hover:bg-gray-400 text-gray-900 dark:hover:bg-gray-700" @keydown.enter="toggle" @keydown.tab="toggle">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          <div class="px-6 rounded-md" :aria-label="`${locale.name}`" @click="isOpen = false">
            {{ locale.name }}
          </div>
        </nuxt-link>
      </div>
      <div class="space-x-6">
        <nuxt-link :to="localePath('/')">
          Home
        </nuxt-link>
        <nuxt-link :to="localePath('/')">
          Downloads
        </nuxt-link>
        <nuxt-link :to="localePath('/')">
          Support
        </nuxt-link>
      </div>
    </nav>
    <nuxt-link :to="localePath('/')">
      <span class="sr-only">Xanzhu</span>
      <XanzhuV2 />
    </nuxt-link>
    <span class="hidden flex-1 justify-end mr-auto md:flex">27th JUNE 2021</span>
  </header>
</template>
<script>
import XanzhuV2 from '~/assets/Xanzhu.svg?inline'
import Translate from '~/assets/translate.svg?inline'

export default {
  components: {
    XanzhuV2,
    Translate
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
