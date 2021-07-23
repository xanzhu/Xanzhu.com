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
      <div class="flex justify-center">
        <Loading class="-ml-1 mr-3 h-5 w-5 my-4 animate-spin text-red-700" />
      </div>
    </div>
  </div>
</template>
<script>
import Loading from '~/assets/loading.svg?inline'

export default {
  components: {
    Loading
  }
}
</script>
