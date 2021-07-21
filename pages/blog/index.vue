<template>
  <div class="blog container sm:mx-6 dark:text-light-200 text-dark-900 flex-grow">
    <section class="grid grid-cols-1 md:grid-cols-3 gap-2 pt-12 justify-center">
      <article
        v-for="(post, $index) in posts"
        :key="`post-${$index}`"
        class="post max-w-sm rounded overflow-hidden shadow-lg flex flex-col mx-auto dark:bg-dark-900 bg-light-600"
      >
        <nuxt-link :to="localePath(post.path)" class="font-bold text-xl mb-2">
          <nuxt-img class="relative w-full h-32 object-cover object-center" :src="post.media" :alt="post.title" format="webp" sizes="sm:100vw md:50vw" />
          <div class="py-2 px-2 flex-2">
            <div class="flex flex-row">
              <p class="text-red-500 font-medium text-sm flex-1">
                {{ post.tag }}
              </p>
              <p class="px-2 text-sm font-medium text-right">
                {{ $d(new Date(post.createdAt), 'short', localePath ) }}
              </p>
            </div>
            <h1 class="rounded-md font-semibold text-xl">
              {{ post.title }}
            </h1>
          </div>
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
  }
}
</script>
