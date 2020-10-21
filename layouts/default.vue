<template>
  <div class="bg-black fixed min-h-full min-w-full overflow-auto">
    <xuheader />
    <Nuxt />
  </div>
</template>
<script>
import xuheader from '@/components/header'

export default {
  components: {
    xuheader
  }
}
</script>
