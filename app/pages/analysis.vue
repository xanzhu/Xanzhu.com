<script setup>
import Chart from 'chart.js/auto'

const aiThreatChartRef = ref(null)
let chartInstance = null

const { t } = useI18n()

onMounted(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }

  const ctx = aiThreatChartRef.value.getContext('2d')

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [t('analysis.graph.initialThreat'), t('analysis.graph.aiIntegration'), t('analysis.graph.targetedAttacks'), t('analysis.graph.advancedPersistentThreat'), t('analysis.graph.peakSophistication')],
      datasets: [{
        label: t('analysis.graph.label'),
        data: [20, 40, 60, 80, 100],
        borderColor: '#3B82F6', // Blue color for the line
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 3,
        pointBackgroundColor: '#3B82F6',
        pointRadius: 6,
        pointHoverRadius: 8,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        title: {
          display: true,
          text: t('analysis.graph.title'),
          color: '#000000',
          font: {
            size: 16,
          },
        },
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: t('analysis.graph.yAxis'),
            color: '#000000',
          },
          beginAtZero: true,
          max: 100,
          ticks: {
            color: '#000000',
            stepSize: 20,
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
          },
        },
        x: {
          title: {
            display: true,
            text: t('analysis.graph.xAxis'),
            color: '#000000',
          },
          ticks: {
            color: '#000000',
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
  })
})

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy()
    chartInstance = null
  }
})

const seoImage = 'https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg'
useLangMeta('analysis.meta', seoImage)
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-black">
    <!-- Header Section -->
    <div class="py-12 text-center text-inherit">
      <h1 class="mb-4 text-4xl font-bold">
        {{ $t('analysis.hero.title') }}
      </h1>
      <p class="mx-auto max-w-2xl text-lg">
        {{ $t('analysis.hero.subhead') }}
      </p>
    </div>

    <!-- Key Trend Section -->
    <div class="mx-auto max-w-4xl px-4 py-12 space-y-12">
      <div class="rounded-lg bg-white p-6 shadow-lg core-border">
        <h2 class="mb-4 text-2xl text-gray-800 font-semibold">
          {{ $t('analysis.keyTrend.title') }}
        </h2>
        <p class="mb-6 text-gray-700">
          {{ $t('analysis.keyTrend.desc') }}
        </p>
        <div class="relative">
          <canvas ref="aiThreatChartRef" class="max-w-full" />
        </div>
      </div>
    </div>
  </div>
</template>
