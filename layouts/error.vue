<template>
  <div v-if="error.statusCode === 404" class="dark:text-white text-gray-900 text-center dark:font-thin font-normal">
    <h1 class="font-semibold text-2xl pt-32">
      {{ $t('page.error404.heading') }}
    </h1>
    <p class="mx-12 sm:0">
      {{ $t('page.error404.desc') }}
    </p>
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
