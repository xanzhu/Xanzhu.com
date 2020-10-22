<template>
  <header class="sm:flex sm:justify-between sm:mx-4 sm:py-2 sm:items-center sm:flex-row lg:mx-28 md:mx-16">
    <div class="relative sm:block hidden">
      <button class="mt-2 text-gray-400 block h-8 w-8 focus:outline-none hover:text-white" @click="isOpen2 = !isOpen2">
        <svg class="stroke-current h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
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
    <div class="flex items-center px-6 py-4 sm:p-0">
      <div class="text-white">
        <nuxt-link :to="localePath('/')">
          <Xulogo class="fill-current h-8" />
        </nuxt-link>
      </div>
      <div class="sm:hidden">
        <button type="button" class="block text-gray-500 focus:outline-none hover:text-white" @click="isOpen = !isOpen">
          <svg class="stroke-current" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              v-if="isOpen"
              d="M6 18L18 6M6 6l12 12"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path v-if="!isOpen" d="M4 8h16M4 16h16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
    <div :class="isOpen ? 'block': 'hidden'" class="sm:px-2 sm:pt-2 pb-4 text-center sm:flex">
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

export default {
  name: 'Xuheader2',
  components: {
    Xulogo
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
