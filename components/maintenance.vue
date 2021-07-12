<template>
  <div class="dark:text-gray-200 text-black flex justify-center items-center p-8 overflow-hidden">
    <nuxt-img
      src="/images/mountain.png"
      sizes="md:186px lg:286px"
      class="hidden sm:flex mr-12 rounded-md mt-12"
      alt="Large mountain"
      format="webp"
      fit="cover"
      quality="100"
    />
    <div class="text-4xl font-medium">
      {{ $t('maintenance.title') }}
      <p class="text-base font-thin">
        {{ $t('maintenance.description_1') }} <br>
        {{ $t('maintenance.description_2') }}
      </p>
      <div class="flex justify-center text-red-700">
        <Loading />
      </div>
    </div>
  </div>
</template>
<script>
import Loading from '~/assets/loading.svg'

export default {
  components: {
    Loading
  }

}
</script>
