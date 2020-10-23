<template>
  <div>
    <xubanner />
    <div>
      <span class="text-red-700 mx-6 absolute py-2 text-ms sm:text-lg font-normal -mt-10 tracking-wide text-center lg:mx-32 md:mx-20">{{ $t('TranslationWarn') }}</span>
    </div>
    <xunav />
    <div class="text-left text-gray-300 py-4 font-thin text-lg mx-10 sm:mx-0 sm:text-center sm:py-12">
      <p>{{ $t('Comingsoon1') }}</p>
      <p>{{ $t('Comingsoon2') }}</p>
    </div>
  </div>
</template>
<script>
import xubanner from '@/components/banner'
import xunav from '@/components/navbar'

export default {
  components: {
    xunav,
    xubanner
  }
}
</script>
