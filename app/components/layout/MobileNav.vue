<script setup lang="ts">
import { useEventListener, useScrollLock } from '@vueuse/core'

defineProps<{
  links: NavLink[]
}>()

const { toggle, isActive } = useStateToggle()

const isLangOpen = computed(() => isActive('language'))
const isMenuOpen = computed(() => isActive('menu'))
const isAnyOpen = computed(() => isLangOpen.value || isMenuOpen.value)

const isLocked = useScrollLock(typeof document !== 'undefined' ? document.body : null)

watch(isAnyOpen, (val) => {
  isLocked.value = val
})

useEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isAnyOpen.value)
    closeAll()
})

const { locales, locale: currentLocale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => typeof i !== 'string' && i.code)
})

function closeAll() {
  if (isLangOpen.value)
    toggle('language')
  if (isMenuOpen.value)
    toggle('menu')
}
</script>

<template>
  <div class="flex items-center space-x-1">
    <UiColorSwitch />

    <button
      class="cursor-pointer b-1 b-transparent rounded-md b-solid bg-transparent p1 px1.5 pt1.5 transition-colors hover:(core-border core-ui)"
      :class="isLangOpen ? '!core-border core-ui' : 'text-inherit'"
      aria-haspopup="true"
      :aria-expanded="isLangOpen"
      aria-controls="mobile-nav-panel"
      :aria-label="t('ui.lang.select')"
      @click="toggle('language')"
    >
      <Icon v-once name="lucide:languages" class="h-6 w-6" />
    </button>

    <button
      class="cursor-pointer b-1 b-transparent rounded-md b-solid bg-transparent px1.5 py1 pt1.5 transition-colors hover:(core-border core-ui)"
      :class="isMenuOpen ? '!core-border core-ui' : 'text-inherit'"
      aria-haspopup="true"
      :aria-expanded="isMenuOpen"
      aria-controls="mobile-nav-panel"
      :aria-label="t('aria.open_menu')"
      @click="toggle('menu')"
    >
      <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:text-align-end'" class="h-6 w-6" />
    </button>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
        leave-active-class="transition duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0"
      >
        <div v-if="isAnyOpen" class="fixed inset-0 z-40 backdrop-blur-sm" @click="closeAll" />
      </Transition>

      <Transition
        mode="out-in"
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="-translate-y-4 opacity-0 scale-95"
        enter-to-class="translate-y-0 opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="translate-y-0 opacity-100 scale-100"
        leave-to-class="-translate-y-4 opacity-0 scale-95"
      >
        <div
          v-if="isAnyOpen"
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          class="fixed left-4 right-4 top-18 z-50 max-h-[75vh] flex flex-col overflow-y-auto core-border rounded-xl core-ui p-3 shadow-2xl"
        >
          <div v-if="isLangOpen" key="lang-content" class="flex flex-col space-y-2">
            <div class="px-3 py-2 text-[12px] font-bold tracking-widest uppercase opacity-60">
              {{ t('ui.lang.select') }}
            </div>
            <NuxtLink
              v-for="l in availableLocales" :key="l.code"
              :to="switchLocalePath(l.code)"
              class="flex items-center justify-between b-transparent rounded-lg b-solid p-3 text-black no-underline transition-all hover:(bg-neutral-200 dark:hover:bg-white/5) dark:text-white"
              :class="l.code === currentLocale ? 'bg-white dark:bg-black !core-border pointer-events-none' : 'text-inherit border border-1 border-transparent'"
              @click="closeAll"
            >
              <span class="text-md">{{ l.name }}</span>
              <Icon v-if="l.code === currentLocale" name="lucide:check" class="text-primary-500" />
            </NuxtLink>
          </div>

          <nav v-else-if="isMenuOpen" key="menu-content" class="flex flex-col space-y-2">
            <div class="px-3 py-2 text-[12px] font-bold tracking-widest uppercase opacity-60">
              {{ t('ui.menu') }}
            </div>
            <NuxtLinkLocale
              v-for="(link, index) in links" :key="index" :to="link.url"
              class="b-1 border-transparent rounded-lg b-solid p-3 text-lg text-black font-semibold no-underline transition-all hover:(bg-neutral-200 dark:hover:bg-white/5) dark:text-white"
              active-class="bg-white dark:bg-black !core-border pointer-events-none"
              @click="closeAll"
            >
              {{ t(link.name) }}
            </NuxtLinkLocale>
          </nav>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
