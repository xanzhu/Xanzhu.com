<template>
  <div class="mx-2 sm:(container mx-auto mb-10) dark:text-light-200 text-dark-900 flex-grow" role="main">
    <h1 v-t="'blog.landing.title'" class="text-center text-red-600 font-semibold text-3xl md:text-5xl mt-4" />
    <p v-t="'blog.landing.desc'" class="text-lg p-2 mb-5 text-center break-words sm:(text-xl) md:(mb-10) dark:text-gray-300" />
    <section class="grid grid-cols-1 gap-4 mx-2 sm:(grid-cols-2 mx-8 justify-center) md:(grid-cols-2 pt-6 gap-6) lg:(grid-cols-3 gap-8 mx-12 px-4 mx-auto)">
      <article
        v-for="(post, $index) in posts"
        :key="`post-${$index}`"
        class="max-w-md w-full rounded overflow-hidden shadow-lg flex flex-col dark:(bg-dark-900 shadow-none) bg-light-600 mx-auto"
        role="article"
      >
        <nuxt-link :to="localePath(post.path)" class="font-bold text-xl mb-2">
          <NuxtImg
            v-if="post.media"
            class="relative w-full h-32 sm:h-40 object-cover sm:object-center md:object-top lg:object-center"
            :src="post.media"
            :alt="post.alt"
            format="webp"
            height="290"
            width="130"
            sizes="sm:100vw md:50vw lg:25vw"
            loading="eager"
            fit="cover"
            :title="post.alt"
            provider="cloudinary"
          />
          <div class="flex flex-row items-center px-4 py-2 space-x-2">
            <p class="dark:(text-red-500 border-1 border-red-600 bg-transparent) rounded-md px-2 bg-red-600 text-xs text-light-200">
              {{ post.tag }}
            </p>
            <p class="text-sm font-medium text-right">
              {{ $d(new Date(post.createdAt), 'short', localePath ) }}
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
  name: 'Blog',
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
          content: process.env.BASE_URL + this.$nuxt.$route.fullPath
        }
      ],
      link: [
        ...i18nHead.link
      ]
    }
  }
}
</script>
