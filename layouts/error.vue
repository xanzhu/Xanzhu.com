<template>
  <div v-if="error.statusCode === 404" class="dark:text-gray-200 text-gray-900 text-center dark:font-thin font-normal">
    <h1 class="font-semibold text-2xl pt-32">
      {{ $t('page.error404.heading') }}
    </h1>
    <p class="mx-12 sm:0">
      {{ $t('page.error404.desc') }}
    </p>
    <div v-if="error.statusCode != 404">
      <h1 class="font-semibold text-2xl pt-32">
        {{ $t('page.error500.heading') }}
      </h1>
      <p class="mx-12 sm:0">
        {{ $t('page.error500.desc') }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  head () {
    return {
      meta: [
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'No longer avalible.'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Incorrect url of no longer accessible!'
        }
      ]
    }
  }
}
</script>
