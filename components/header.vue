<template>
  <header
    class="sm:flex sm:justify-between sm:mx-4 sm:py-2 sm:items-center lg:mx-28 md:mx-16 relative dark:text-gray-200 text-gray-900"
  >
    <div class="sm:block hidden">
      <button
        class="mt-2 text-gray-900 dark:text-gray-200 block h-8 w-8 focus:outline-none dark:hover:text-white hover:text-gray-800"
        aria-label="Language Selector"
        @click="headerShow = !headerShow"
      >
        <TranslateIcon class="h-full w-full" />
      </button>
      <div
        v-if="headerShow"
        class="absolute z-10 dark:bg-gray-900 bg-gray-300 rounded-lg -mt-1"
        @click="ClickClose"
      >
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="dark:text-gray-200 font-medium flex px-4 hover:bg-gray-400 bg-gray-300 dark:bg-gray-900 text-gray-900 dark:hover:bg-gray-700 rounded-lg"
        >
          {{ locale.name }}
        </nuxt-link>
      </div>
    </div>
    <div class="flex justify-between px-6 py-3 sm:p-0 sm:w-40 items-center">
      <nuxt-link
        :to="localePath('/')"
        aria-current="page"
      >
        <Xanzhu class="h-6 sm:h-8 sm:pl-6" aria-label="XANZHU" />
      </nuxt-link>
      <div class="sm:hidden flex">
        <button
          type="button"
          class="flex dark:text-gray-100 text-gray-900 focus:outline-none dark:hover:text-gray-300 pt-1"
          aria-label="Menu"
        >
          <Menu
            v-if="!headerShow"
            class="h-8"
            @click="ClickOpen"
          />
          <Cross
            v-if="headerShow"
            class="h-8"
            @click="ClickClose"
          />
        </button>
      </div>
    </div>
    <div
      class="sm:px-2 sm:pt-2 sm:pb-4 text-center sm:items-center"
    >
      <span class="mt-1 font-semibold hidden sm:flex" aria-current="date">{{
        $d(new Date(), "short")
      }}</span>
      <div v-if="headerShow" class="sm:hidden">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="dark:text-green-600 text-green-400 dark:hover:text-green-800 hover:text-green-600 px-1"
        >
          {{ locale.name }}
        </nuxt-link>
        <span
          class="dark:text-gray-200 text-gray-900 font-semibold tracking-widest sm:hidden block pb-4"
        >{{ $t('page.mobile.menu') }}</span>
      </div>
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
