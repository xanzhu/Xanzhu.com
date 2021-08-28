<template>
  <header class="flex text-dark-900 bg-transparent dark:(bg-black text-light-200) flex-row justify-between items-center  md:(space-x-4 mx-6 py-4) mx-4 lg:mx-12 py-2" role="banner">
    <nuxt-link class="block" :to="localePath('/')">
      <div class="logo w-36 sm:w-48 md:w-56">
        <IconXanzhu class="fill-current flex-shrink" />
      </div>
    </nuxt-link>
    <button v-show="!MobileMenu" :aria-label="$t('aria.button.Omenu')" class="z-2 inline-block md:hidden w-8 h-8 text-black dark:text-light-200 p-1" @click="Mobile_Menu">
      <IconMenu class="stroke-current" aria-label="Menu" />
    </button>
    <button v-show="MobileMenu" :aria-label="$t('aria.button.Cmenu')" class="z-2 inline-block md:hidden w-8 h-8 text-black dark:text-light-200 p-1" @click="Mobile_Menu">
      <IconCross class="stroke-current" />
    </button>
    <nav
      class="absolute rounded-md md:(relative top-0 flex flex-row space-x-6 p-4 bg-transparent) top-12 right-4 z-1 flex-col-reverse items-center p-2 font-semibold dark:(bg-dark-800 md:bg-transparent) bg-gray-300"
      :class="{'flex' : MobileMenu, 'hidden': !MobileMenu}"
      role="navigation"
    >
      <div class="md:(space-x-6 flex-row) font-semibold text-center text-sm flex-col flex w-full" @click="MobileMenu = false">
        <nuxt-link :to="localePath('/')" class="nav-internal">
          {{ $t('links.home') }}
        </nuxt-link>
        <nuxt-link :to="localePath('/')" class="nav-internal">
          {{ $t('links.docs') }}
        </nuxt-link>
        <nuxt-link :to="localePath('/blog')" class="nav-internal">
          {{ $t('links.blog') }}
        </nuxt-link>
      </div>
      <div class="flex flex-row space-x-2 pl-2">
        <button class="btn-focus text-red-600 hover:text-current px-2" @click="Lang_Menu">
          <IconTranslate class="h-5 w-5 mt-1" :aria-label="$t('aria.button.translate')" />
        </button>
        <div v-show="TranslateMenu" class="z-4 absolute top-11 md:top-13 flex-row rounded-md dark:(bg-dark-500 text-light-200) bg-light-700 text-dark-900 p-1 shadow-md">
          <div @click="TranslateMenu = false">
            <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              <div
                class="px-3 rounded-md dark:hover:bg-dark-300 hover:bg-light-400"
                :aria-label="`${locale.name}`"
              >
                {{ locale.name }}
              </div>
            </nuxt-link>
          </div>
        </div>
        <ColorSwitch />
      </div>
    </nav>
  </header>
</template>
<script>
export default {
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
