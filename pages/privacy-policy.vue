<template>
  <div class="dark:text-light-200 text-dark-900 my-3 flex-grow py-3 mx-4 lg:mx-12 xl:mx-32" role="main">
    <h1 class="text-3xl">
      {{ $t('page.pp_title') }}
    </h1>
    <p class="pb-4">
      {{ $t('page.pp_date') }}
    </p>
    <p class="py-2">
      {{ $t('page.pp_p1') }}
    </p>
    <p> {{ $t('page.pp_p2') }}</p>
    <p> {{ $t('page.pp_p3') }}</p>
    <p class="py-5">
      {{ $t('page.pp_link') }}
      <a class="nav-link" href="https://xanzhu.com" rel="nofollow noopener" target="_blank">
        https://xanzhu.com
        <External class="h-3 w-3 pt-0.4" /></a>
    </p>
  </div>
</template>
<script>
import External from '~/assets/external.svg?inline'

export default {
  components: {
    External
  }
}
</script>
