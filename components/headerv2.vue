<template>
  <header class="sm:flex sm:justify-between sm:mx-6 sm:py-2 sm:items-center sm:flex-row">
    <LangSwitcher class="hidden sm:block" />
    <div class="flex items-center justify-between px-6 py-4 mx-auto sm:p-0">
      <div class="text-white">
        <n-link to="/">
          <Xulogo class="fill-current h-8" alt="XANZHU" />
        </n-link>
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
      <span v-if="!isOpen" class="text-white mt-1 font-semibold ">{{ ReleaseDate() }}</span>
      <span v-else class="text-red-600 font-semibold tracking-widest">UNDER DEVELOPMENT</span>
    </div>
  </header>
</template>
<script>
import Xulogo from '@/assets/svg/xu-head.svg'
import LangSwitcher from '@/components/LanguageSwitcher'

export default {
  name: 'Xuheader2',
  components: {
    Xulogo,
    LangSwitcher
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    ReleaseDate () {
      const event = new Date()
      const options = { year: 'numeric', month: 'long' }
      return (event.toLocaleDateString('EN', options))
    }
  }

}
</script>
