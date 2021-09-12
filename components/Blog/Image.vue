<template>
  <nuxt-img
    :src="source"
    :fit="fit"
    :alt="alt"
    format="webp"
    height="424"
    width="800"
    class="mx-auto px-8 my-4"
    loading="lazy"
  />
</template>
<script>
export default {
  props: {
    source: {
      type: String,
      default: '/images/mountain.png',
      required: false
    },
    fit: {
      type: String,
      default: 'cover',
      required: false
    },
    alt: {
      type: String,
      default: 'Default Example',
      required: false
    }
  }
}
</script>
