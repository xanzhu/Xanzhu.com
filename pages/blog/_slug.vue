<template>
  <div class="container mb-4 mx-auto md:(px-6 mb-0 justify-center) lg:px-12" role="main">
    <article v-if="post" class="dark:(bg-black text-light-200) bg-white text-black pb-2 sm:rounded-md md:mb-12">
      <header class="flex flex-col lg:(flex-row items-center top-0)">
        <div class="flex flex-col mx-4 mt-4 space-y-2 sm:space-y-1 md:mx-6">
          <div class="text-xs space-x-4 inline-flex items-center">
            <p
              class="dark:(text-[#FF0000] border-1 border-[#FF0000] bg-transparent) rounded-md px-2 py-0.2 bg-red-600 text-light-200 font-semibold tracking-wide">
              {{ post.tag }}
            </p>
            <p>{{ $d(new Date(post.gitCreatedAt), 'short', localePath ) }}</p>
            <!-- <p class="font-thin">Updated: {{ $d(new Date(post.gitUpdatedAt), 'short', localePath ) }}</p> Broken -->
          </div>
          <h1
            class="text-xl sm:leading-tight md:(text-2xl mr-6) lg:text-3xl xl:text-6xl font-semibold break-words lg:(flex-1 pb-2)">
            {{ post.title }}
          </h1>
          <div class="flex text-xs">
            <BlogReadTime :content="post.body" />
            <div v-if="post.author" class="inline-flex ml-2 py-1 lg:my-4 px-2 rounded-md border-1 border-red-700">
              {{ post.author }}
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center h-56 sm:(min-h-sm mx-4) md:(mx-4) my-4 overflow-hidden lg:(w-4/6)">
          <NuxtImg v-if="post.media" class="object-cover w-full h-full sm:rounded-md" sizes="sm:100vw md:50vw lg:25vw"
            :src="post.media" :alt="post.alt" :title="post.alt" format="webp" fit="cover" loading="eager"
            provider="cloudinary" />
        </div>
      </header>
      <div v-if="post.source"
        class="dark:(text-light-200 opacity-45) text-black text-sm opacity-80 italic pr-2 sm:pr-6 -mt-2 text-right">
        <p v-t="'article.creditsource'" class="inline-block" />: {{ post.source }}
      </div>
      <nuxt-content class="px-4 mx-auto my-4 dark:text-light-200 text-black leading-normal lg:(w-4xl)"
        :document="post" />
      <BlogPrevNext loading="lazy" :prev="prev" :next="next" />
    </article>
  </div>
</template>

<script>
export default {
  name: 'PostView',
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
          content: 'https://a2.xanzhu.com' + this.$nuxt.$route.fullPath
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
