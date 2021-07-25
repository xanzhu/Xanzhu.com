<template>
  <span>
    {{ readTime }} {{ $t('article.readtime') }}
  </span>
</template>

<script>
export default {
  name: 'ReadTime',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  computed: {
    readTime () {
      const wordsPerMinute = 250
      const contentString = JSON.stringify(this.content)
      const words = contentString.split(' ').length
      return Math.ceil(words / wordsPerMinute)
    }
  }
}
</script>
