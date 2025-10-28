<script setup lang="ts">
interface Props {
  videoId: string
  title?: string
}

const props = defineProps<Props>()
const { t } = useI18n()

const isLoaded = ref(false)
const isPlaying = ref(false)
const video = ref()

function stateChange(event: any) {
  isPlaying.value = event.data === 1
}

const iframeTitle = computed(() =>
  props.title || t('v2.blog.videoIframe'),
)

// Cleanup on unmount to prevent memory leaks
onBeforeUnmount(() => {
  if (video.value?.destroy) {
    video.value.destroy()
  }
})
</script>

<template>
  <div class="relative aspect-video overflow-hidden rounded-md">
    <ScriptYouTubePlayer
      ref="video"
      :key="videoId"
      :video-id="videoId"
      :title="iframeTitle"
      @ready="isLoaded = true"
      @state-change="stateChange"
    >
      <template #awaitingLoad>
        <div
          class="absolute inset-0 flex items-center justify-center bg-black/10"
          :aria-label="t('v2.blog.videoClick')"
        >
          <svg
            class="h-12 w-17 transition-transform hover:scale-110"
            viewBox="0 0 68 48"
            aria-hidden="true"
          >
            <path
              d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
              fill="#f00"
            />
            <path d="M 45,24 27,14 27,34" fill="#fff" />
          </svg>
        </div>
      </template>
    </ScriptYouTubePlayer>
  </div>
</template>
