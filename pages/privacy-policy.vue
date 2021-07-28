<template>
  <div class="dark:text-light-200 text-dark-900 mx-6 my-3 flex-grow py-3">
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
      {{ $t('page.pp_link') }} <a class="border-b-2 border-red-600 hover:(border-transparent bg-red-600)" href="https://xanzhu.com" rel="nofollow noopener " target="_blank">https://xanzhu.com</a>
    </p>
  </div>
</template>
