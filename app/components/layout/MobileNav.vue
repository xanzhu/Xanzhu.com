<script setup lang="ts">
import { useEventListener, useScrollLock } from '@vueuse/core'

const { links } = defineProps<{ links: NavLink[] }>()

const { toggle, isActive } = useStateToggle()

const isLangOpen = computed(() => isActive('language'))
const isMenuOpen = computed(() => isActive('menu'))
const isAnyOpen = computed(() => isLangOpen.value || isMenuOpen.value)

const isLocked = useScrollLock(typeof document !== 'undefined' ? document.body : null)

watch(isAnyOpen, (val) => {
  isLocked.value = val
})

const panelId = useId()

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
      class="p1 px1.5 pt1.5 b-1 b-transparent rounded-md b-solid bg-transparent cursor-pointer transition-colors hover:(core-ui core-border)"
      :class="isLangOpen ? '!core-border core-ui' : 'text-inherit'"
      aria-haspopup="true"
      :aria-expanded="isLangOpen"
      :aria-controls="panelId"
      :aria-label="t('ui.lang.select')"
      @click="toggle('language')"
    >
      <Icon v-once name="lucide:languages" class="h-6 w-6" />
    </button>

    <button
      class="px1.5 py1 pt1.5 b-1 b-transparent rounded-md b-solid bg-transparent cursor-pointer transition-colors hover:(core-ui core-border)"
      :class="isMenuOpen ? '!core-border core-ui' : 'text-inherit'"
      aria-haspopup="true"
      :aria-expanded="isMenuOpen"
      :aria-controls="panelId"
      :aria-label="t('aria.open_menu')"
      @click="toggle('menu')"
    >
      <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" class="h-6 w-6" />
    </button>

    <Teleport defer to="body">
      <Transition
        enter-active-class="transition duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
        leave-active-class="transition duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0"
      >
        <div v-if="isAnyOpen" class="inset-0 fixed z-40 backdrop-blur-sm" @click="closeAll" />
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
          :id="panelId"
          role="dialog"
          aria-modal="true"
          class="core-ui p-3 core-border rounded-xl flex flex-col max-h-[75vh] shadow-2xl left-4 right-4 top-18 fixed z-50 overflow-y-auto"
        >
          <div v-if="isLangOpen" key="lang-content" class="flex flex-col space-y-2">
            <div class="text-[12px] tracking-widest font-bold px-3 py-2 opacity-60 uppercase">
              {{ t('ui.lang.select') }}
            </div>
            <NuxtLink
              v-for="l in availableLocales" :key="l.code"
              :to="switchLocalePath(l.code)"
              class="text-black p-3 b-transparent rounded-lg b-solid no-underline flex transition-all items-center justify-between dark:text-white hover:(bg-neutral-200 dark:hover:bg-white/5)"
              :class="l.code === currentLocale ? 'bg-white dark:bg-black !core-border pointer-events-none' : 'text-inherit border border-1 border-transparent'"
              @click="closeAll"
            >
              <span class="text-md">{{ l.name }}</span>
              <Icon v-if="l.code === currentLocale" name="lucide:check" class="text-primary-500" />
            </NuxtLink>
          </div>

          <nav v-else-if="isMenuOpen" key="menu-content" class="flex flex-col space-y-2">
            <div class="text-[12px] tracking-widest font-bold px-3 py-2 opacity-60 uppercase">
              {{ t('ui.menu') }}
            </div>
            <NuxtLinkLocale
              v-for="(link, index) in links" :key="index" :to="link.url"
              class="text-lg text-black font-semibold p-3 b-1 border-transparent rounded-lg b-solid no-underline transition-all dark:text-white hover:(bg-neutral-200 dark:hover:bg-white/5)"
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
