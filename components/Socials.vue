<template>
  <div class="Social share wrapper text-red-600 flex-row flex items-center space-x-4">
    <a href="https://twitter.com/Xanzhu1" rel="noopener" target="_blank" class="hover:text-dark-900 dark:(hover:text-light-200)">
      <Twitter class="h-5 w-5" />
    </a>
    <a href="https://www.linkedin.com/company/xanzhu" rel="noopener" target="_blank" class="hover:text-dark-900 dark:(hover:text-light-200)">
      <LinkedIn class="h-5 w-5" />
    </a>
    <a href="https://github.com/xanzhu" rel="noopener" target="_blank" class="hover:text-dark-900 dark:(hover:text-light-200)">
      <Github class="h-5 w-5" />
    </a>
  </div>
</template>
<script>
import Twitter from '~/assets/icons/twitter.svg?inline'
import LinkedIn from '~/assets/icons/linkedin.svg?inline'
import Github from '~/assets/icons/github.svg?inline'

export default {
  components: {
    Twitter,
    LinkedIn,
    Github
  }
}
</script>
