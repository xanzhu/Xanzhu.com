<template>
  <div class="flex space-x-1">
    <Icon name="mdi:clock-time-three-outline" class="h3.5 w3.5" />
    <p class="m0">
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
