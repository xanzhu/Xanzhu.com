<template>
    <div class="b-transparent md:b-1 b-solid b-dark-500 p-2 md:p-10 mx-auto max-w-4xl min-h-sm mb-10">
      <div class="grid grid-cols-2 mt-5">
        <div
          class="row-span-1 col-span-2 h-full w-full flex justify-between max-h-30"
        >
          <div
            class="w-3/2 bg-[#FAFF06] text-black m-1 text-4xl font-bold pl5 md:pr-100 py-4 md:py-6 rounded-sm"
          >
          {{ $t("StatsCard.title") }}
          </div>
          <div
            class="hidden w-1/2 dark:bg-white bg-black m-1 rounded-sm md:flex items-center justify-center"
          >
            <Icon
              name="material-symbols:shield-lock"
              class="h20 w20 dark:text-black text-white"
            ></Icon>
          </div>
        </div>
        <div
          class="row-span-1 col-span-2 h-full w-full md:flex-row flex flex-col justify-between children:m-1"
        >
          <div class="md:w-1/2 bg-black rounded-sm b-1 b-solid b-dark-600">
            <p class="m0 p-4 font-semibold text-xl text-[#FAFF06]">
                {{ $t("StatsCard.threats.title") }}
            </p>
            <div
              class="text-white b-dark-400 p-4 mx-4 mb-5 rounded-sm font-bold space-y-5"
            >
              <p>{{ $t('StatsCard.threats.1')}}</p>
              <p>{{ $t('StatsCard.threats.2')}}</p>
              <p>{{ $t('StatsCard.threats.3')}}</p>
              <p>{{ $t('StatsCard.threats.4')}}</p>
            </div>
          </div>
          <div class="md:w-1/2 bg-black rounded-sm b-1 b-solid b-dark-600">
            <p class="m0 p-4 font-semibold text-xl text-white"> {{ $t("StatsCard.breaches.title") }}</p>
            <div
              class="bg-[#FAFF06] p-4 mx-4 mb-5 rounded-sm text-black justify-center flex flex-col items-center font-bold space-y-5"
            >
              <p>{{ $t('StatsCard.breach.1')}}</p>
              <p>{{ $t('StatsCard.breach.2')}}</p>
              <p>{{ $t('StatsCard.breach.3')}}</p>
              <p>{{ $t('StatsCard.breach.4')}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-xs font-thin op90 m-2">
        {{ $t("StatsCard.warn") }}
      </div>
    </div>
  </template>
  