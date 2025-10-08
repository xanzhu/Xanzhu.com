<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})

const { t } = useI18n()
const localePath = useLocalePath()

const is404 = computed(() => props.error?.statusCode === 404)

const errorTitle = computed(() => (is404.value ? t('v2.error404.h1') : t('v2.error500.h1')))
const errorMessage = computed(() => (is404.value ? t('v2.error404.p') : t('v2.error500.p')))
const errorReturn = t('v2.error404.goBack')
const errorLabel = computed(() => (is404.value ? t('v2.error404.label') : t('v2.error500.label')))
const errorCode = computed(() => props.error?.statusCode)

useHead(() => ({
  title: errorTitle.value,
  meta: [
    { name: 'robots', content: 'noindex' },
  ],
}))

const route = useRoute()
const router = useRouter()

function handleGoBack() {
  const currentPath = route.fullPath
  let fallbackTriggered = false

  const timeout = setTimeout(() => {
    fallbackTriggered = true
    clearError({ redirect: localePath('/') })
  }, 600)

  watch(
    () => route.fullPath,
    (newPath) => {
      if (!fallbackTriggered && newPath !== currentPath) {
        clearTimeout(timeout)
      }
    },
    { once: true },
  )

  router.back()
}
</script>

<template>
  <main class="m0 h-screen flex flex-col-reverse items-center justify-center bg-white p4 text-black font-sans lg:flex-row md:gap-16 dark:(bg-black text-white)" :aria-label="errorLabel">
    <section class="max-w-lg">
      <h1 class="m0 text-4xl font-semibold tracking-wide sm:text-6xl">
        {{ errorTitle }}
      </h1>

      <div class="mt5 max-w-md core-border rounded-lg core-ui p-3 text-neutral8 md:mt-15 dark:text-light2" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="mb-10 flex items-center core-border rounded-lg bg-white px-4 md:(mb-15 px5 space-x-8) space-x-4 dark:bg-black">
          <Icon name="bx:bxs-error" class="hidden sm:(h7 w-auto flex text-inherit)" aria-hidden="true" />
          <p>
            {{ errorMessage }}
          </p>
        </div>

        <div class="flex justify-between children:p-2">
          <button
            class="border border-transparent rounded-md border-solid bg-transparent text-sm text-inherit underline underline-offset-3 hover:(core-border bg-white dark:bg-black) focus:outline-2 focus:outline-white focus:outline-offset-2 focus:outline"
            @click="handleGoBack"
          >
            {{ errorReturn }}
          </button>
          <span class="animate-pulse text-sm opacity-80" aria-hidden="true">
            {{ errorCode }}
          </span>
        </div>
      </div>
    </section>

    <aside class="max-w-lg w-full flex justify-center text-black dark:text-white" aria-hidden="true">
      <svg
        v-if="errorCode === 404"
        viewBox="0 0 356 356"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        class="h-auto max-w-xs w-full lg:max-w-lg sm:max-w-md"
      >
        <path
          d="M111.25 244.75H133.5V222.5H222.5V244.75H244.75V222.5H222.5V200.25H133.5V222.5H111.25V244.75ZM118.667 178H140.917V140.917H118.667V178ZM215.083 178H237.333V140.917H215.083V178ZM59.3332 296.667C51.1749 296.667 44.1884 293.76 38.3737 287.945C32.559 282.13 29.6566 275.149 29.6665 267V89.0002C29.6665 80.8419 32.5739 73.8554 38.3885 68.0407C44.2032 62.226 51.1848 59.3236 59.3332 59.3335H148.333L178 89.0002H296.667C304.825 89.0002 311.811 91.9075 317.626 97.7222C323.441 103.537 326.343 110.518 326.333 118.667V267C326.333 275.159 323.426 282.145 317.611 287.96C311.797 293.774 304.815 296.677 296.667 296.667H59.3332Z"
          fill="currentColor"
        />
      </svg>
      <svg
        v-else viewBox="0 0 356 356"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        class="h-auto max-w-xs w-full lg:max-w-lg sm:max-w-md"
      >
        <path d="M84.8957 217.333H105.271V213.937C105.271 197.864 110.876 184.226 122.087 173.024C133.298 161.823 146.935 156.217 163 156.208C179.064 156.199 192.707 161.805 203.926 173.024C215.146 184.244 220.747 197.882 220.729 213.937V217.333H241.104V213.937C241.104 192.204 233.52 173.753 218.352 158.585C203.184 143.417 184.733 135.833 163 135.833C141.267 135.833 122.816 143.417 107.648 158.585C92.4797 173.753 84.8957 192.204 84.8957 213.937V217.333ZM96.4415 125.646C105.723 124.287 115.517 120.665 125.822 114.779C136.127 108.893 144.332 102.214 150.435 94.7436L134.814 81.8394C130.287 87.2728 124.002 92.2533 115.961 96.7811C107.919 101.309 100.507 104.139 93.7249 105.271L96.4415 125.646ZM229.558 125.646L232.275 105.271C225.483 104.139 218.067 101.309 210.025 96.7811C201.984 92.2533 195.704 87.2728 191.185 81.8394L175.564 94.7436C181.677 102.214 189.886 108.893 200.191 114.779C210.496 120.665 220.285 124.287 229.558 125.646ZM163 298.833C144.21 298.833 126.551 295.265 110.025 288.13C93.4985 280.994 79.1228 271.318 66.8978 259.102C54.6728 246.886 44.9969 232.51 37.8702 215.975C30.7435 199.439 27.1756 181.781 27.1665 163C27.1575 144.219 30.7254 126.56 37.8702 110.025C45.015 93.4894 54.6909 79.1137 66.8978 66.8978C79.1047 54.6818 93.4804 45.006 110.025 37.8702C126.569 30.7344 144.228 27.1665 163 27.1665C181.772 27.1665 199.43 30.7344 215.975 37.8702C232.519 45.006 246.895 54.6818 259.102 66.8978C271.309 79.1137 280.989 93.4894 288.143 110.025C295.297 126.56 298.86 144.219 298.833 163C298.806 181.781 295.238 199.439 288.13 215.975C281.021 232.51 271.345 246.886 259.102 259.102C246.859 271.318 232.483 280.998 215.975 288.143C199.467 295.288 181.808 298.851 163 298.833Z" fill="currentColor" />
      </svg>
    </aside>
  </main>
</template>

<style>
body {
  margin: 0;
}
</style>
