<template>
  <div class="container mx-auto dark:text-light-200 text-dark-900 flex-grow" role="main">
    <h1 class="text-center text-red-600 font-semibold text-4xl md:text-5xl my-4">
      {{ $t('blog.landing.title') }}
    </h1>
    <section class="grid grid-cols-1 mx-2 gap-6 justify-center sm:(grid-cols-2 mx-0) md:(grid-cols-3 pt-6 mx-4)">
      <article
        v-for="(post, $index) in posts"
        :key="`post-${$index}`"
        class="post max-w-sm md:max-w-md rounded overflow-hidden shadow-lg flex flex-col mx-auto dark:bg-dark-900 bg-light-600"
        role="article"
      >
        <nuxt-link :to="localePath(post.path)" class="font-bold text-xl mb-2">
          <nuxt-img
            v-if="post.media"
            class="relative w-full h-32 object-cover sm:object-center md:object-top lg:object-center"
            :src="post.media"
            :alt="post.alt"
            format="webp"
            sizes="sm:100vw md:50vw"
            loading="lazy"
            fit="cover"
          />
          <div class="py-2 px-2 flex-2">
            <div class="flex flex-row">
              <p class="dark:(text-red-500 border-1 border-red-600 bg-transparent) rounded-md px-2 bg-red-600 text-xs text-light-200">
                {{ post.tag }}
              </p>
              <p class="px-2 text-sm font-medium text-right">
                {{ $d(new Date(post.createdAt), 'short', localePath ) }}
              </p>
            </div>
            <h2 class="rounded-md font-medium text-xl">
              {{ post.title }}
            </h2>
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
