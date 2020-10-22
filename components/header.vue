<template>
  <div class="container mx-auto flex px-5 justify-center items-center py-3">
    <div class="text-white">
      <!-- <LangSwitcher /> -->
    </div>
    <div class="w-full md:w-2/3 flex flex-col items-center">
      <n-link to="/">
        <XUlogo class="h-4 md:h-6 lg:h-7 xl:h-8 fill-current text-white" />
      </n-link>
    </div>
    <div class="absolute right-0 mr-16">
      <p class="text-white text-sm">
        {{ ReleaseDate() }}
      </p>
    </div>
  </div>
</template>
<script>
import XUlogo from '@/assets/svg/xu-head.svg'
// import LangSwitcher from '@/components/LanguageSwitcher'

export default {
  name: 'Xuheader',
  components: {
    XUlogo
    // LangSwitcher
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
