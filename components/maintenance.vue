<template>
  <div class="dark:text-white text-black flex justify-center items-center mt-24 p-8">
    <nuxt-img class="hidden sm:block object-cover h-40 w-24 mr-12 rounded-full" src="/images/louie-d3.webp" alt="Woman looking into camera wearing orange/red makeup" />
    <div class="text-4xl font-medium">
      {{ $t('maintenance.title') }}
      <p class="text-base font-thin">
        {{ $t('maintenance.description_1') }} <br>
        {{ $t('maintenance.description_2') }}
      </p>
    </div>
  </div>
</template>
