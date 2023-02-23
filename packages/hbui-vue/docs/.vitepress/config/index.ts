import { defineConfig } from 'vitepress'

import head from './head'
import markdown from './markdown'
import sidebar from './sidebar'
import nav from './nav'
import lang from './lang'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Vue HBUI',
  description: 'Vue HBUI 组件库',
  head,
  markdown,
  themeConfig: {
    socialLinks: [{ icon: 'github', link: '' }],
    sidebar,
    nav,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Henry Bobby'
    }
  }
})
