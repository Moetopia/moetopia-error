import type { ErrorPageKey, ErrorPagePreset, LangCode } from './types'

export const ERROR_PAGE_PRESETS: Record<ErrorPageKey, ErrorPagePreset> = {
  '503': {
    key: '503',
    httpCode: 503,
    label: '503 // Afternoon Breeze',
    traceCode: 'WE WILL BE BACK SOON // LEVELSET CORE',
    defaultIllustrationPath: '/illustrations/503.webp',
    showProgressByDefault: true,
    defaultProgress: 75,
    showScheduleByDefault: false,
    defaultStart: '2026.07.30 02:00 (JST)',
    defaultEnd: '2026.07.30 06:00 (JST)',
    showActionByDefault: false,
    defaultActionUrl: '/',
    titleWeight: 'regular',
    watermarkStyle: 'numeric',
    theme: {
      canvasBg: '#EFF1EC',
      canvasGradient:
        'radial-gradient(circle at 50% 28%, rgba(255, 255, 252, 0.72) 0%, rgba(239, 241, 236, 0.96) 65%, #EAECE6 100%)',
      watermarkColor: '#D6DED7',
      eyebrowColor: '#5B6F60',
      cardBg: 'rgba(251, 250, 246, 0.92)',
      cardShadow: '0 28px 64px -16px rgba(74, 89, 77, 0.09), 0 4px 16px -2px rgba(74, 89, 77, 0.04)',
      titleColor: '#232925',
      descColor: '#6E7770',
      accentColor: '#5B6F60',
      buttonBorder: '#5B6F60',
      buttonText: '#3A4A3E',
      buttonHoverBg: 'rgba(91, 111, 96, 0.07)',
      progressFill: '#6E8472',
      progressTrack: '#DCE2DC',
      poemColor: '#8D988F',
      traceColor: '#768379',
      dividerColor: '#E5E8E2'
    },
    floatingNodes: [
      {
        icon: 'petal',
        left: '10.8%',
        top: '22.2%',
        size: 16,
        rotate: -12,
        color: '#E7B8BC',
        depth: 1.4,
        delay: '0s'
      },
      {
        icon: 'sprout',
        right: '12.1%',
        top: '16.8%',
        size: 16,
        rotate: 8,
        color: '#A7C7AF',
        depth: -1.1,
        delay: '1.6s'
      },
      {
        icon: 'leaf',
        left: '16.8%',
        bottom: '12.2%',
        size: 16,
        rotate: -24,
        color: '#DEC78B',
        depth: 1.2,
        delay: '3.1s'
      },
      {
        icon: 'petal',
        right: '22.1%',
        bottom: '18.6%',
        size: 16,
        rotate: 15,
        color: '#E7B8BC',
        depth: -1.5,
        delay: '2.2s'
      }
    ],
    locales: {
      mix: {
        watermark: '503',
        eyebrow: 'SYSTEM MAINTENANCE',
        title: '少しだけ、休ませてね。',
        description:
          'もっと素敵な空をお見せするために、ただいまシステムを磨き上げています。木漏れ日の中で、お茶でもいかがですか。',
        verticalPoem: '穏やかな風が吹く街で',
        actionText: 'Check Status',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: '開始時刻 / Start',
        endLabel: '終了予定 / Estimated End'
      },
      ja: {
        watermark: '503',
        eyebrow: 'SYSTEM MAINTENANCE',
        title: '少しだけ、休ませてね。',
        description:
          'もっと素敵な空をお見せするために、ただいまシステムを磨き上げています。木漏れ日の中で、お茶でもいかがですか。',
        verticalPoem: '穏やかな風が吹く街で',
        actionText: '状況を確認する',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: '開始時刻 / Start',
        endLabel: '終了予定 / Estimated End'
      },
      zh: {
        watermark: '503',
        eyebrow: 'SYSTEM MAINTENANCE',
        title: '请允许我们，稍作小憩。',
        description:
          '为了向您呈现更澄澈的天空，我们正在悉心打磨系统。在树影婆娑的午后微光里，不妨先品一杯清茶。',
        verticalPoem: '微风轻拂的静谧街角',
        actionText: '查看维护状态',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: '开始时间 / Start',
        endLabel: '预计结束 / Estimated End'
      },
      en: {
        watermark: '503',
        eyebrow: 'SYSTEM MAINTENANCE',
        title: 'Allow us a brief moment of rest.',
        description:
          'To show you an even lovelier sky, we are gently polishing our systems right now. Why not enjoy a cup of tea beneath the sunlit leaves?',
        verticalPoem: 'BREEZE IN A QUIET TOWN',
        actionText: 'Check Status',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: 'Start Time',
        endLabel: 'Estimated End'
      }
    }
  },

  '404': {
    key: '404',
    httpCode: 404,
    label: '404 // Lost Horizon',
    traceCode: 'CLARITY-404-LOST-HORIZON',
    defaultIllustrationPath: '/illustrations/404.webp',
    showProgressByDefault: false,
    defaultProgress: 0,
    showScheduleByDefault: false,
    defaultStart: '',
    defaultEnd: '',
    showActionByDefault: true,
    defaultActionUrl: '/',
    titleWeight: 'semibold',
    watermarkStyle: 'numeric',
    theme: {
      canvasBg: '#ECF2F5',
      canvasGradient:
        'radial-gradient(circle at 50% 26%, rgba(255, 255, 255, 0.76) 0%, rgba(236, 242, 245, 0.96) 65%, #E5EDF2 100%)',
      watermarkColor: '#D4DFE6',
      eyebrowColor: '#436478',
      cardBg: 'rgba(251, 249, 245, 0.92)',
      cardShadow: '0 28px 64px -16px rgba(56, 86, 106, 0.09), 0 4px 16px -2px rgba(56, 86, 106, 0.04)',
      titleColor: '#192129',
      descColor: '#637A8B',
      accentColor: '#436478',
      buttonBorder: '#436478',
      buttonText: '#2F4D60',
      buttonHoverBg: 'rgba(67, 100, 120, 0.07)',
      progressFill: '#4F738A',
      progressTrack: '#D8E2E8',
      poemColor: '#798E9C',
      traceColor: '#5B7586',
      dividerColor: '#E2E8EC'
    },
    floatingNodes: [
      {
        icon: 'feather',
        left: '8.4%',
        top: '20.1%',
        size: 20,
        rotate: -8,
        color: '#BAC8D2',
        depth: 1.5,
        delay: '0.2s'
      },
      {
        icon: 'cloud',
        right: '22.3%',
        top: '16.9%',
        size: 16,
        rotate: 4,
        color: '#C2CFD8',
        depth: -1.1,
        delay: '1.9s'
      },
      {
        icon: 'cloud',
        left: '17.9%',
        bottom: '23.1%',
        size: 15,
        rotate: -5,
        color: '#C2CFD8',
        depth: 1.0,
        delay: '2.8s'
      },
      {
        icon: 'feather',
        right: '15.4%',
        bottom: '17.4%',
        size: 21,
        rotate: 12,
        color: '#BAC8D2',
        depth: -1.6,
        delay: '0.9s'
      }
    ],
    locales: {
      mix: {
        watermark: '404',
        eyebrow: 'PAGE NOT FOUND',
        title: '迷い道の先にも、美しい景色がある。',
        description:
          'The path you were traveling seems to have vanished into the atmosphere. Let us help you navigate back to familiar horizons.',
        verticalPoem: '道を失えども美しき空',
        actionText: 'Return Home',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: '開始時刻 / Start',
        endLabel: '終了予定 / Estimated End'
      },
      ja: {
        watermark: '404',
        eyebrow: 'PAGE NOT FOUND',
        title: '迷い道の先にも、美しい景色がある。',
        description:
          '辿っていた道は大気の中へと溶けてしまったようです。見慣れた地平線へと還るお手伝いをさせてください。',
        verticalPoem: '道を失えども美しき空',
        actionText: 'ホームへ戻る',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: '開始時刻 / Start',
        endLabel: '終了予定 / Estimated End'
      },
      zh: {
        watermark: '404',
        eyebrow: 'PAGE NOT FOUND',
        title: '迷途的尽头，亦有绝美的风景。',
        description:
          '您所追寻的轨迹似乎已消融于澄澈的大气之中。请允许我们引领您，重返熟悉的地平线。',
        verticalPoem: '纵使迷途亦见绝美苍穹',
        actionText: '返回首页',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: '开始时间 / Start',
        endLabel: '预计结束 / Estimated End'
      },
      en: {
        watermark: '404',
        eyebrow: 'PAGE NOT FOUND',
        title: 'Even beyond a lost path, a beautiful view awaits.',
        description:
          'The path you were traveling seems to have vanished into the atmosphere. Let us help you navigate back to familiar horizons.',
        verticalPoem: 'LOST YET THE SKY IS FAIR',
        actionText: 'Return Home',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: 'Start Time',
        endLabel: 'Estimated End'
      }
    }
  },

  '403': {
    key: '403',
    httpCode: 403,
    label: '403 // Barrier Mist',
    traceCode: 'CLARITY-403-BARRIER-MIST',
    defaultIllustrationPath: '/illustrations/403.webp',
    showProgressByDefault: false,
    defaultProgress: 0,
    showScheduleByDefault: false,
    defaultStart: '',
    defaultEnd: '',
    showActionByDefault: true,
    defaultActionUrl: '/',
    titleWeight: 'semibold',
    watermarkStyle: 'numeric',
    theme: {
      canvasBg: '#EFEFF3',
      canvasGradient:
        'radial-gradient(circle at 50% 26%, rgba(255, 255, 255, 0.74) 0%, rgba(239, 239, 243, 0.96) 65%, #E8E8EE 100%)',
      watermarkColor: '#D6D8E0',
      eyebrowColor: '#4A5264',
      cardBg: 'rgba(251, 250, 246, 0.92)',
      cardShadow: '0 28px 64px -16px rgba(64, 70, 88, 0.09), 0 4px 16px -2px rgba(64, 70, 88, 0.04)',
      titleColor: '#1B1E26',
      descColor: '#6B7180',
      accentColor: '#4A5264',
      buttonBorder: '#4A5264',
      buttonText: '#373E4F',
      buttonHoverBg: 'rgba(74, 82, 100, 0.07)',
      progressFill: '#5B6478',
      progressTrack: '#DCDFE6',
      poemColor: '#868C99',
      traceColor: '#666D7C',
      dividerColor: '#E4E5EB'
    },
    floatingNodes: [
      {
        icon: 'droplet',
        left: '12.5%',
        top: '24.6%',
        size: 15,
        rotate: 0,
        color: '#C4C7D1',
        depth: 1.3,
        delay: '0.4s'
      },
      {
        icon: 'droplet',
        right: '19.5%',
        top: '20.5%',
        size: 16,
        rotate: 0,
        color: '#C4C7D1',
        depth: -1.2,
        delay: '1.7s'
      },
      {
        icon: 'droplet',
        left: '15.5%',
        bottom: '16.0%',
        size: 15,
        rotate: 0,
        color: '#C4C7D1',
        depth: 1.1,
        delay: '2.6s'
      },
      {
        icon: 'droplet',
        right: '12.1%',
        bottom: '22.8%',
        size: 16,
        rotate: 0,
        color: '#C4C7D1',
        depth: -1.4,
        delay: '1.1s'
      }
    ],
    locales: {
      mix: {
        watermark: '403',
        eyebrow: 'ACCESS RESTRICTED',
        title: '硝子の向こうに、光は届かない。',
        description:
          'This sanctuary is protected by an invisible barrier. You do not have the credentials required to step beyond this point.',
        verticalPoem: '閉ざされた扉の向こう',
        actionText: 'Request Access',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: '開始時刻 / Start',
        endLabel: '終了予定 / Estimated End'
      },
      ja: {
        watermark: '403',
        eyebrow: 'ACCESS RESTRICTED',
        title: '硝子の向こうに、光は届かない。',
        description:
          'この聖域は見えない結界によって守られています。これより先へ進むための資格が確認できませんでした。',
        verticalPoem: '閉ざされた扉の向こう',
        actionText: 'アクセスを申請',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: '開始時刻 / Start',
        endLabel: '終了予定 / Estimated End'
      },
      zh: {
        watermark: '403',
        eyebrow: 'ACCESS RESTRICTED',
        title: '琉璃的彼岸，微光尚未触及。',
        description:
          '这片圣域正被无形的结界温柔守护。您当前的凭证尚不足以跨越此界。',
        verticalPoem: '轻锁的门扉与微光彼岸',
        actionText: '申请访问权限',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: '开始时间 / Start',
        endLabel: '预计结束 / Estimated End'
      },
      en: {
        watermark: '403',
        eyebrow: 'ACCESS RESTRICTED',
        title: 'Beyond the glass, the light cannot yet reach.',
        description:
          'This sanctuary is protected by an invisible barrier. You do not have the credentials required to step beyond this point.',
        verticalPoem: 'BEYOND THE SEALED DOOR',
        actionText: 'Request Access',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: 'Start Time',
        endLabel: 'Estimated End'
      }
    }
  },

  '500': {
    key: '500',
    httpCode: 500,
    label: '500 // Cosmic Rebuild',
    traceCode: 'CLARITY-500-COSMIC-REBUILD',
    defaultIllustrationPath: '/illustrations/500.webp',
    showProgressByDefault: false,
    defaultProgress: 0,
    showScheduleByDefault: false,
    defaultStart: '',
    defaultEnd: '',
    showActionByDefault: true,
    defaultActionUrl: '',
    titleWeight: 'semibold',
    watermarkStyle: 'numeric',
    theme: {
      canvasBg: '#ECECF4',
      canvasGradient:
        'radial-gradient(circle at 50% 26%, rgba(255, 255, 255, 0.72) 0%, rgba(236, 236, 244, 0.96) 65%, #E5E5F0 100%)',
      watermarkColor: '#D4D5E3',
      eyebrowColor: '#434665',
      cardBg: 'rgba(251, 250, 246, 0.92)',
      cardShadow: '0 28px 64px -16px rgba(58, 60, 92, 0.09), 0 4px 16px -2px rgba(58, 60, 92, 0.04)',
      titleColor: '#191A26',
      descColor: '#676A82',
      accentColor: '#434665',
      buttonBorder: '#434665',
      buttonText: '#323552',
      buttonHoverBg: 'rgba(67, 70, 101, 0.07)',
      progressFill: '#54587A',
      progressTrack: '#DADBE8',
      poemColor: '#818399',
      traceColor: '#5E617A',
      dividerColor: '#E2E3EE'
    },
    floatingNodes: [
      {
        icon: 'sparkle',
        left: '9.9%',
        top: '18.1%',
        size: 16,
        rotate: 0,
        color: '#BEBMD2'.replace('M', 'F'),
        depth: 1.5,
        delay: '0.1s'
      },
      {
        icon: 'sparkle',
        right: '21.1%',
        top: '24.8%',
        size: 16,
        rotate: 15,
        color: '#BFC1D4',
        depth: -1.3,
        delay: '1.4s'
      },
      {
        icon: 'sparkle',
        left: '20.8%',
        bottom: '18.5%',
        size: 14,
        rotate: -10,
        color: '#BFC1D4',
        depth: 1.1,
        delay: '2.5s'
      },
      {
        icon: 'sparkle',
        right: '10.1%',
        bottom: '27.1%',
        size: 15,
        rotate: 8,
        color: '#BFC1D4',
        depth: -1.5,
        delay: '0.8s'
      }
    ],
    locales: {
      mix: {
        watermark: '500',
        eyebrow: 'INTERNAL SERVER ERROR',
        title: '星が墜ちる夜も、やがて明ける。',
        description:
          'A sudden cosmic disturbance has disrupted our servers. Our system architects are currently realigning the gravity matrix.',
        verticalPoem: '流れ星の軌跡を追って',
        actionText: 'Try Again',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: '開始時刻 / Start',
        endLabel: '終了予定 / Estimated End'
      },
      ja: {
        watermark: '500',
        eyebrow: 'INTERNAL SERVER ERROR',
        title: '星が墜ちる夜も、やがて明ける。',
        description:
          '突発的な星の揺らぎによりサーバーが乱れています。現在、システムアーキテクトが重力マトリクスを再調整しています。',
        verticalPoem: '流れ星の軌跡を追って',
        actionText: '再試行する',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: '開始時刻 / Start',
        endLabel: '終了予定 / Estimated End'
      },
      zh: {
        watermark: '500',
        eyebrow: 'INTERNAL SERVER ERROR',
        title: '群星坠落的夜，终将迎来破晓。',
        description:
          '突如其来的星轨扰动暂时打乱了服务器阵列，系统架构师们正在重新校准引力矩阵。',
        verticalPoem: '追寻坠落星辰的轨迹',
        actionText: '重新尝试',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: '开始时间 / Start',
        endLabel: '预计结束 / Estimated End'
      },
      en: {
        watermark: '500',
        eyebrow: 'INTERNAL SERVER ERROR',
        title: 'Even the night of falling stars will soon give way to dawn.',
        description:
          'A sudden cosmic disturbance has disrupted our servers. Our system architects are currently realigning the gravity matrix.',
        verticalPoem: 'TRACING FALLING STARS',
        actionText: 'Try Again',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: 'Start Time',
        endLabel: 'Estimated End'
      }
    }
  },

  maintenance: {
    key: 'maintenance',
    httpCode: 503,
    label: '503 // Quiet Pause (Scheduled)',
    traceCode: 'CLARITY-503-QUIET-PAUSE',
    defaultIllustrationPath: '/illustrations/maintenance.webp',
    showProgressByDefault: true,
    defaultProgress: 75,
    showScheduleByDefault: true,
    defaultStart: '2026.07.30 02:00 (JST)',
    defaultEnd: '2026.07.30 06:00 (JST)',
    showActionByDefault: true,
    defaultActionUrl: '',
    titleWeight: 'semibold',
    watermarkStyle: 'kanji',
    theme: {
      canvasBg: '#EFF1EC',
      canvasGradient:
        'radial-gradient(circle at 50% 26%, rgba(255, 255, 252, 0.72) 0%, rgba(239, 241, 236, 0.96) 65%, #E9ECE4 100%)',
      watermarkColor: '#D8DED5',
      eyebrowColor: '#566959',
      cardBg: 'rgba(251, 250, 246, 0.92)',
      cardShadow: '0 28px 64px -16px rgba(74, 89, 77, 0.09), 0 4px 16px -2px rgba(74, 89, 77, 0.04)',
      titleColor: '#1E241F',
      descColor: '#6D776E',
      accentColor: '#566959',
      buttonBorder: '#566959',
      buttonText: '#3A4B3D',
      buttonHoverBg: 'rgba(86, 105, 89, 0.07)',
      progressFill: '#6D8270',
      progressTrack: '#DCE2DC',
      poemColor: '#8B968D',
      traceColor: '#6E7B70',
      dividerColor: '#E5E8E2'
    },
    floatingNodes: [
      {
        icon: 'leaf',
        left: '10.6%',
        top: '22.4%',
        size: 18,
        rotate: -15,
        color: '#C5CFC3',
        depth: 1.4,
        delay: '0.3s'
      },
      {
        icon: 'leaf',
        right: '12.1%',
        top: '16.9%',
        size: 15,
        rotate: 18,
        color: '#C5CFC3',
        depth: -1.1,
        delay: '1.8s'
      },
      {
        icon: 'leaf',
        left: '16.8%',
        bottom: '11.9%',
        size: 16,
        rotate: -10,
        color: '#C5CFC3',
        depth: 1.2,
        delay: '2.7s'
      },
      {
        icon: 'leaf',
        right: '22.0%',
        bottom: '17.4%',
        size: 20,
        rotate: 10,
        color: '#C5CFC3',
        depth: -1.5,
        delay: '1.1s'
      }
    ],
    locales: {
      mix: {
        watermark: '定期メンテナンス',
        eyebrow: 'SYSTEM MAINTENANCE',
        title: 'ただいま、より良い体験のために整備中です。',
        description:
          'We are carefully polishing our garden. Thank you for your patience while we cultivate a beautiful experience.',
        verticalPoem: '穏やかな風が吹く街で',
        actionText: 'Check Status',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: '開始時刻 / Start',
        endLabel: '終了予定 / Estimated End'
      },
      ja: {
        watermark: '定期メンテナンス',
        eyebrow: 'SYSTEM MAINTENANCE',
        title: 'ただいま、より良い体験のために整備中です。',
        description:
          'ただいま庭園を丁寧に手入れしております。美しい体験を育むまで、今しばらくお待ちください。',
        verticalPoem: '穏やかな風が吹く街で',
        actionText: 'ステータスを確認',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: '開始時刻 / Start',
        endLabel: '終了予定 / Estimated End'
      },
      zh: {
        watermark: '定期维护',
        eyebrow: 'SYSTEM MAINTENANCE',
        title: '目前正在悉心整备，只为呈现更佳体验。',
        description:
          '我们正在细心修葺这片庭院。感谢您的耐心守候，静待美好体验的绽放。',
        verticalPoem: '微风轻拂的静谧街角',
        actionText: '查看服务状态',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: '开始时间 / Start',
        endLabel: '预计结束 / Estimated End'
      },
      en: {
        watermark: 'MAINTENANCE',
        eyebrow: 'SYSTEM MAINTENANCE',
        title: 'Currently preparing a more refined experience for you.',
        description:
          'We are carefully polishing our garden. Thank you for your patience while we cultivate a beautiful experience.',
        verticalPoem: 'BREEZE IN A QUIET TOWN',
        actionText: 'Check Status',
        progressLabel: 'ESTIMATED RESUME',
        progressSuffix: 'COMPLETE',
        startLabel: 'Start Time',
        endLabel: 'Estimated End'
      }
    }
  }
}

export const ERROR_PAGE_ORDER: ErrorPageKey[] = ['503', '404', '403', '500', 'maintenance']

export function resolvePageKey(rawCode: string | null | undefined, pathname: string): ErrorPageKey {
  const candidate = (rawCode || pathname.replace(/^\/+|\/+$/g, '') || '').toLowerCase().trim()
  if (candidate === '404' || candidate === 'not-found' || candidate === 'notfound') return '404'
  if (candidate === '403' || candidate === 'forbidden' || candidate === 'restricted') return '403'
  if (candidate === '500' || candidate === 'error' || candidate === 'internal') return '500'
  if (
    candidate === 'maintenance' ||
    candidate === 'scheduled' ||
    candidate === '503-scheduled' ||
    candidate === '503-2' ||
    candidate === 'pause'
  ) {
    return 'maintenance'
  }
  if (candidate === '503' || candidate === 'unavailable' || candidate === 'breeze') return '503'
  return '503'
}

export function detectBrowserLang(): LangCode {
  if (typeof navigator === 'undefined') return 'mix'
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const raw of candidates) {
    if (!raw) continue
    const lower = raw.toLowerCase()
    if (lower.startsWith('zh')) return 'zh'
    if (lower.startsWith('ja')) return 'ja'
    if (lower.startsWith('en')) return 'en'
  }
  return 'mix'
}

export function resolveLangCode(rawLang: string | null | undefined): LangCode {
  const cleaned = (rawLang || '').toLowerCase().trim()
  if (cleaned === 'mix' || cleaned === 'default') return 'mix'
  if (cleaned === 'zh' || cleaned.startsWith('zh-') || cleaned === 'cn') return 'zh'
  if (cleaned === 'en' || cleaned.startsWith('en-')) return 'en'
  if (cleaned === 'ja' || cleaned === 'jp' || cleaned.startsWith('ja-')) return 'ja'
  return detectBrowserLang()
}
