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
    provider="cloudinary"
  />
</template>
<script>
export default {
  props: {
    source: {
      type: String,
      default: 'v1632626904/sand_ukcj9h.jpg',
      required: false
    },
    fit: {
      type: String,
      default: 'cover',
      required: false
    },
    alt: {
      type: String,
      default: 'Sand Dunes',
      required: false
    },
    title: {
      type: String,
      default: 'Sand Dunes',
      required: null
    }
  }
}
</script>
