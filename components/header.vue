<template>
  <header class="flex text-dark-900 bg-transparent dark:(bg-black text-light-200) flex-wrap flex-row justify-between items-center md:space-x-4 mx-4 lg:mx-36 py-4 mb-6">
    <nuxt-link class="block" :to="localePath('/')">
      <div class="logo w-36 sm:w-48 md:w-56">
        <span class="sr-only">Xanzhu</span>
        <Xanzhu />
        <!-- Test using nuxt-image to serve svg -->
      </div>
    </nuxt-link>
    <button v-show="!MobileMenu" class="z-2 inline-block md:hidden w-8 h-8 text-black dark:text-light-200 p-1" @click="Mobile_Menu">
      <Menu />
    </button>
    <button v-show="MobileMenu" class="z-2 inline-block md:hidden w-8 h-8 text-black dark:text-light-200 p-1" @click="Mobile_Menu">
      <Cross />
    </button>
    <nav
      class="absolute rounded-md md:(relative top-0 flex flex-row space-x-6) top-12 right-4 z-1 flex-col-reverse items-center p-2 md:p-4 font-semibold dark:(bg-dark-900 md:bg-transparent) bg-gray-300 md:bg-transparent"
      :class="{'flex' : MobileMenu, 'hidden': !MobileMenu}"
    >
      <div class="space-y-1 md:(space-x-4 space-y-0 flex-row) text-center font-bold text-sm flex-col flex" @click="MobileMenu = false">
        <nuxt-link :to="localePath('/')" class="px-6 rounded-md dark:hover:bg-dark-600 hover:bg-light-500 md:(hover:border-red-600 border-b-2 border-transparent rounded-none hover:bg-transparent dark:hover:bg-transparent px-2)">
          {{ $t('links.home') }}
        </nuxt-link>
        <nuxt-link :to="localePath('/')" class="px-6 rounded-md dark:hover:bg-dark-600 hover:bg-light-500 md:(hover:border-red-600 border-b-2 border-transparent rounded-none hover:bg-transparent dark:hover:bg-transparent px-2)">
          {{ $t('links.downloads') }}
        </nuxt-link>
        <nuxt-link :to="localePath('/blog')" class="px-6 rounded-md dark:hover:bg-dark-600 hover:bg-light-500 md:(hover:border-red-600 border-b-2 border-transparent rounded-none hover:bg-transparent dark:hover:bg-transparent px-2)">
          {{ $t('links.blog') }}
        </nuxt-link>
      </div>
      <div>
        <button class="text-red-600 hover:text-current" @click="Lang_Menu">
          <div class="p-2">
            <Translate class="h-5 w-5" />
          </div>
        </button>
        <div v-show="TranslateMenu" class="z-4 absolute flex-row justify-end rounded-md dark:(bg-dark-600 text-light-200) bg-light-700 text-dark-900 p-1 shadow-md">
          <button class="text-center" @click="TranslateMenu = false">
            <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              <div
                class="px-4 rounded-md dark:hover:bg-dark-300 hover:bg-light-400"
                :aria-label="`${locale.name}`"
                @click="isOpen = false"
              >
                {{ locale.name }}
              </div>
            </nuxt-link>
          </button>
        </div>
        <button>
          <ColorSwitch />
        </button>
      </div>
    </nav>
  </header>
</template>
<script>
import Xanzhu from '~/assets/Xanzhu.svg?inline'
import Menu from '~/assets/menu.svg?inline'
import Cross from '~/assets/cross.svg?inline'
import Translate from '~/assets/translate-v2.svg?inline'

export default {
  components: {
    Xanzhu,
    Menu,
    Cross,
    Translate
  },
  data () {
    return {
      TranslateMenu: false,
      MobileMenu: false
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    Mobile_Menu () {
      this.MobileMenu = !this.MobileMenu
    },
    Lang_Menu () {
      this.TranslateMenu = !this.TranslateMenu
    }
  }
}
</script>
