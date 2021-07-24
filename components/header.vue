<template>
  <header class="flex items-center py-3 px-4 sm:px-6 dark:(bg-black text-light-200) bg-gray-200 text-dark-900">
    <nav class="flex flex-1 justify-start items-center ml-auto">
      <button
        class="md:flex relative hidden mr-6 hover:bg-gray-300 dark:(hover:bg-dark-600 text-red-600) rounded-md focus:(border-1 border-red-600 outline-none) border-1 border-transparent"
        aria-label="Open Language Selection"
        @click="toggle"
        @keydown.esc="toggle"
      >
        <Translate class="h-7 w-7" />
      </button>
      <div
        v-if="isOpen"
        class="hidden md:block absolute z-10 dark:(bg-dark-500 text-light-200 shadow-transparent) bg-light-700 rounded-md mt-7 ml-1 top-4 font-medium text-dark-900 shadow-dark-100 shadow-md"
        @keydown.tab="toggle"
        @keydown.esc="toggle"
      >
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          <div
            class="px-6 rounded-md dark:hover:bg-dark-300 hover:bg-light-500"
            :aria-label="`${locale.name}`"
            @click="isOpen = false"
          >
            {{ locale.name }}
          </div>
        </nuxt-link>
      </div>
      <button class="md:hidden flex items-center">
        <Menu v-if="!MobileMenu" class="h-6 w-6 stroke-current stroke-2" aria-label="Open Menu" @click="mobile_toggle" />
        <Cross v-if="MobileMenu" class="h-6 w-6 stroke-current stroke-2" aria-label="Close Menu" @click="mobile_toggle" />
      </button>
      <div v-show="MobileMenu" class="absolute top-8 left-0 mx-4 z-20 flex flex-col p-2 my-4 md:(p-0 hidden) dark:(bg-dark-900 text-light-200) bg-light-800 rounded-lg font-medium text-dark-900 shadow-dark-100 shadow-md" @click="MobileMenu = false">
        <nuxt-link class="px-4 rounded-md dark:hover:bg-dark-700 hover:bg-light-500" :to="localePath('/')">
          {{ $t('links.home') }}
        </nuxt-link>
        <nuxt-link class="px-4 rounded-md dark:hover:bg-dark-700 hover:bg-light-500" :to="localePath('/')">
          {{ $t('links.downloads') }}
        </nuxt-link>
        <nuxt-link class="px-4 mb-4 rounded-md dark:hover:bg-dark-700 hover:bg-light-500" :to="localePath('/blog')">
          {{ $t('links.blog') }}
        </nuxt-link>
        <span class="mx-auto my-2"><Translate class="h-7 w-7" /></span>
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          <div
            class="px-4 rounded-md dark:hover:bg-dark-700 hover:bg-light-500 text-center font-medium"
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
        <nuxt-link :to="localePath('/blog')" class="border-b-2 hover:border-red-600 border-transparent">
          {{ $t('links.blog') }}
        </nuxt-link>
      </div>
    </nav>
    <nuxt-link :to="localePath('/')">
      <div class="h-4 w-36 sm:(h-6 w-41) fill-current">
        <span class="sr-only">Xanzhu</span>
        <XanzhuV2 />
      </div>
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
