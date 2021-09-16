<template>
  <nuxt-img
    :src="source"
    :fit="fit"
    :alt="alt"
    format="webp"
    height="424"
    width="800"
    class="mx-auto my-4 sm:px-8"
    loading="lazy"
    :title="title"
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
    },
    title: {
      type: String,
      default: 'Blog Picture',
      required: null
    }
  }
}
</script>
