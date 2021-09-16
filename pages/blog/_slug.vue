<template>
  <div class="container mx-auto md:px-2 xl:px-12 md:justify-center" role="main">
    <article v-if="post" class="dark:(bg-dark-900 text-light-200 shadow-transparent) bg-light-400 text-dark-900 flex-grow shadow-dark-100 shadow-md pb-2 sm:rounded-md md:mb-12">
      <header class="flex flex-col lg:(flex-row items-center top-0)">
        <div class="flex flex-col mx-4 md:mx-6 mt-4 sm:(space-y-1) space-y-2">
          <div class="text-xs space-x-4 inline-flex p-0.5">
            <p class="dark:(text-red-500 border-1 border-red-600 bg-transparent) rounded-md px-2 bg-red-600 text-light-200">
              {{ post.tag }}
            </p>
            <p>{{ $d(new Date(post.createdAt), 'short', localePath ) }}</p>
          </div>
          <h1 class="text-lg leading-tight sm:text-xl md:text-2xl lg:text-3xl xl:text-6xl font-sans font-semibold mr-6 break-words lg:(flex-1 pb-2)">
            {{ post.title }}
          </h1>
          <div class="flex inline-flex space-x-2 text-xs items-center">
            <div class="inline-flex dark:bg-dark-400 bg-light-900 py-1.5 lg:my-4 px-2 rounded-md w-auto">
              <IconClock class="h-4 w-4 mx-1" />
              <p><ReadTime :content="post.body" /></p>
            </div>
            <div v-if="post.author" class="text-xs dark:bg-dark-400 bg-light-900 py-1.5 lg:my-4 px-2 rounded-md w-auto font-medium">
              {{ post.author }}
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center h-56 sm:(min-h-sm mx-4) md:(mx-4) my-4 overflow-hidden lg:(w-4/6)">
          <nuxt-img
            v-if="post.media"
            class="object-cover w-full h-full sm:rounded-md"
            sizes="sm:100vw md:100vw lg:100vw"
            :src="post.media"
            :alt="post.alt"
            :title="post.alt"
            format="webp"
            fit="cover"
            loading="eager"
          />
        </div>
      </header>
      <div v-if="post.source" class="dark:(text-light-200 opacity-45) text-dark-900 text-sm opacity-80 italic mx-6 -mt-2 text-right">
        {{ $t('article.creditsource') }}: {{ post.source }}
      </div>
      <nuxt-content class="px-4 mx-auto my-4 dark:text-light-200 text-dark-900 leading-normal lg:(w-4xl)" :document="post" />
      <PrevNext loading="lazy" :prev="prev" :next="next" class="my-4 mx-6 sm:mx-12" />
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
    const [prev, next] = await $content(`${app.i18n.locale}/blog`)
      .only(slug)
      .sortBy('createdAt', 'asc')
      .surround(slug)
      .fetch()
    return {
      post,
      prev,
      next
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
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        { hid: 'og:image', property: 'og:image', content: this.post.media },
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
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: process.env.BASE_URL + this.$nuxt.$route.fullPath
        }
      ]
    }
  },
  computed: {
    getPostMedia () {
      return this.post?.media
        ? `https://a2.xanzhu.com${this.post?.media}`
        : 'https://res.cloudinary.com/xanzhu/image/upload/v1627084292/Twitter-image-v1.2_b0ebgw.png'
    }
  }
}
</script>
<style>
  .nuxt-content h1 {
    font-weight: bold;
    font-size: 46px;
  }

  .nuxt-content h2 {
    font-weight: 600;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: 500;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
</style>
