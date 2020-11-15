<template>
  <div class="sm:h-32 bg-black">
    <div class="text-white">
      <div class="hidden whitespace-pre-line sm:mx-6 md:mx-20 lg:mx-32 sm:-mt-6 sm:absolute sm:antialiased sm:font-medium sm:text-3xl sm:leading-9 sm:flex">
        {{ $t('page.banner.top_title') }}
        {{ $t('page.banner.bottom_title') }}
      </div>
    </div>
    <div class="bg-transparent">
      <Cloud />
    </div>
  </div>
</template>
