<template>
  <div class="bg-black min-h-screen fixed min-w-full overflow-auto">
    <Headerv2 />
    <Nuxt />
  </div>
</template>
<script>
export default {
  head () {
    return this.$nuxtI18nSeo()
  }
}
</script>
