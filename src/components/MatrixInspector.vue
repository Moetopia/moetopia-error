<script setup lang="ts">
import { ref } from 'vue'
import { ERROR_PAGE_ORDER } from '../presets'
import type { ErrorPageKey, LangCode } from '../types'
import LucideFloatingIcon from './LucideFloatingIcon.vue'

defineProps<{
  activeKey: ErrorPageKey
  activeLang: LangCode
  progress: number
  showProgress: boolean
}>()

const emit = defineEmits<{
  (e: 'select-page', key: ErrorPageKey): void
  (e: 'select-lang', lang: LangCode): void
  (e: 'update-progress', value: number): void
  (e: 'reset-params'): void
}>()

const expanded = ref(false)
const copied = ref(false)

const pageShortLabels: Record<ErrorPageKey, string> = {
  '503': '503 小憩',
  '404': '404 迷失',
  '403': '403 结界',
  '500': '500 星坠',
  maintenance: '503 定期'
}

const langOptions: { code: LangCode; label: string }[] = [
  { code: 'mix', label: 'PDF 原版' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'EN' }
]

async function copyCurrentUrl() {
  try {
    await navigator.clipboard.writeText(window.location.href)
    copied.value = true
    window.setTimeout(() => {
      copied.value = false
    }, 1800)
  } catch {
    copied.value = false
  }
}
</script>

<template>
  <aside class="moe-inspector" aria-label="Error Matrix Dev Controls">
    <!-- Compact Pill Bar -->
    <div class="moe-inspector-pill">
      <div class="moe-inspector-pages" role="tablist" aria-label="Status Page Presets">
        <button
          v-for="key in ERROR_PAGE_ORDER"
          :key="key"
          type="button"
          role="tab"
          :aria-selected="activeKey === key"
          class="moe-inspector-tab"
          :class="{ 'is-active': activeKey === key }"
          @click="emit('select-page', key)"
        >
          {{ pageShortLabels[key] }}
        </button>
      </div>

      <span class="moe-inspector-sep" aria-hidden="true" />

      <button
        type="button"
        class="moe-inspector-icon-btn"
        :aria-expanded="expanded"
        aria-label="Toggle parameter controls"
        @click="expanded = !expanded"
      >
        <LucideFloatingIcon :name="expanded ? 'close' : 'sliders'" :size="14" :stroke-width="1.3" />
      </button>
    </div>

    <!-- Expandable Parameter Drawer -->
    <transition name="moe-breeze-pop">
      <div v-if="expanded" class="moe-inspector-drawer">
        <div class="moe-inspector-row">
          <span class="moe-inspector-label">
            <LucideFloatingIcon name="globe" :size="13" :stroke-width="1.3" />
            <span>Language (10s Auto Cycle)</span>
          </span>
          <div class="moe-inspector-seg">
            <button
              v-for="item in langOptions"
              :key="item.code"
              type="button"
              class="moe-inspector-seg-btn"
              :class="{ 'is-active': activeLang === item.code }"
              @click="emit('select-lang', item.code)"
            >
              {{ item.label }}
            </button>
          </div>
        </div>

        <div v-if="showProgress" class="moe-inspector-row">
          <div class="moe-inspector-label-between">
            <span>Progress (?progress=)</span>
            <span class="tabular-nums">{{ progress }}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            :value="progress"
            class="moe-inspector-range"
            aria-label="Maintenance progress percentage"
            @input="emit('update-progress', Number(($event.target as HTMLInputElement).value))"
          />
        </div>

        <div class="moe-inspector-footer">
          <button type="button" class="moe-inspector-action flex-1" @click="copyCurrentUrl">
            <LucideFloatingIcon :name="copied ? 'check' : 'copy'" :size="13" :stroke-width="1.3" />
            <span>{{ copied ? '已复制链接' : '复制参数URL' }}</span>
          </button>

          <button
            type="button"
            class="moe-inspector-action"
            aria-label="Reset URL parameters"
            @click="emit('reset-params')"
          >
            <LucideFloatingIcon name="refresh" :size="13" :stroke-width="1.3" />
          </button>
        </div>
      </div>
    </transition>
  </aside>
</template>
