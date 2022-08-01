<template>
  <header
    class="flex flex-row justify-between items-center px-4 py-2 bg-transparent text-dark-900 dark:(bg-black text-light-200) md:(space-x-4 mx-2 py-4) lg:mx-12"
    role="banner">
    <NuxtLink :to="localePath('/')" aria-hidden="true">
      <Icon-Xanzhu class="flex w-40 sm:w-46 md:w-56" />
    </NuxtLink>
    <div class="flex text-dark-900 dark:text-light-200 md:hidden">
      <button v-show="!MobileMenu" :aria-label="$t('aria.button.Omenu')" class="w-7 h-7" @click="Mobile_Menu">
        <Icon-Menu aria-label="Menu" />
      </button>
      <button v-show="MobileMenu" :aria-label="$t('aria.button.Cmenu')" class="w-7 h-7" @click="Mobile_Menu">
        <Icon-Cross />
      </button>
    </div>
    <nav
      class="items-center font-semibold bg-gray-300 dark:(bg-dark-800 md:bg-transparent) md:(relative top-0 flex flex-row space-x-6 p-4 bg-transparent)"
      :class="{'flex p-4 rounded-md absolute top-9.5 right-4.5 z-1 flex-col-reverse' : MobileMenu, 'hidden': !MobileMenu}"
      role="navigation">
      <div class="md:(space-x-6 flex-row) font-semibold text-center text-sm flex-col flex w-full"
        @click="MobileMenu = false">
        <p v-t="'links.docs'" class="nav-internal cursor-not-allowed" :aria-label="$t('links.docs')" />
        <NuxtLink v-t="'links.blog'" :to="localePath('/blog')" class="nav-internal" :aria-label="$t('links.blog')" />
        <NuxtLink v-t="'links.home'" :to="localePath('/')" class="nav-internal" :aria-label="$t('links.home')" />
      </div>
      <div class="flex flex-row space-x-2">
        <button class="text-red-600 hover:text-current px-1" @click="Lang_Menu">
          <IconTranslate class="h-6 w-6 pt-1" :aria-label="$t('aria.button.translate')" />
        </button>
        <div v-show="TranslateMenu"
          class="z-4 p-1 absolute top-13 rounded-md shadow-md space-y-4 dark:(bg-dark-500 text-light-200) bg-light-700 text-dark-900">
          <div class="py-0.5 text-center" @click="TranslateMenu = false">
            <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)"
              class="px-2 p-1 mb-2 rounded-md dark:hover:bg-dark-300 hover:bg-light-400" :aria-label="`${locale.name}`">
              {{ locale.name }}
            </NuxtLink>
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
