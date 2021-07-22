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
          <div class="text-lg leading-tight xs:text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-sans font-medium mr-6 mb-auto break-words">
            {{ post.title }}
          </div>
          <div class="text-xs space-x-5 inline-flex dark:bg-dark-400 bg-light-900 p-1 rounded-full w-auto mr-auto font-medium">
            <p>{{ $t('content.updated') }} : {{ $d(new Date(post.updatedAt), 'short', localePath ) }}</p>
          </div>
          <!-- Add article read time -->
        </div>
        <div class="flex sm:(flex-1 rounded-md justify-end) justify-center items-center h-36 sm:ml-auto overflow-hidden">
          <nuxt-img
            class="object-cover flex-1 h-full w-full"
            sizes="sm:100vw md:50vw lg:50vw"
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
  head () {
    return {
      title: this.post.title,
      titleTemplate: '%s - Xanzhu',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        { hid: 'og:image', property: 'og:image', content: this.post.media },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description
        }
        // {
        //   hid: 'twitter:image',
        //   name: 'twitter:image',
        //   content: this.post.media
        // }
      ]
    }
  }
}
</script>
