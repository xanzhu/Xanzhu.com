<template>
  <div class="bg-black min-h-screen fixed min-w-full overflow-auto">
    <XUheader2 />
    <Nuxt />
  </div>
</template>
<script>
import XUheader2 from '@/components/headerv2.vue'

export default {
  components: {
    XUheader2
  }
}
</script>
