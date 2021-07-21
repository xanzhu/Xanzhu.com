<template>
  <div class="container mx-auto rounded-md dark:(bg-dark-800 text-light-200) text-dark-900 bg-light-600 mt-2 flex-grow">
    <article v-if="post">
      <header class="dark:bg-dark-700 bg-light-700 mb-auto rounded-md flex sm:flex-row flex-col">
        <div class="flex flex-col flex-1 px-4 py-4">
          <div class="text-xs space-x-5 inline-flex font-medium">
            <p class="text-red-500">
              {{ post.tag }}
            </p>
            <p>{{ $d(new Date(post.createdAt), 'short', localePath ) }}</p>
          </div>
          <div class="text-lg leading-tight sm:(text-xl) md:(text-2xl leading-normal)font-sans font-semibold mr-6 mb-auto">
            {{ post.title }}
          </div>
          <div class="text-xs space-x-5 inline-flex dark:bg-dark-400 bg-light-900 p-1 rounded-full w-auto mr-auto font-medium">
            <p>{{ $t('content.updated') }} : {{ $d(new Date(post.updatedAt), 'short', localePath ) }}</p>
          </div>
          <!-- Add article read time -->
        </div>
        <div class="flex sm:(flex-1 rounded-md justify-end) justify-center items-center lg:h-36 ml-auto overflow-hidden object-fit">
          <nuxt-img
            class="flex-strink-0 min-h-full"
            height="200px"
            width="100%"
            sizes="sm:640 md:768"
            :src="post.media"
            format="webp"
            fit="cover"
          />
          <!-- Add Photo credit -->
        </div>
      </header>
      <nuxt-content class="mx-6 my-4 dark:text-light-200 text-dark-800" :document="post" />
    </article>
  </div>
</template>

<script>
const head = function () {
  return {
    title: this.post.title,
    htmlAttrs: {
      lang: this.$i18n.locale
    },
    meta: [
      {
        hid: 'og:description',
        property: 'og:description',
        content: this.post.description
      },
      {
        property: 'og:title',
        hid: 'og:title',
        content: this.post.title
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: this.post.media
      }
    ]
  }
}
export default {
  name: 'Post',
  async asyncData (context) {
    const { $content, params, app } = context
    const slug = params.slug
    const post = await $content(`${app.i18n.locale}/blog`, slug).fetch()
    return {
      post
    }
  },
  head
}
</script>
