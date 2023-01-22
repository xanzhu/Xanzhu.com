<template>
  <div class="inline-flex space-x-1 items-center">
    <IconClock class="h-3.5 w-3.5" />
    <p>
      {{ readingTime }}
    </p>
    <span v-t="'Blog.read-time'" />
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
    const contentString = JSON.stringify(props.content);
    const words = contentString.split(" ").length;
    const readingTime = ref(Math.ceil(words / wordsPerMinute));

    return {
      readingTime,
    };
  },
};
</script>
