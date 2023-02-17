import { resolve } from 'path'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vueJsx()],
  resolve: {
    alias: [
      { find: '@hbui', replacement: resolve(__dirname, '../ui') },
      { find: '@hooks', replacement: resolve(__dirname, '../ui/shared/hooks') },
      { find: '@utils', replacement: resolve(__dirname, '../ui/shared/utils') }
    ]
  }
})
