<template>
  <div class="text-white text-center">
    <h1 class="semibold text2xl pt-32">
      {{ $t('error500h1') }}
    </h1>
    <p class="mx-12 sm:0">
      {{ $t('error500p') }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'Error500',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
