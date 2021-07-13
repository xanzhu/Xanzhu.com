<template>
  <div class="dark:text-gray-200 text-black flex justify-center items-center p-8 overflow-hidden">
    <nuxt-img
      src="/images/mountain.png"
      height="300px"
      sizes="md:186px lg:286px"
      class="hidden sm:flex mr-12 mt-12 rounded-md"
      alt="Large mountain"
      format="webp"
    />
    <div class="text-4xl font-medium">
      {{ $t('maintenance.title') }}
      <p class="text-base font-thin">
        {{ $t('maintenance.description_1') }} <br>
        {{ $t('maintenance.description_2') }}
      </p>
      <div class="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="-ml-1 mr-3 h-5 w-5 my-4 animate-spin text-red-700"><circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
          class="opacity-25"
        /><path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" class="opacity-75" /></svg>
      </div>
    </div>
  </div>
</template>
<script>
