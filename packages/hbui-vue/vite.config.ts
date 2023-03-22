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
  build: {
    target: 'modules',
    minify: true, // 压缩
    rollupOptions: {
      external: ['vue', 'vue-router', '@vueuse/core'], // 忽略打包文件
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: './ui/vue-hbui/index.ts',
      name: 'VueHbui',
      fileName: 'vue-hbui',
      formats: ['es', 'umd', 'cjs']
    },
    outDir: './build'
  },
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx$/]
    }
  }
})
