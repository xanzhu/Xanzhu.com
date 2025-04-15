<template>
  <section class="relative min-h-screen flex items-center justify-center dark:bg-black bg-white">
    <div class="hidden md:(flex items-center justify-center z-0 absolute inset-0)" aria-hidden="true">
      <UiSvg loadSVG="beta02" class="w-full h-80% object-cover"/>
    </div>

    <!-- Hero content -->
    <div
      class="relative z-10 mx-auto flex py10 px5 flex-col sm:text-center sm:items-center dark:backdrop-brightness-90">
      <div
        class="dark:text-yellow-400 text-brand-light text-sm uppercase flex space-x-2 font-semibold items-center mb2">
        <Icon name="lucide:shield" class="h6 w6 text-inherit" aria-hidden="true" />
        <span>{{ t('home.hero.tagline') }}</span>
      </div>
      <h1 class="text-5xl md:text-7xl m0 w-full max-w-4xl mb10 max-w-[90%]">{{ t('home.hero.heading') }}</h1>
      <h2 class="font-300 w-full max-w-lg mx-auto md:text-lg text-sm dark:bg-element-dark bg-white op70  max-w-[90%]">
        {{ t('home.hero.subhead') }}
      </h2>
      <NuxtLinkLocale
        class="flex items-center no-underline dark:text-yellow-4 text-blue-6 space-x-1 core-border core-theme rounded-full px5 py1.5 text-center hover:(scale-110 border-solid) border-dashed dark:border-yellow-3 border-brand-light transition ease-in-out duration-300 mt5 <sm:mr-auto"
        to="/blog" :aria-label="t('home.hero.cta') + ' - ' + t('home.hero.subhead')">
        <p class="m0">{{ t('home.hero.cta') }}</p>
        <Icon name="lucide:arrow-up-right" class="h5 w5" />
      </NuxtLinkLocale>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n();
</script>