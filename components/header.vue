<template>
  <div class="container mx-auto flex flex-col px-5 justify-center items-center py-3">
    <div class="w-full md:w-2/3 flex flex-col items-center">
      <div class="title-font sm:text-4xl text-3xl font-bold text-white relative">
        <n-link :to="{name: 'index'}">
          <XUlogo class="h-10" />
        </n-link>
      </div>
    </div>
    <div class="absolute right-0 mr-16">
      <p class="text-white leading-4">
        {{ ReleaseDate() }}
      </p>
    </div>
  </div>
</template>
<script>
import XUlogo from '@/assets/svg/xu-head.svg'

export default {
  name: 'xuheader',
  components: {
    XUlogo
  },
  methods: {
    ReleaseDate () {
      const event = new Date()
      const options = { year: 'numeric', month: 'long' }
      return (event.toLocaleDateString('en', options))
    }
  }
}
</script>
