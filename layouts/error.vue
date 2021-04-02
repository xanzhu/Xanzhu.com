<template>
  <div class="dark:text-gray-200 text-gray-900 text-center dark:font-thin font-normal">
    <h1 v-if="error.statusCode === 404" class="font-semibold text-2xl pt-32 pb-4">
      {{ $t('error.404') }}
    </h1>
    <h1 v-else>
      {{ $t('error.else') }}
    </h1>
    <nuxt-link :to="localePath('/')" class="focus:outline-none dark:text-white text-black text-sm py-1.5 px-4 rounded-md bg-gray-900 hover:shadow-lg dark:bg-red-700">
      {{ $t('error.return') }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
