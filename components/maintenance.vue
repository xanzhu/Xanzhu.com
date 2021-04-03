<template>
  <div class="text-black items-center flex bg-gray-200 dark:bg-black dark:text-white mt-24 p-8">
    <img class="hidden sm:block h-40 w-auto mr-12 rounded-full" src="~assets/louie.webp" alt="Woman looking into camera wearing orange/red makeup">
    <div class="text-4xl font-medium">
      {{ $t('maintenance.title') }}
      <p class="text-base font-thin">
        {{ $t('maintenance.description_1') }} <br>
        {{ $t('maintenance.description_2') }}
      </p>
    </div>
  </div>
</template>
