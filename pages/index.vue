<template>
  <div>
    <Banner />
    <div v-if="this.$i18n.locale !== 'en'" class="sm:flex sm:justify-left sm:items-center hidden text-green-500">
      <span
        class="
        absolute
        text-lg
        font-medium
        -mt-12
        tracking-wide
        text-center
        lg:mx-32
        md:mx-20
        bg-black
        rounded-full
        sm:px-2
        py-0"
      >
        <Warn class="h-4 w-4 sm:inline-block -mt-1 mr-1" />{{ $t('page.banner.warning') }}</span>
    </div>
    <Content />
    <div
      class="text-left text-gray-300 py-4 font-thin text-lg mx-10 sm:mx-0 sm:text-center sm:py-12"
    >
      <p>{{ $t('page.content.cs.top') }}</p>
      <p>{{ $t('page.content.cs.bottom') }}</p>
    </div>
  </div>
</template>
<script>
import Warn from '~/assets/svg/warn.svg'

export default {
  components: {
    Warn
  }
}
</script>
