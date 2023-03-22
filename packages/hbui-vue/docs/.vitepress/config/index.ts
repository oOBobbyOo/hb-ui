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
  lastUpdated: true,
  locales: {
    '/zh-CN': {
      lang: 'zh-CN',
      label: '简体中文'
    },
    '/en-US': {
      lang: 'en-US',
      label: 'English'
    }
  },
  head,
  markdown,
  themeConfig: {
    outline: 3,
    lastUpdatedText: '最后更新时间',
    socialLinks: [{ icon: 'github', link: '' }],
    sidebar,
    nav,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Henry Bobby'
    }
  }
})
