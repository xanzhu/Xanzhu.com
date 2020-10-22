<template>
  <div class="sm:h-32 bg-black">
    <div class="text-white">
      <div class="hidden whitespace-pre-line sm:mx-6 sm:-mt-3 sm:absolute sm:antialiased sm:font-medium sm:text-4xl sm:leading-9 sm:flex">
        {{ $t('UnderstandTech1') }}
        {{ $t('UnderstandTech2') }}
      </div>
    </div>
    <div class="bg-transparent">
      <!-- <img class="h-56 w-full object-scale-down object-right" src="~/assets/banner-21.png"> Option with cut-->
      <img class="h-16 sm:h-32 w-full object-cover" src="~/assets/banner-image.webp">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Xubanner'
}
</script>
