<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { ErrorPageKey } from '../types'

const props = defineProps<{
  pageKey: ErrorPageKey
  customImgUrl?: string
  defaultPath: string
  parallaxX: number
  parallaxY: number
}>()

const imageLoaded = ref(false)
const imageFailed = ref(false)

const candidateSrc = computed(() => props.customImgUrl || props.defaultPath)

watch(
  () => [props.pageKey, props.customImgUrl],
  () => {
    imageLoaded.value = false
    imageFailed.value = false
  }
)

const focalAnchor = computed(() => {
  switch (props.pageKey) {
    case '403':
      return '60% 48%'
    case '404':
      return '58% 50%'
    case '500':
      return '56% 48%'
    case '503':
      return '60% 48%'
    case 'maintenance':
      return '58% 48%'
  }
})

const sceneBg = computed(() => {
  switch (props.pageKey) {
    case '503':
      return 'linear-gradient(155deg, #dce8d6 0%, #eff2de 48%, #f4e6c8 100%)'
    case '404':
      return 'linear-gradient(180deg, #c8d9eb 0%, #eed7df 48%, #f8e9d6 52%, #d4dceb 100%)'
    case '403':
      return 'linear-gradient(150deg, #e7d4dc 0%, #f3e4d8 45%, #4d566d 100%)'
    case '500':
      return 'linear-gradient(180deg, #1b1d3c 0%, #50366f 42%, #e07a5f 50%, #272649 100%)'
    case 'maintenance':
      return 'linear-gradient(145deg, #f3edd7 0%, #d8dec8 50%, #8e7b66 100%)'
  }
})
</script>

<template>
  <div class="moe-scene-frame" :data-scene="pageKey">
    <!-- High-Res WebP Illustration with Focal Ken Burns Drift + Parallax + Blur-Up Reveal -->
    <div
      v-if="candidateSrc && !imageFailed"
      class="moe-scene-img-stage"
      :class="{ 'is-loaded': imageLoaded }"
      :style="{
        transform: `translate3d(${parallaxX * -7}px, ${parallaxY * -7}px, 0)`
      }"
    >
      <img
        :src="candidateSrc"
        alt=""
        class="moe-scene-image"
        :style="{ objectPosition: focalAnchor }"
        @load="imageLoaded = true"
        @error="imageFailed = true"
      />
    </div>

    <!-- Scene-Specific Cinematic Atmospheric Overlay (Rain / Sunbeams / Starlight Spores / Petals) -->
    <div class="moe-scene-atmosphere" aria-hidden="true">
      <!-- 403: Gentle Rain Streaks & Glass Refraction -->
      <svg
        v-if="pageKey === '403'"
        class="moe-atmo-svg"
        viewBox="0 0 320 320"
        fill="none"
      >
        <line class="moe-rain-drop d1" x1="58" y1="-40" x2="58" y2="360" />
        <line class="moe-rain-drop d2" x1="118" y1="-40" x2="118" y2="360" />
        <line class="moe-rain-drop d3" x1="184" y1="-40" x2="184" y2="360" />
        <line class="moe-rain-drop d4" x1="252" y1="-40" x2="252" y2="360" />
      </svg>

      <!-- 404: Sunset Horizon Flare & Floating Light Motes -->
      <div v-else-if="pageKey === '404'" class="moe-atmo-layer">
        <span class="moe-sun-flare" />
        <span class="moe-mote m1" />
        <span class="moe-mote m2" />
        <span class="moe-mote m3" />
        <span class="moe-mote m4" />
      </div>

      <!-- 500: Bioluminescent Twilight Spores & Cosmic Shimmer -->
      <div v-else-if="pageKey === '500'" class="moe-atmo-layer">
        <span class="moe-spore s1" />
        <span class="moe-spore s2" />
        <span class="moe-spore s3" />
        <span class="moe-spore s4" />
        <span class="moe-spore s5" />
      </div>

      <!-- 503 & Maintenance: Komorebi Sunbeams & Drifting Petals / Pollen -->
      <div v-else class="moe-atmo-layer">
        <span class="moe-komorebi-beam b1" />
        <span class="moe-komorebi-beam b2" />
        <span class="moe-mote m1" />
        <span class="moe-mote m2" />
        <span class="moe-mote m3" />
      </div>

      <!-- Soft Vignette & Inner Glass Rim -->
      <div class="moe-scene-vignette" />
    </div>

    <!-- Fallback Poetic SVG Placeholder (while loading or if image missing) -->
    <div
      v-if="!imageLoaded || imageFailed"
      class="moe-scene-placeholder"
      :style="{ background: sceneBg }"
      aria-hidden="true"
    >
      <svg
        class="moe-scene-canvas-svg"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="160" cy="160" r="56" fill="rgba(255,255,255,0.35)" />
        <line x1="0" y1="168" x2="320" y2="168" stroke="rgba(255,255,255,0.55)" stroke-width="1" />
      </svg>
    </div>
  </div>
</template>
