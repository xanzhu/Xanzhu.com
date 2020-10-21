<template>
  <div class="bg-black min-h-full fixed min-w-full overflow-auto">
    <xuheader2 />
    <Nuxt />
  </div>
</template>
<script>
import xuheader2 from '@/components/headerv2.vue'

export default {
  components: {
    xuheader2
  }
}
</script>
