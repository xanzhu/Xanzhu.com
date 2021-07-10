<template>
  <div class="dark:text-gray-200 text-black flex justify-center items-center p-8 overflow-hidden">
    <!-- <nuxt-img
      class="hidden sm:flex mr-12 rounded-md"
      src="/images/Hussain.webp"
      width="384px"
      height="575px"
      sizes="md:200px lg:400px xl:800px"
      alt="Auckland Skytower"
    /> -->
    <nuxt-picture
      src="/images/Hussain.webp"
      width="384px"
      height="575px"
      sizes="md:500px lg:400px"
      class="hidden sm:flex mr-12 rounded-md"
      alt="Auckland Skytower"
    />
    <div class="text-4xl font-medium">
      {{ $t('maintenance.title') }}
      <p class="text-base font-thin">
        {{ $t('maintenance.description_1') }} <br>
        {{ $t('maintenance.description_2') }}
      </p>
    </div>
  </div>
</template>
