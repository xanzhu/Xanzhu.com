<template>
  <div class="dark:text-light-200 text-dark-900 text-center font-normal flex-grow" role="main">
    <div class="font-medium md:text-2xl pt-32 pb-4 text-xl">
      <h1 v-if="error.statusCode === 404">
        {{ $t('error.404') }}
      </h1>
      <h1 v-else>
        {{ $t('error.else') }}
      </h1>
    </div>
    <nuxt-link :to="localePath('/blog')" class="focus:outline-none text-sm py-1.5 text-light-200 font-semibold px-4 rounded-md bg-dark-900 hover:shadow-lg dark:bg-red-700">
      {{ $t('error.return') }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
