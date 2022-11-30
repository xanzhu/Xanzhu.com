<template>
  <div class="inline-flex dark:bg-dark-500 bg-light-900 py-1 lg:my-4 px-2 rounded-md space-x-1">
    <IconClock class="h-4 w-4 mr-1" />{{ readingTime }}
    <p v-t="'article.readtime'" />
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  computed: {
    readingTime () {
      const wordsPerMinute = 250
      const contentString = JSON.stringify(this.content)
      const words = contentString.split(' ').length
      return Math.ceil(words / wordsPerMinute)
    }
  }
}
</script>
