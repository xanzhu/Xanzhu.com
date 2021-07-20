<template>
  <header class="flex items-center py-3 px-6 dark:(bg-black text-gray-200) bg-gray-200 text-dark-900">
    <nav class="flex flex-1 justify-start ml-auto">
      <button
        class="md:flex relative hidden mr-6 hover:bg-gray-300 dark:(hover:bg-dark-800 text-red-600) rounded-md text-red-600"
        aria-label="Open Language Selection"
        @click="toggle"
        @keydown.esc="toggle"
      >
        <Translate />
      </button>
      <div
        v-if="isOpen"
        class="hidden md:block absolute z-10 dark:(bg-dark-900 text-gray-200) bg-gray-300 rounded-md mt-7 ml-1 top-4 font-medium text-dark-900"
        @keydown.tab="toggle"
        @keydown.esc="toggle"
      >
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          <div
            class="px-6 rounded-md dark:hover:bg-dark-800 hover:bg-gray-400"
            :aria-label="`${locale.name}`"
            @click="isOpen = false"
          >
            {{ locale.name }}
          </div>
        </nuxt-link>
      </div>
      <div class="md:hidden flex">
        <button>
          <Menu v-if="!MobileMenu" aria-label="Open Menu" @click="mobile_toggle" />
          <Cross v-if="MobileMenu" aria-label="Close Menu" @click="mobile_toggle" />
        </button>
      </div>
      <div v-show="MobileMenu" class="absolute top-8 left-0 mx-4 z-20 flex flex-col p-2 my-4 md:(p-0 hidden) dark:bg-dark-900 bg-gray-300 rounded-lg font-medium" @click="MobileMenu = false">
        <nuxt-link class="px-4 rounded-md dark:hover:bg-dark-700 hover:bg-gray-400" :to="localePath('/')">
          {{ $t('links.home') }}
        </nuxt-link>
        <nuxt-link class="px-4 rounded-md dark:hover:bg-dark-700 hover:bg-gray-400" :to="localePath('/')">
          {{ $t('links.downloads') }}
        </nuxt-link>
        <nuxt-link class="px-4 mb-4 rounded-md dark:hover:bg-dark-700 hover:bg-gray-400" :to="localePath('/')">
          {{ $t('links.support') }}
        </nuxt-link>
        <span class="mx-auto my-2"><Translate /></span>
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          <div
            class="px-4 rounded-md dark:hover:bg-dark-700 hover:bg-gray-400 text-center font-medium"
            :aria-label="`${locale.name}`"
            @click="MobileMenu = false"
          >
            {{ locale.name }}
          </div>
        </nuxt-link>
      </div>
      <div class="hidden md:(space-x-4 flex flex-row text-sm) font-medium lg:text-base">
        <nuxt-link :to="localePath('/')" class="border-b-2 hover:border-red-600 border-transparent">
          {{ $t('links.home') }}
        </nuxt-link>
        <nuxt-link :to="localePath('/')" class="border-b-2 hover:border-red-600 border-transparent">
          {{ $t('links.downloads') }}
        </nuxt-link>
        <nuxt-link :to="localePath('/')" class="border-b-2 hover:border-red-600 border-transparent">
          {{ $t('links.support') }}
        </nuxt-link>
        <nuxt-link :to="localePath('/blog')" class="border-b-2 hover:border-red-600 border-transparent">
          {{ $t('links.blog') }}
        </nuxt-link>
      </div>
    </nav>
    <nuxt-link :to="localePath('/')">
      <span class="sr-only">Xanzhu</span>
      <XanzhuV2 />
    </nuxt-link>
    <span class="hidden flex-1 font-medium justify-end mr-auto md:flex">{{
      $d(new Date(), "short") }}</span>
  </header>
</template>
<script>
import XanzhuV2 from '~/assets/Xanzhu.svg?inline'
import Translate from '~/assets/translate.svg?inline'
import Menu from '~/assets/menu.svg?inline'
import Cross from '~/assets/cross.svg?inline'

export default {
  components: {
    XanzhuV2,
    Menu,
    Cross,
    Translate
  },
  data () {
    return {
      isOpen: false,
      MobileMenu: false
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
    },
    mobile_toggle () {
      this.MobileMenu = !this.MobileMenu
    }
  }
}
</script>
