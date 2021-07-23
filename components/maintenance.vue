<template>
  <div class="dark:text-light-200 text-dark-900 flex justify-center items-center p-8 overflow-hidden">
    <nuxt-img
      src="/images/mountain.png"
      sizes="md:50vw lg:100vw"
      width="289px"
      height="454px"
      class="hidden sm:flex mr-12 mt-12 rounded-md"
      alt="Large mountain"
      format="webp"
      loading="lazy"
    />
    <div class="text-4xl font-medium">
      {{ $t('maintenance.title') }}
      <p class="text-base font-extralight">
        {{ $t('maintenance.description_1') }} <br>
        {{ $t('maintenance.description_2') }}
      </p>
    </div>
  </div>
</template>
