<template>
  <div class="dark:text-gray-200 text-black flex justify-center items-center mt-24 p-8">
    <nuxt-img class="hidden sm:flex mr-12 rounded-md" src="/images/Hussain.webp" sizes="200px md:300px lg:200px" alt="Auckland Skytower" />
    <div class="text-4xl font-medium">
      {{ $t('maintenance.title') }}
      <p class="text-base font-thin">
        {{ $t('maintenance.description_1') }} <br>
        {{ $t('maintenance.description_2') }}
      </p>
    </div>
  </div>
</template>
