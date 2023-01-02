<template>
  <NuxtImg crossorigin="anonymous" itemprop="image" :src="source" :fit="fit" :alt="alt" height="424"
    width="800" class="mx-auto my-4" loading="lazy" :title="title" />
</template>

<script lang="ts">
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
      required: false
    }
  }
}
</script>