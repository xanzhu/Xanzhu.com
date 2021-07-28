<template>
  <div class="container mx-auto lg:px-22 lg:px-36 mt-2">
    <article v-if="post" class="dark:(bg-dark-700 text-light-200) bg-light-400 text-dark-900 flex-grow shadow-dark-100 shadow-md pb-2 sm:rounded-md">
      <header class="mb-auto flex flex-col">
        <div class="flex flex-col flex-1 mx-4 mt-4 sm:space-y-1 space-y-2">
          <div class="text-xs space-x-5 inline-flex -mt-2 font-medium">
            <p class="text-red-500">
              {{ post.tag }}
            </p>
            <p>{{ $d(new Date(post.createdAt), 'short', localePath ) }}</p>
          </div>
          <div class="text-md leading-tight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-sans font-medium mr-6 mb-auto break-words">
            {{ post.title }}
          </div>
          <div class="text-xs space-x-5 inline-flex dark:bg-dark-400 bg-light-900 py-1 px-2 rounded-md w-auto mr-auto font-medium">
            <!--Switch to time ago method, instead of date -->
            <p>{{ $t('article.updated') }} : {{ $d(new Date(post.updatedAt), 'short', localePath ) }}</p>
            <p><ReadTime :content="post.body" /></p>
          </div>
        </div>
        <!-- Add TOC based on post -->
        <div class="flex justify-center items-center h-36 sm:(min-h-xs mx-2 rounded-md) my-2 overflow-hidden">
          <nuxt-img
            v-if="post.media"
            class="object-cover flex-1 h-full w-full object-center"
            sizes="sm:100vw md:100vw lg:100vw"
            :src="post.media"
            :alt="post.alt"
            format="webp"
            fit="cover"
            loading="lazy"
          />
        </div>
        <div v-if="post.source" class="dark:text-light-200 text-dark-900 text-sm opacity-45 italic mx-4 -mt-2 text-right">
          {{ $t('article.creditsource') }}: {{ post.source }}
        </div>
      </header>
      <nuxt-content class="mx-2 my-4 dark:text-light-200 text-dark-900" :document="post" />
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
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.getPostMedia
        }
      ]
    }
  },
  computed: {
    getPostMedia () {
      return this.post?.media
        ? `https://a2.xanzhu.com/images/${this.post?.media}`
        : 'https://res.cloudinary.com/xanzhu/image/upload/v1627084292/Twitter-image-v1.2_b0ebgw.png'
    }
  }
}
</script>
