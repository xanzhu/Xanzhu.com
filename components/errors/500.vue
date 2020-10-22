<template>
  <div class="text-white text-center font-thin">
    <h1 class="font-semibold text-2xl pt-32">
      SYSTEM ERROR
    </h1>
    <p class="mx-12 sm:0">
      This request could not be processed :/
    </p>
    <!-- Add emote / Image here -->
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
