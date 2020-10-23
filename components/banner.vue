<template>
  <div class="sm:h-32 bg-black">
    <div class="text-white">
      <div class="hidden whitespace-pre-line sm:mx-6 md:mx-20 lg:mx-32 sm:-mt-6 sm:absolute sm:antialiased sm:font-medium sm:text-3xl sm:leading-9 sm:flex">
        {{ $t('Under') }}
        {{ $t('Stand') }}
      </div>
    </div>
    <div class="bg-transparent">
      <!-- <img class="h-56 w-full object-scale-down object-right" src="~/assets/banner-21.png"> Option with cut-->
      <img class="h-16 sm:h-32 w-full object-cover" src="~/assets/OptimizedBackground.webp" alt="Cosmetic background image">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Xubanner'
}
</script>
