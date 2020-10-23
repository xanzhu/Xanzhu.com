<template>
  <header class="sm:flex sm:justify-between sm:mx-4 sm:py-2 sm:items-center lg:mx-28 md:mx-16">
    <div class="relative sm:block hidden">
      <button class="mt-2 text-gray-400 block h-8 w-8 focus:outline-none hover:text-white" @click="isOpen2 = !isOpen2">
        <TranslateIcon class="h-full w-full" />
      </button>
      <div v-if="isOpen2" class="absolute z-10 bg-gray-300 rounded-lg -mt-1" @click="isOpen2 = false">
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
    <div class="flex items-center justify-between px-6 py-4 sm:p-0 sm:w-40">
      <div class="text-white">
        <nuxt-link :to="localePath('/')">
          <Xulogo class="h-8" />
        </nuxt-link>
      </div>
      <div class="sm:hidden block">
        <button type="button" class="block text-gray-500 focus:outline-none hover:text-white" @click="isOpen = !isOpen">
          <Menu v-if="!isOpen" class="h-8" />
          <Cross v-if="isOpen" class="h-8" />
        </button>
      </div>
    </div>
    <div :class="isOpen ? 'block': 'hidden'" class="sm:px-2 sm:pt-2 pb-4 text-center sm:flex sm:justify-between sm:items-center">
      <!-- <a href="#" class="block px-2 py-1 font-semibold text-white rounded hover:bg-gray-800">Blog</a>
      <a href="#" class="mt-1 block px-2 py-1 font-semibold text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Green</a>
      <a href="#" class="mt-1 block px-2 py-1 font-semibold text-white rounded hover:bg-gray-800 sm:ml-2 sm:mt-0">Help</a> -->
      <span v-if="!isOpen" class="text-white mt-1 font-semibold ">{{ $d(new Date(), 'short') }}</span>
      <span v-else class="text-red-600 font-semibold tracking-widest">UNDER DEVELOPMENT</span>
    </div>
  </header>
</template>
<script>
import Xulogo from '@/assets/svg/xu-head.svg'
import TranslateIcon from '@/assets/svg/translation.svg'
import Cross from '@/assets/svg/cross.svg'
import Menu from '@/assets/svg/menu.svg'

export default {
  name: 'Xuheader2',
  components: {
    Xulogo,
    TranslateIcon,
    Cross,
    Menu
  },
  data () {
    return {
      isOpen: false,
      isOpen2: false
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<!--
TO:DO
improve flexbox on header

 -->
