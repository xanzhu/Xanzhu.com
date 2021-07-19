<template>
  <div class="dark:(text-gray-200 font-thin) text-gray-900 text-center font-normal flex-grow">
    <h1 v-if="error.statusCode === 404" class="font-medium md:text-2xl pt-32 pb-4 text-xl">
      {{ $t('error.404') }}
    </h1>
    <h1 v-else class="pb-4 font-medium text-xl">
      {{ $t('error.else') }}
    </h1>
    <nuxt-link :to="localePath('/')" class="focus:outline-none text-sm py-1.5 text-gray-200 font-semibold px-4 rounded-md bg-gray-900 hover:shadow-lg dark:bg-red-700">
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
