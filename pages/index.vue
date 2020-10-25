<template>
  <div>
    <Banner />
    <div>
      <span class="hidden sm:block text-red-700 mx-6 absolute py-2 text-ms sm:text-lg font-normal -mt-10 tracking-wide text-center lg:mx-32 md:mx-20">{{ $t('warning') }}</span>
    </div>
    <Navbar />
    <div class="text-left text-gray-300 py-4 font-thin text-lg mx-10 sm:mx-0 sm:text-center sm:py-12">
      <p>{{ $t('Coming') }}</p>
      <p>{{ $t('Soon') }}</p>
    </div>
  </div>
</template>
