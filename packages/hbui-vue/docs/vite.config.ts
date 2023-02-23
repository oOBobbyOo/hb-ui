import { resolve } from 'path'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'
import Inspect from 'vite-plugin-inspect'
import { MdTransformer } from './.vitepress/plugins/md-transformer'

export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vueJsx: vueJsx()
      }
    }),
    Inspect(),
    MdTransformer()
  ],
  resolve: {
    alias: [
      { find: '@hbui', replacement: resolve(__dirname, '../ui') },
      { find: '@hooks', replacement: resolve(__dirname, '../ui/shared/hooks') },
      { find: '@utils', replacement: resolve(__dirname, '../ui/shared/utils') }
    ]
  }
})
