<script setup lang="ts">
const { videoId, title } = defineProps<{
  videoId: string;
  title?: string;
}>();

const { t } = useI18n();

const isPlaying = ref(false);
const hasError = ref(false);

interface YoutubeStateEvent {
  data: number;
}

function stateChange(event: YoutubeStateEvent) {
  isPlaying.value = event.data === 1;
}

const iframeTitle = computed(() => title || t("common.article.video"));
</script>

<template>
  <div class="rounded-md aspect-video relative overflow-hidden bg-black/5 dark:bg-white/5">
    <div
      v-if="hasError"
      role="alert"
      class="text-sm bg-black/10 flex items-center inset-0 justify-center absolute z-10"
    >
      {{ t("common.article.noVideo") }}
    </div>

    <ScriptYouTubePlayer
      v-else
      :video-id="videoId"
      :title="iframeTitle"
      @state-change="stateChange"
      @error="hasError = true"
    >
      <template #awaitingLoad>
        <button
          class="border-none bg-transparent cursor-pointer flex items-center inset-0 justify-center absolute w-full h-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600 dark:focus-visible:ring-offset-black"
          :aria-label="t('common.article.loadVideo')"
        >
          <svg
            class="h-12 w-17 transition-transform group-hover:scale-110 drop-shadow-md"
            viewBox="0 0 68 48"
            aria-hidden="true"
          >
            <path
              d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
              fill="#f00"
            />
            <path d="M 45,24 27,14 27,34" fill="#fff" />
          </svg>
        </button>
      </template>
    </ScriptYouTubePlayer>
  </div>
</template>
