<template>
  <div class="flex flex-row text-red-600 space-x-4 items-center">
    <a href="https://twitter.com/Xanzhu1" rel="noopener noreferrer" target="_blank"
      class="hover:text-dark-900 dark:(hover:text-light-300)" :aria-label="'Twitter ' + $t('aria.button.NewWindow')">
      <Icon-Twitter class="h-5 w-5" />
    </a>
    <a href="https://www.linkedin.com/company/xanzhu" rel="noopener noreferrer" target="_blank"
      class="hover:text-dark-900 dark:(hover:text-light-300)" :aria-label="'LinkedIn ' + $t('aria.button.NewWindow')">
      <Icon-LinkedIn class="h-5 w-5" />
    </a>
    <a href="https://github.com/xanzhu" rel="noopener noreferrer" target="_blank"
      class="hover:text-dark-900 dark:(hover:text-light-300)" :aria-label="'Github ' + $t('aria.button.NewWindow')">
      <Icon-Github class="h-5 w-5" />
    </a>
    <a href="https://medium.com/@xanzhu" rel="noopener noreferrer" target="_blank"
      class="hover:text-dark-900 dark:(hover:text-light-300)" :aria-label="'Medium ' + $t('aria.button.NewWindow')">
      <Icon-Medium />
    </a>
  </div>
</template>
