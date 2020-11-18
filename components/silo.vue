<template>
  <div class="text-white">
    <!-- Translation Icon -->
    <div class="sm:block hidden">
      <button>
        <TranslateIcon />
      </button>
      <!-- <div>
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="text-black font-medium block px-4 hover:bg-gray-500 rounded-lg"
        >
          {{ locale.name }}
        </nuxt-link>
      </div> -->
    </div>
    <!-- Logo -->
    <div class="center">
      <Xanzhu class="h-6 sm:h-8" aria-label="XANZHU" />
    </div>
    <!-- Date -->
    <div class="right">
      <span class="sm:block hidden">{{ $d(new Date(), "short") }}</span>
      <span
        class="text-red-600 font-semibold tracking-widest sm:hidden block pb-4"
      >{{ $t('page.mobile.menu') }}</span>

      <!-- Mobile -->
      <div class="sm:hidden block">
        <button
          type="button"
          class="block text-gray-500 focus:outline-none hover:text-white pt-1"
          aria-label="Menu"
        >
          <Menu
            class="h-8"
          />
          <Cross
            class="h-8"
          />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Xanzhu from '~/assets/svg/xanzhu.svg'
import TranslateIcon from '~/assets/svg/translation.svg'
import Cross from '~/assets/svg/cross.svg'
import Menu from '~/assets/svg/menu.svg'

export default {
  components: {
    Xanzhu,
    TranslateIcon,
    Cross,
    Menu
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
