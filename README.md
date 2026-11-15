# Moetopia Error Pages Matrix (`@moetopia/error`)

基于 Vue 3 + Vite 与 `@moetopia/ui` 构建的**日系唯美二次元错误与维护状态页面矩阵**，1:1 还原设计蓝图 PDF 中的 5 个场景构图、物哀环境光配色、竖排明朝体诗句、0.85px 极细 Lucide 漂浮线性图标、微风过渡动效（800ms Ease In & Out）、四角星沉浸式光标以及多层鼠标视差呼吸感。

## 页面矩阵 (5 Presets)

| 标识 (`?code=` 或路径) | 顶部水印 | 状态副标题 | 默认主标题 | 专属特性 |
| --- | --- | --- | --- | --- |
| `503` (`/503`) | `503` | `SYSTEM MAINTENANCE` | `少しだけ、休ませてね。` | 维护进度条 (`ESTIMATED RESUME 75% COMPLETE`) |
| `404` (`/404`) | `404` | `PAGE NOT FOUND` | `迷い道の先にも、美しい景色がある。` | `Return Home` 按钮 |
| `403` (`/403`) | `403` | `ACCESS RESTRICTED` | `硝子の向こうに、光は届かない。` | `Request Access` 按钮 |
| `500` (`/500`) | `500` | `INTERNAL SERVER ERROR` | `星が墜ちる夜も、やがて明ける。` | `Try Again` 按钮 |
| `maintenance` (`/maintenance`) | `定期メンテナンス` | `SYSTEM MAINTENANCE` | `ただいま、より良い体験のために整備中です。` | 进度条 + 起止时刻表 (`Start` / `Estimated End`) + `Check Status` 按钮 |

## 多语言智能检测、10s 自动轮播与 URL 参数控制

- **优先显示用户当前语言 + 10s 自动流转**：页面首次加载时自动检测浏览器语言（`navigator.languages` / `navigator.language`），优先匹配显示用户的当前语言（`zh` / `ja` / `en`），随后每 **10 秒** 在 `zh`（简体中文）→ `ja`（日本語）→ `en`（English）→ `mix`（PDF 原版日英混排）之间以微风淡入淡出动效自动循环切换（传 `?autoLang=0` 可固定单语种不轮播）。
- **环境感知调试器**：右下角状态与参数切换胶囊**仅在 `dev` 开发环境 (`import.meta.env.DEV`) 下渲染**，生产构建 (`pnpm build`) 会完全移除该组件，保持 100% 纯净画布。

| 参数名 | 示例值 | 说明 |
| --- | --- | --- |
| `code` / `status` | `503` \| `404` \| `403` \| `500` \| `maintenance` | 切换对应的错误/维护页矩阵预设 |
| `lang` | `mix` (默认) \| `zh` \| `ja` \| `en` | 指定初始显示语言（随后每 30s 自动轮换下一种语言） |
| `autoLang` | `0` \| `false` | 禁用 30s 自动语言轮换，锁定当前语言 |
| `progress` | `0` - `100` 或 `hide` | 动态设置维护进度百分比（如 `?code=503&progress=85`），传入 `hide` 可隐藏进度条 |
| `start` | `2026.07.30 02:00 (JST)` | 动态设置维护开始时间（传入时自动显示时刻表） |
| `end` | `2026.07.30 06:00 (JST)` | 动态设置预计结束时间（传入时自动显示时刻表） |
| `title` / `desc` | `自定义文案` | 覆盖卡片主标题或正文描述文案 |
| `eyebrow` / `poem` / `trace` | `CLARITY-404-LOST-HORIZON` | 覆盖上方状态副标题、右侧竖排诗句与底部追踪码 |
| `actionText` / `actionUrl` | `Return Home` / `https://...` | 覆盖操作按钮文字与跳转链接；传入 `action=hide` 可隐藏按钮 |
| `img` | `/illustrations/404.webp` | 自定义左侧插画图片地址 |

## 替换左侧插画

默认展示无文字遮挡的纯净新海诚风 SVG 光影占位画布。当您准备好正式插画后，只需将图片放入 `public/illustrations/` 目录（无需改代码即可自动生效）：

- `public/illustrations/503.webp`
- `public/illustrations/404.webp`
- `public/illustrations/403.webp`
- `public/illustrations/500.webp`
- `public/illustrations/maintenance.webp`

## 开发与构建

```bash
pnpm install
pnpm typecheck
pnpm build
pnpm dev
```
