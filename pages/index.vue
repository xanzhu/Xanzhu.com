<template>
  <div>
    <xubanner />
    <span class="text-red-600 py-2 text-ms sm:text-lg font-normal absolute mx-6 -mt-10 tracking-widest text-center">{{ $t('TranslationWarn') }}</span>
    <xunav />
    <div class="text-left text-gray-300 py-4 font-thin text-lg mx-10 sm:mx-0 sm:text-center sm:py-12">
      <p>This page will constantly update as we improve our design</p>
      <p>We expect to release our website by the end of the year</p>
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
