<template>
  <div class="max-w-sm mx-auto my-4 sm:(container mx-auto mb-10) dark:text-light-200 text-black flex-grow" role="main">
    <h1 class="text-center text-red-600 font-semibold text-4xl md:text-6xl mt-">
      {{ $t('blog.landing.title') }}
    </h1>
    <p class="text-lg p-2 mb-5 text-center break-words sm:(text-xl) md:(mb-10) dark:text-gray-300">
      {{ $t('blog.landing.desc') }}
    </p>
    <section class="grid grid-cols-1 gap-4 sm:(grid-cols-2 mx-8) md:(grid-cols-2 gap-6) lg:(grid-cols-3 mx-10)">
      <article v-for="(post, $index) in posts" :key="`post-${$index}`"
        class="max-w-lg w-full rounded overflow-hidden flex flex-col shadow-md dark:(bg-dark-900 shadow-none border-dark-700 border-1) bg-white mx-auto border-0"
        role="article">
        <nuxt-link :to="localePath(post.path)" class="font-bold text-xl mb-2">
          <NuxtImg crossorigin="anonymous" v-if="post.media"
            class="relative w-full h-32 object-cover sm:(object-center h-40)" :src="post.media" :alt="post.alt"
            format="webp" height="290" width="130" sizes="sm:100vw md:50vw lg:25vw" loading="eager" fit="cover"
            provider="cloudinary" />
          <div class="flex flex-row items-center px-4 py-2 space-x-2">
            <p class="text-red-500 bg-transparent rounded-md text-xs dark:(text-[#FF0000])">
              {{ post.tag }}
            </p>
            <p class="text-sm font-medium text-right">
              {{ $d(new Date(post.gitCreatedAt), 'short', localePath ) }}
            </p>
          </div>
          <h2 class="rounded-md font-medium text-xl px-4">
            {{ post.title }}
          </h2>
        </nuxt-link>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlogView',
  async asyncData (context) {
    const { $content, app } = context
    const defaultLocale = app.i18n.locale
    const posts = await $content(`${defaultLocale}/blog`).fetch()
    return {
      posts: posts.map(post => ({
        ...post,
        path: post.path.replace(`/${defaultLocale}`, '')
      }))
    }
  },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      titleTemplate: '%s - Xanzhu',
      title: this.$i18n.t('blog.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.t('blog.meta.description')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$i18n.t('blog.meta.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$i18n.t('blog.meta.description')
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://a2.xanzhu.com' + this.$nuxt.$route.fullPath
        }
      ],
      link: [
        ...i18nHead.link
      ]
    }
  }
}
</script>
