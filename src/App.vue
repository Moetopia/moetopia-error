<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, onUnmounted, ref, watch } from 'vue'
import { MoeButton } from '@moetopia/ui'
import CustomCursor from './components/CustomCursor.vue'
import LucideFloatingIcon from './components/LucideFloatingIcon.vue'
import ScenePlaceholder from './components/ScenePlaceholder.vue'
import { ERROR_PAGE_PRESETS, detectBrowserLang, resolveLangCode, resolvePageKey } from './presets'
import type { ErrorPageKey, LangCode } from './types'

const isDev = import.meta.env.DEV
const MatrixInspector = isDev
  ? defineAsyncComponent(() => import('./components/MatrixInspector.vue'))
  : null

const LANG_CYCLE: LangCode[] = ['zh', 'ja', 'en', 'mix']
const LANG_ROTATE_INTERVAL_MS = 10000

const searchString = ref(typeof window !== 'undefined' ? window.location.search : '')
const pathname = ref(typeof window !== 'undefined' ? window.location.pathname : '/')

const params = computed(() => new URLSearchParams(searchString.value))

const activeKey = computed<ErrorPageKey>(() => {
  const codeParam =
    params.value.get('code') ??
    params.value.get('status') ??
    params.value.get('type') ??
    (typeof window !== 'undefined'
      ? (window as unknown as { __MOETOPIA_ERROR_CODE__?: string }).__MOETOPIA_ERROR_CODE__
      : undefined)
  return resolvePageKey(codeParam, pathname.value)
})

const activeLang = ref<LangCode>(
  resolveLangCode(params.value.get('lang') ?? params.value.get('locale'))
)

watch(
  () => params.value.get('lang') ?? params.value.get('locale'),
  (raw) => {
    if (raw) {
      activeLang.value = resolveLangCode(raw)
    }
  }
)

const isCardHovered = ref(false)
let langTimerId = 0

function startLangAutoRotation() {
  if (langTimerId) window.clearInterval(langTimerId)
  const autoLangParam = params.value.get('autoLang')
  if (autoLangParam === '0' || autoLangParam === 'false') return

  langTimerId = window.setInterval(() => {
    if (isCardHovered.value) return
    const idx = LANG_CYCLE.indexOf(activeLang.value)
    const nextIdx = (idx + 1) % LANG_CYCLE.length
    activeLang.value = LANG_CYCLE[nextIdx]
  }, LANG_ROTATE_INTERVAL_MS)
}

const preset = computed(() => ERROR_PAGE_PRESETS[activeKey.value])
const localeContent = computed(() => preset.value.locales[activeLang.value])

const watermarkText = computed(() => params.value.get('watermark') || localeContent.value.watermark)
const eyebrowText = computed(
  () => params.value.get('eyebrow') || params.value.get('subtitle') || localeContent.value.eyebrow
)
const titleText = computed(() => params.value.get('title') || localeContent.value.title)
const descriptionText = computed(
  () => params.value.get('desc') || params.value.get('description') || localeContent.value.description
)
const verticalPoemText = computed(() => params.value.get('poem') || localeContent.value.verticalPoem)
const verticalPoemChars = computed(() => Array.from(verticalPoemText.value))
const traceCodeText = computed(() => params.value.get('trace') || preset.value.traceCode)

const showProgress = computed(() => {
  const raw = params.value.get('progress')
  if (raw === 'hide' || raw === 'none' || raw === 'false' || raw === '0-hide') return false
  if (raw !== null && raw !== '') return true
  return preset.value.showProgressByDefault
})

const progressValue = computed(() => {
  const raw = params.value.get('progress')
  if (raw !== null && raw !== '') {
    const parsed = Number(raw)
    if (!Number.isNaN(parsed)) {
      return Math.min(100, Math.max(0, Math.round(parsed)))
    }
  }
  return preset.value.defaultProgress
})

const showSchedule = computed(() => {
  const scheduleFlag = params.value.get('schedule')
  if (scheduleFlag === 'hide' || scheduleFlag === '0' || scheduleFlag === 'false') return false
  if (params.value.get('start') || params.value.get('end') || scheduleFlag === '1') return true
  return preset.value.showScheduleByDefault
})

const startTimeText = computed(() => params.value.get('start') || preset.value.defaultStart)
const endTimeText = computed(() => params.value.get('end') || preset.value.defaultEnd)

const showAction = computed(() => {
  const actionFlag = params.value.get('action')
  if (actionFlag === 'hide' || actionFlag === '0' || actionFlag === 'false') return false
  if (params.value.get('actionText') || params.value.get('actionUrl') || actionFlag === '1') return true
  return preset.value.showActionByDefault
})

const actionText = computed(() => params.value.get('actionText') || localeContent.value.actionText || 'Continue')
const actionUrl = computed(
  () => params.value.get('actionUrl') || params.value.get('redirect') || preset.value.defaultActionUrl
)

const customImgUrl = computed(() => params.value.get('img') || params.value.get('image') || '')

const showInspector = computed(() => {
  if (!isDev) return false
  const clean = params.value.get('clean')
  const inspector = params.value.get('inspector')
  if (clean === '1' || clean === 'true' || inspector === '0' || inspector === 'false') return false
  return true
})

const actionChecking = ref(false)

function handleActionClick() {
  if (actionUrl.value) {
    window.location.href = actionUrl.value
    return
  }
  actionChecking.value = true
  window.setTimeout(() => {
    actionChecking.value = false
    if (activeKey.value === '500') {
      window.location.reload()
    }
  }, 680)
}

function syncUrlParams(mutator: (next: URLSearchParams) => void) {
  const next = new URLSearchParams(searchString.value)
  mutator(next)
  const query = next.toString()
  const newUrl = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`
  window.history.replaceState({}, '', newUrl)
  searchString.value = window.location.search
}

function onSelectPage(key: ErrorPageKey) {
  syncUrlParams((next) => {
    next.set('code', key)
    next.delete('progress')
  })
}

function onSelectLang(lang: LangCode) {
  activeLang.value = lang
  startLangAutoRotation()
  syncUrlParams((next) => {
    next.set('lang', lang)
  })
}

function onUpdateProgress(val: number) {
  syncUrlParams((next) => {
    next.set('progress', String(val))
  })
}

function onResetParams() {
  const baseUrl = window.location.pathname
  window.history.replaceState({}, '', baseUrl)
  searchString.value = ''
  activeLang.value = detectBrowserLang()
  startLangAutoRotation()
}

watch(
  [activeKey, eyebrowText],
  () => {
    if (typeof document !== 'undefined') {
      document.title = `${preset.value.httpCode} // ${eyebrowText.value}`
    }
  },
  { immediate: true }
)

const parallaxX = ref(0)
const parallaxY = ref(0)
const targetParallaxX = ref(0)
const targetParallaxY = ref(0)
let parallaxRaf = 0

const cardTiltX = ref(0)
const cardTiltY = ref(0)
const glareX = ref(50)
const glareY = ref(50)

function onCardPointerMove(e: PointerEvent) {
  if (e.pointerType === 'touch') return
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const rx = (e.clientX - rect.left) / rect.width
  const ry = (e.clientY - rect.top) / rect.height
  glareX.value = Math.round(rx * 100)
  glareY.value = Math.round(ry * 100)
  cardTiltX.value = (0.5 - ry) * 3.2
  cardTiltY.value = (rx - 0.5) * 3.2
}

function onCardPointerEnter() {
  isCardHovered.value = true
}

function onCardPointerLeave() {
  isCardHovered.value = false
  cardTiltX.value = 0
  cardTiltY.value = 0
}

function onWindowPointerMove(e: PointerEvent) {
  if (e.pointerType === 'touch') return
  const nx = (e.clientX / window.innerWidth - 0.5) * 2
  const ny = (e.clientY / window.innerHeight - 0.5) * 2
  targetParallaxX.value = nx
  targetParallaxY.value = ny
}

function updateParallax() {
  parallaxX.value += (targetParallaxX.value - parallaxX.value) * 0.06
  parallaxY.value += (targetParallaxY.value - parallaxY.value) * 0.06
  parallaxRaf = window.requestAnimationFrame(updateParallax)
}

function onPopState() {
  searchString.value = window.location.search
  pathname.value = window.location.pathname
}

onMounted(() => {
  window.addEventListener('popstate', onPopState)
  startLangAutoRotation()
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!prefersReduced) {
    window.addEventListener('pointermove', onWindowPointerMove, { passive: true })
    parallaxRaf = window.requestAnimationFrame(updateParallax)
  }
})

onUnmounted(() => {
  window.removeEventListener('popstate', onPopState)
  window.removeEventListener('pointermove', onWindowPointerMove)
  if (parallaxRaf) window.cancelAnimationFrame(parallaxRaf)
  if (langTimerId) window.clearInterval(langTimerId)
})

const themeVars = computed(() => {
  const t = preset.value.theme
  return {
    '--ep-canvas-bg': t.canvasBg,
    '--ep-canvas-gradient': t.canvasGradient,
    '--ep-watermark': t.watermarkColor,
    '--ep-eyebrow': t.eyebrowColor,
    '--ep-card-bg': t.cardBg,
    '--ep-card-shadow': t.cardShadow,
    '--ep-title': t.titleColor,
    '--ep-desc': t.descColor,
    '--ep-accent': t.accentColor,
    '--ep-btn-border': t.buttonBorder,
    '--ep-btn-text': t.buttonText,
    '--ep-btn-hover': t.buttonHoverBg,
    '--ep-progress-fill': t.progressFill,
    '--ep-progress-track': t.progressTrack,
    '--ep-poem': t.poemColor,
    '--ep-trace': t.traceColor,
    '--ep-divider': t.dividerColor
  }
})
</script>

<template>
  <div class="moe-ethereal-viewport" :style="themeVars" :data-page="activeKey">
    <!-- Immersive Custom Cursor with Stardust Trail -->
    <CustomCursor :accent-color="preset.theme.accentColor" />

    <!-- Breathing Ambient Light Halos in Background -->
    <div class="moe-ambient-aurora" aria-hidden="true">
      <div
        class="moe-ambient-orb orb-primary"
        :style="{
          transform: `translate3d(${parallaxX * -22}px, ${parallaxY * -18}px, 0)`
        }"
      />
      <div
        class="moe-ambient-orb orb-secondary"
        :style="{
          transform: `translate3d(${parallaxX * 18}px, ${parallaxY * 22}px, 0)`
        }"
      />
    </div>

    <!-- Scattered Ultra-Thin Lucide Floating Icons (Parallax Layer 1) -->
    <div class="moe-floating-field" aria-hidden="true">
      <div
        v-for="(node, idx) in preset.floatingNodes"
        :key="`${activeKey}-node-${idx}`"
        class="moe-floating-item"
        :style="{
          left: node.left,
          right: node.right,
          top: node.top,
          bottom: node.bottom,
          color: node.color,
          animationDelay: node.delay,
          transform: `translate3d(${parallaxX * node.depth * 14}px, ${parallaxY * node.depth * 14}px, 0) rotate(${node.rotate}deg)`
        }"
      >
        <LucideFloatingIcon :name="node.icon" :size="node.size" :stroke-width="0.85" />
      </div>
    </div>

    <!-- Right-Side Vertical Poetic Typography (竖向明朝体逐字流转诗句) -->
    <aside
      class="moe-vertical-poem-rail"
      aria-label="Poetic Verse"
      :style="{
        transform: `translate3d(${parallaxX * -5}px, calc(-50% + ${parallaxY * -5}px), 0)`
      }"
    >
      <transition name="moe-breeze-fade" mode="out-in">
        <p :key="`${activeKey}-${activeLang}-poem`" class="moe-vertical-poem">
          <span
            v-for="(ch, idx) in verticalPoemChars"
            :key="idx"
            class="moe-poem-char"
            :style="{ '--char-idx': idx }"
          >{{ ch }}</span>
        </p>
      </transition>
    </aside>

    <!-- Main Centered Stage -->
    <main class="moe-stage">
      <!-- Giant Ethereal Watermark (503 / 404 / 403 / 500 / 定期メンテナンス) -->
      <div
        class="moe-watermark-wrap"
        aria-hidden="true"
        :style="{
          transform: `translate3d(${parallaxX * 10}px, ${parallaxY * 8}px, 0)`
        }"
      >
        <transition name="moe-breeze-watermark" mode="out-in">
          <div
            :key="`${activeKey}-${watermarkText}`"
            class="moe-watermark"
            :data-watermark-style="preset.watermarkStyle"
          >
            {{ watermarkText }}
          </div>
        </transition>
      </div>

      <!-- Uppercase Tracked Eyebrow Subtitle -->
      <transition name="moe-breeze-fade" mode="out-in">
        <p :key="`${activeKey}-${eyebrowText}`" class="moe-eyebrow">
          {{ eyebrowText }}
        </p>
      </transition>

      <!-- Soft Glassmorphism Card with 3D Breeze Tilt & Specular Sheen -->
      <transition name="moe-breeze-card" mode="out-in">
        <section
          :key="activeKey"
          class="moe-glass-card"
          :class="{ 'is-hovered': isCardHovered }"
          :style="{
            '--glare-x': `${glareX}%`,
            '--glare-y': `${glareY}%`,
            transform: `perspective(1100px) translate3d(${parallaxX * -4}px, ${parallaxY * -4}px, 0) rotateX(${cardTiltX}deg) rotateY(${cardTiltY}deg)`
          }"
          @pointermove="onCardPointerMove"
          @pointerenter="onCardPointerEnter"
          @pointerleave="onCardPointerLeave"
        >
          <!-- Soft Specular Glass Reflection Layer -->
          <div class="moe-card-glare" aria-hidden="true" />

          <!-- Left Column: Illustration Frame -->
          <div class="moe-card-media">
            <ScenePlaceholder
              :page-key="activeKey"
              :custom-img-url="customImgUrl"
              :default-path="preset.defaultIllustrationPath"
              :parallax-x="parallaxX"
              :parallax-y="parallaxY"
            />
          </div>

          <!-- Right Column: Poetic Copy, Progress, Schedule & Action (smoothly fades on 30s i18n rotation) -->
          <transition name="moe-breeze-fade" mode="out-in">
            <div :key="`${activeKey}-${activeLang}`" class="moe-card-body">
              <h1
                class="moe-card-title moe-stagger-item"
                style="--stagger: 0"
                :data-weight="preset.titleWeight"
              >
                {{ titleText }}
              </h1>

              <p class="moe-card-desc moe-stagger-item" style="--stagger: 1">
                {{ descriptionText }}
              </p>

              <!-- Maintenance Progress Bar (503 & Scheduled Maintenance or ?progress=...) -->
              <div
                v-if="showProgress"
                class="moe-progress-block moe-stagger-item"
                style="--stagger: 2"
              >
                <div class="moe-progress-header">
                  <span class="moe-progress-label">{{ localeContent.progressLabel }}</span>
                  <span class="moe-progress-value tabular-nums">
                    {{ progressValue }}% {{ localeContent.progressSuffix }}
                  </span>
                </div>
                <div
                  class="moe-progress-track"
                  role="progressbar"
                  :aria-label="localeContent.progressLabel"
                  :aria-valuenow="progressValue"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="moe-progress-bar-fill"
                    :style="{ width: `${progressValue}%` }"
                  >
                    <span class="moe-progress-shimmer" />
                  </div>
                </div>
              </div>

              <!-- Scheduled Maintenance Time Window Table (Page 5 or ?start=...&end=...) -->
              <dl
                v-if="showSchedule"
                class="moe-schedule-list moe-stagger-item"
                style="--stagger: 3"
              >
                <div v-if="startTimeText" class="moe-schedule-row">
                  <dt class="moe-schedule-term">{{ localeContent.startLabel }}</dt>
                  <dd class="moe-schedule-detail tabular-nums">{{ startTimeText }}</dd>
                </div>
                <div v-if="endTimeText" class="moe-schedule-row">
                  <dt class="moe-schedule-term">{{ localeContent.endLabel }}</dt>
                  <dd class="moe-schedule-detail tabular-nums">{{ endTimeText }}</dd>
                </div>
              </dl>

              <!-- Action Button (@moetopia/ui MoeButton) -->
              <div
                v-if="showAction"
                class="moe-action-wrap moe-stagger-item"
                style="--stagger: 4"
              >
                <MoeButton
                  variant="bordered"
                  size="sm"
                  :loading="actionChecking"
                  class="moe-ethereal-btn"
                  @click="handleActionClick"
                >
                  {{ actionText }}
                </MoeButton>
              </div>
            </div>
          </transition>
        </section>
      </transition>

      <!-- Bottom Footer Trace Code -->
      <transition name="moe-breeze-fade" mode="out-in">
        <footer :key="`${activeKey}-${traceCodeText}`" class="moe-trace-footer">
          {{ traceCodeText }}
        </footer>
      </transition>
    </main>

    <!-- Dev-Only Interactive Preview & Parameter Inspector (completely excluded in production builds) -->
    <component
      :is="MatrixInspector"
      v-if="isDev && showInspector && MatrixInspector"
      :active-key="activeKey"
      :active-lang="activeLang"
      :progress="progressValue"
      :show-progress="showProgress"
      @select-page="onSelectPage"
      @select-lang="onSelectLang"
      @update-progress="onUpdateProgress"
      @reset-params="onResetParams"
    />
  </div>
</template>
