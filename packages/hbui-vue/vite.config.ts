import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

// jsx 依赖
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vueJsx()],
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx$/]
    }
  },
  resolve: {
    alias: [
      { find: '@hbui', replacement: resolve(__dirname, './ui') },
      { find: '@hooks', replacement: resolve(__dirname, './ui/shared/hooks') },
      { find: '@utils', replacement: resolve(__dirname, './ui/shared/utils') }
    ]
  }
})
