<template>
  <div class="p-4 dark:text-light-200 text-dark-900 sm:(justify-center items-center flex p-0 mt-10 space-x-8 mx-4)" role="main">
    <NuxtImg
      src="v1632626904/night_dlu0rp.jpg"
      width="250"
      height="400"
      sizes="md:50vw lg:100vw"
      class="hidden sm:flex"
      alt="Highway at night"
      format="webp"
      title="Highway"
      provider="cloudinary"
      fit="fill"
      :modifiers="{ roundCorner: '5' }"
    />
    <div class="text-4xl font-medium space-y-4">
      <h1 v-t="'maintenance.title'" />
      <div class="text-base font-extralight">
        <p v-t="'maintenance.description_1'" />
        <p v-t="'maintenance.description_2'" />
      </div>
    </div>
  </div>
</template>
