<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

defineProps<{
  accentColor: string
}>()

interface CursorSpark {
  id: number
  x: number
  y: number
  dx: number
  dy: number
  size: number
}

const visible = ref(false)
const hovered = ref(false)
const pressed = ref(false)
const cursorX = ref(-100)
const cursorY = ref(-100)
const ringX = ref(-100)
const ringY = ref(-100)
const sparks = ref<CursorSpark[]>([])

let rafId = 0
let sparkCounter = 0
let lastSparkTime = 0

function spawnSpark(x: number, y: number, count = 1) {
  for (let i = 0; i < count; i++) {
    const id = ++sparkCounter
    const angle = Math.random() * Math.PI * 2
    const dist = 10 + Math.random() * 18
    sparks.value.push({
      id,
      x,
      y,
      dx: Math.cos(angle) * dist,
      dy: Math.sin(angle) * dist - 8,
      size: 4 + Math.random() * 4
    })
    if (sparks.value.length > 14) {
      sparks.value.shift()
    }
    window.setTimeout(() => {
      sparks.value = sparks.value.filter((s) => s.id !== id)
    }, 680)
  }
}

function onPointerMove(e: PointerEvent) {
  if (e.pointerType === 'touch') {
    visible.value = false
    return
  }
  visible.value = true
  cursorX.value = e.clientX
  cursorY.value = e.clientY

  const target = e.target as HTMLElement | null
  hovered.value = Boolean(target?.closest('button, a, input, select, [role="button"]'))

  const now = performance.now()
  if (now - lastSparkTime > 95 && Math.hypot(e.movementX, e.movementY) > 6) {
    lastSparkTime = now
    spawnSpark(e.clientX, e.clientY, 1)
  }
}

function onPointerDown(e: PointerEvent) {
  if (e.pointerType === 'touch') return
  pressed.value = true
  spawnSpark(e.clientX, e.clientY, 4)
}

function onPointerUp() {
  pressed.value = false
}

function onPointerLeave() {
  visible.value = false
}

function tick() {
  ringX.value += (cursorX.value - ringX.value) * 0.15
  ringY.value += (cursorY.value - ringY.value) * 0.15
  rafId = window.requestAnimationFrame(tick)
}

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isCoarse = window.matchMedia('(pointer: coarse)').matches
  if (prefersReduced || isCoarse) return

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('pointerdown', onPointerDown, { passive: true })
  window.addEventListener('pointerup', onPointerUp, { passive: true })
  document.addEventListener('pointerleave', onPointerLeave)
  rafId = window.requestAnimationFrame(tick)
})

onUnmounted(() => {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerdown', onPointerDown)
  window.removeEventListener('pointerup', onPointerUp)
  document.removeEventListener('pointerleave', onPointerLeave)
  if (rafId) window.cancelAnimationFrame(rafId)
})
</script>

<template>
  <div v-if="visible" class="moe-cursor-layer" aria-hidden="true">
    <!-- Ephemeral Stardust Trail Particles -->
    <span
      v-for="spark in sparks"
      :key="spark.id"
      class="moe-cursor-spark"
      :style="{
        left: `${spark.x}px`,
        top: `${spark.y}px`,
        width: `${spark.size}px`,
        height: `${spark.size}px`,
        color: accentColor,
        '--spark-dx': `${spark.dx}px`,
        '--spark-dy': `${spark.dy}px`
      }"
    />

    <!-- Soft Trailing Halo Ring -->
    <div
      class="moe-cursor-halo"
      :class="{ 'is-hovered': hovered, 'is-pressed': pressed }"
      :style="{
        transform: `translate3d(${ringX}px, ${ringY}px, 0)`,
        borderColor: accentColor
      }"
    />

    <!-- Slowly Rotating 4-Point Star Core -->
    <div
      class="moe-cursor-star"
      :class="{ 'is-hovered': hovered, 'is-pressed': pressed }"
      :style="{
        transform: `translate3d(${cursorX}px, ${cursorY}px, 0)`,
        color: accentColor
      }"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c.6 5.2 4.8 9.4 10 10-5.2.6-9.4 4.8-10 10-.6-5.2-4.8-9.4-10-10 5.2-.6 9.4-4.8 10-10Z" />
      </svg>
    </div>
  </div>
</template>
