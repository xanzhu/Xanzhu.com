<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="bg-white flex min-h-screen items-center justify-center relative dark:bg-black" aria-labelledby="hero">
    <div
      class="hidden md:(flex items-center inset-0 justify-center absolute z-0)"
      aria-hidden="true"
    >
      <UiSvg load-s-v-g="beta02" class="h-80% w-full object-cover" />
    </div>

    <div
      class="mx-auto px5 py10 flex flex-col relative z-10 sm:text-center sm:items-center dark:backdrop-brightness-90"
    >
      <p
        class="text-sm text-brand-light font-semibold mb2 flex uppercase items-center space-x-2 dark:text-yellow-400"
      >
        <Icon name="lucide:earth" class="text-inherit h6 w6" aria-hidden="true" />
        <span>{{ t('home.hero.tagline') }}</span>
      </p>
      <h1 id="hero" class="text-5xl font-500 m0 max-w-4xl w-full md:text-7xl">
        {{ t('home.hero.title') }}
      </h1>
      <p class="text-sm text-neutral-600 mx-auto mt-6 bg-white max-w-lg w-full md:text-lg dark:text-neutral-300 dark:bg-element-dark">
        {{ t('home.hero.subHead') }}
      </p>
      <NuxtLinkLocale
        class="core-theme text-blue-600 mt5 px5 py1.5 text-center core-border border-brand-light rounded-full border-dashed no-underline flex transition-transform duration-300 ease-in-out items-center space-x-1 dark:text-yellow-400 lt-sm:mr-auto dark:border-yellow-300 hover:(border-solid scale-110)"
        to="/blog"
      >
        <span class="m0">
          {{ t('home.hero.action') }}
        </span>
        <Icon name="lucide:arrow-up-right" class="h5 w5" aria-hidden="true" />
      </NuxtLinkLocale>
    </div>
  </section>
</template>
