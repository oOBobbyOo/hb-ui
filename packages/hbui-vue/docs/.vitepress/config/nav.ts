const nav = [
  { text: '组件', link: '/components/button/' },
  {
    text: '语言',
    items: [
      { text: '简体中文', activeMatch: '^/', link: '/index' },
      { text: 'English', activeMatch: '^/en-US', link: '/en-US/index' }
    ]
  }
]

export default nav
