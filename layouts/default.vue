<template>
  <div>
    <xuheader />
    <xubanner />
    <Nuxt />
  </div>
</template>
<script>
import xuheader from '@/components/header'
import xubanner from '@/components/banner'

export default {
  components: {
    xuheader,
    xubanner
  }
}
</script>
