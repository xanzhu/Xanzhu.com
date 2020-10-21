<template>
  <div class="text-white text-center font-thin">
    <h1 class="font-semibold text-2xl pt-32">
      PAGE NOT FOUND
    </h1>
    <p class="mx-12 sm:0">
      The link you clicked on may be broken or no longer exists.
    </p>
    <!-- Add emote / Image here -->
  </div>
</template>
<script>
export default {
  name: 'Error404',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
