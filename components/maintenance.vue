<template>
  <div class="p-4 mt-5 dark:text-light-200 text-dark-900 sm:(justify-center items-center overflow-hidden flex p-8 mt-0)" role="main">
    <nuxt-img
      src="/images/mountain.png"
      width="256px"
      height="402px"
      class="hidden sm:(flex mr-12 mt-12 rounded-md)"
      alt="Close up Snowy mountain"
      format="webp"
      loading="eager"
      title="Mountain"
    />
    <div class="text-4xl font-medium space-y-4">
      <h1>{{ $t('maintenance.title') }}</h1>
      <p class="text-base font-extralight">
        {{ $t('maintenance.description_1') }} <br>
        {{ $t('maintenance.description_2') }}
      </p>
    </div>
  </div>
</template>
