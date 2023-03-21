import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'

export default defineConfig({
  plugins: [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: vue(),
        vueJsx: vueJsx()
      }
    })
  ],
  resolve: {
    alias: [
      { find: '@hbui', replacement: resolve(__dirname, './ui') },
      { find: '@hooks', replacement: resolve(__dirname, './ui/shared/hooks') },
      { find: '@utils', replacement: resolve(__dirname, './ui/shared/utils') }
    ]
  },
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx$/]
    }
  }
})
