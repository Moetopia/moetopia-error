import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    {
      name: 'moetopia-ui-treeshake',
      enforce: 'pre',
      transform(code, id) {
        const normalized = id.replace(/\\/g, '/')
        if (normalized.includes('@moetopia/ui/src/index.ts')) {
          return code
            .split('\n')
            .filter(
              (line) =>
                line.includes('MoeButton ') ||
                line.includes("from './types'")
            )
            .join('\n')
        }
        if (normalized.includes('@moetopia/ui/src/styles.css')) {
          return code
            .split('\n')
            .filter(
              (line) =>
                !line.includes("@source './'") &&
                !line.includes('navigation.css') &&
                !line.includes('extensions.css') &&
                !line.includes('layouts.css') &&
                !line.includes('experience.css') &&
                !line.includes('reference-layouts.css') &&
                !line.includes('parity.css') &&
                !line.includes('console-details.css') &&
                !line.includes('security-patterns.css') &&
                !line.includes('documentation.css') &&
                !line.includes('illustrations.css')
            )
            .join('\n')
        }
      }
    },
    vue(),
    tailwindcss()
  ],
  build: {
    target: 'es2022',
    cssCodeSplit: false
  }
})
