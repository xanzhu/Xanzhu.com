<template>
  <div class="flex space-x-1">
    <p class="m0">
      {{ readingTime }}
    </p>
    <span>{{ $t("Blog.read-time") }}</span>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const wordsPerMinute = 230;

    const contentString = JSON.stringify(props.content)
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    const words = contentString.split(' ').filter(Boolean).length;
    const readingTime = ref(Math.ceil(words / wordsPerMinute));

    return {
      readingTime,
    };
  }
};
</script>
