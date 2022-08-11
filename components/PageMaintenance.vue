<template>
  <div class="p-4 dark:text-light-200 text-black sm:(justify-center items-center flex p-0 mt-10 space-x-8 mx-4)"
    role="main">
    <NuxtImg crossorigin="anonymous" src="v1632626904/night_dlu0rp.jpg" width="250" height="400"
      sizes="md:50vw lg:100vw" class="hidden sm:flex" alt="Highway at night" format="webp" loading="eager"
      title="Highway" provider="cloudinary" fit="fill" :modifiers="{ roundCorner: '5' }" />
    <div class="text-4xl font-medium space-y-4">
      <h1>{{ $t('maintenance.title') }}</h1>
      <div class="text-base font-extralight">
        <p>{{ $t('maintenance.description_1') }}</p>
        <p>{{ $t('maintenance.description_2') }}</p>
      </div>
    </div>
  </div>
</template>
