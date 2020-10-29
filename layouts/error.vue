<template>
  <div v-if="error.statusCode === 404" class="text-white text-center font-thin">
    <h1 class="font-semibold text-2xl pt-32">
      {{ $t('error404h1') }}
    </h1>
    <p class="mx-12 sm:0">
      {{ $t('error404p') }}
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
