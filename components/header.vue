<template>
  <header
    class="sm:flex sm:justify-between sm:mx-4 sm:py-2 sm:items-center lg:mx-28 md:mx-16"
  >
    <div class="relative sm:block hidden">
      <button
        class="mt-2 text-gray-400 block h-8 w-8 focus:outline-none hover:text-white"
        aria-label="Language Selector"
        @click="headerShow = !headerShow"
      >
        <TranslateIcon class="h-full w-full" />
      </button>
      <div
        v-if="headerShow"
        class="absolute z-10 bg-gray-300 rounded-lg -mt-1"
        @click="ClickClose"
      >
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="text-black font-medium block px-4 hover:bg-gray-500 rounded-lg"
        >
          {{ locale.name }}
        </nuxt-link>
      </div>
    </div>
    <div class="flex items-center justify-between px-4 py-2 sm:p-0 sm:w-40">
      <div class="text-white">
        <nuxt-link
          :to="localePath('/')"
          aria-current="page"
        >
          <Xanzhu class="h-6 sm:h-8" aria-label="XANZHU" />
        </nuxt-link>
      </div>
      <div class="sm:hidden block">
        <button
          type="button"
          class="block text-gray-500 focus:outline-none hover:text-white pt-1"
          aria-label="Menu"
        >
          <Menu
            v-if="!headerShow"
            class="h-8"
            aria-label="Menu"
            @click="ClickOpen"
          />
          <Cross
            v-if="headerShow"
            class="h-8"
            aria-label="Close Menu"
            @click="ClickClose"
          />
        </button>
      </div>
    </div>
    <div
      class="sm:px-2 sm:pt-2 sm:pb-4 text-center sm:flex sm:justify-between sm:items-center"
    >
      <!-- <a href="#" class="block px-2 py-1 font-semibold text-white rounded hover:bg-gray-800">Blog</a>
      <a href="#" class="mt-1 block px-2 py-1 font-semibold text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Green</a>
      <a href="#" class="mt-1 block px-2 py-1 font-semibold text-white rounded hover:bg-gray-800 sm:ml-2 sm:mt-0">Help</a> -->
      <span class="text-white mt-1 font-semibold hidden sm:flex" aria-current="date">{{
        $d(new Date(), "short")
      }}</span>
      <span
        v-if="headerShow"
        class="text-red-600 font-semibold tracking-widest sm:hidden block pb-4"
      >{{ $t("MobileUD") }}</span>
    </div>
  </header>
</template>
<script>
import Xanzhu from '~/assets/svg/xanzhu.svg'
import TranslateIcon from '~/assets/svg/translation.svg'
import Cross from '~/assets/svg/cross.svg'
import Menu from '~/assets/svg/menu.svg'

export default {
  name: 'Xuheader2',
  components: {
    Xanzhu,
    TranslateIcon,
    Cross,
    Menu
  },
  data () {
    return {
      headerShow: false
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    ClickOpen () {
      this.headerShow = true
    },
    ClickClose () {
      this.headerShow = false
    }
  }
}
</script>
