<template>
  <div class="bg-black min-h-full fixed overflow-auto">
    <xuheader />
    <xubanner />
    <xunav />
    <Nuxt />
  </div>
</template>
<script>
import xuheader from '@/components/header'
import xubanner from '@/components/banner'
import xunav from '@/components/navbar'

export default {
  components: {
    xuheader,
    xubanner,
    xunav
  }
}
</script>
