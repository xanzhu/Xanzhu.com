<template>
  <header class="relative min-h-screen flex items-center justify-center bg-white dark:bg-black">
    <div class="hidden md:(absolute inset-0 z-0 flex items-center justify-center)" aria-hidden="true">
      <UiSvg load-s-v-g="beta02" class="h-80% w-full object-cover" />
    </div>

    <div
      class="relative z-10 mx-auto flex flex-col px5 py10 sm:items-center sm:text-center dark:backdrop-brightness-90"
    >
      <div
        class="mb2 flex items-center text-sm text-brand-light font-semibold uppercase space-x-2 dark:text-yellow-400"
        role="doc-subtitle"
      >
        <Icon name="lucide:shield" class="h6 w6 text-inherit" aria-hidden="true" />
        <span>{{ $t('home.hero.tagline') }}</span>
      </div>
      <h1 id="hero" class="m0 mb10 max-w-[90%] max-w-4xl w-full text-5xl md:text-7xl">
        {{ $t('home.hero.heading') }}
      </h1>
      <p class="mx-auto max-w-[90%] max-w-lg w-full bg-white text-sm font-300 op70 dark:bg-element-dark md:text-lg">
        {{ $t('home.hero.subhead') }}
      </p>
      <NuxtLinkLocale
        class="mt5 flex items-center border-brand-light rounded-full border-dashed px5 py1.5 text-center text-blue-6 no-underline transition duration-300 ease-in-out <sm:mr-auto hover:(scale-110 border-solid) space-x-1 core-border dark:border-yellow-3 core-theme dark:text-yellow-4"
        to="/blog"
      >
        <span class="m0">
          {{ $t('home.hero.cta') }}
        </span>
        <Icon name="lucide:arrow-up-right" class="h5 w5" aria-hidden="true" />
      </NuxtLinkLocale>
    </div>
  </header>
</template>
