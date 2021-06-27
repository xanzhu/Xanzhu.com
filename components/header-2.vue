<template>
  <header class="flex items-center py-3 px-6 dark:bg-black bg-gray-200 dark:text-white text-black">
    <nav class="flex flex-1 space-x-6 justify-start ml-auto">
      <button
        class="sm:flex hidden"
        aria-label="Open Language Selection"
        @click="toggle"
      >
        <Translate />
      </button>
      <div v-if="isOpen" class="absolute bg-gray-900 text-white rounded-lg my-6">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          <div class="px-6" @click="isOpen = false">
            {{ locale.name }}
          </div>
        </nuxt-link>
      </div>
      <nuxt-link :to="localePath('/')">
        Home
      </nuxt-link>
      <nuxt-link :to="localePath('/')">
        Downloads
      </nuxt-link>
      <nuxt-link :to="localePath('/')">
        Support
      </nuxt-link>
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
