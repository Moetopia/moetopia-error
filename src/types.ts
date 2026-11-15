export type ErrorPageKey = '503' | '404' | '403' | '500' | 'maintenance'

export type LangCode = 'mix' | 'ja' | 'zh' | 'en'

export type FloatingIconName = 'feather' | 'cloud' | 'droplet' | 'sparkle' | 'leaf' | 'petal' | 'sprout'

export interface FloatingNode {
  icon: FloatingIconName
  left?: string
  right?: string
  top?: string
  bottom?: string
  size: number
  rotate: number
  color: string
  depth: number
  delay: string
}

export interface LocalizedContent {
  watermark: string
  eyebrow: string
  title: string
  description: string
  verticalPoem: string
  actionText?: string
  progressLabel?: string
  progressSuffix?: string
  startLabel?: string
  endLabel?: string
}

export interface ErrorPagePreset {
  key: ErrorPageKey
  httpCode: number
  label: string
  traceCode: string
  defaultIllustrationPath: string
  showProgressByDefault: boolean
  defaultProgress: number
  showScheduleByDefault: boolean
  defaultStart: string
  defaultEnd: string
  showActionByDefault: boolean
  defaultActionUrl: string
  titleWeight: 'regular' | 'semibold'
  watermarkStyle: 'numeric' | 'kanji'
  theme: {
    canvasBg: string
    canvasGradient: string
    watermarkColor: string
    eyebrowColor: string
    cardBg: string
    cardShadow: string
    titleColor: string
    descColor: string
    accentColor: string
    buttonBorder: string
    buttonText: string
    buttonHoverBg: string
    progressFill: string
    progressTrack: string
    poemColor: string
    traceColor: string
    dividerColor: string
  }
  floatingNodes: FloatingNode[]
  locales: Record<LangCode, LocalizedContent>
}
