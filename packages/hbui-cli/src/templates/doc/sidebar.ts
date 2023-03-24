export default function genSidebarTemplate(genNavs: any[]) {
  const rootNavs = [
    {
      text: '快速开始',
      items: [
        { text: '简介', link: '/introduce/' },
        { text: '如何使用', link: '/quick-start/' }
      ]
    }
  ]

  const sidebar = [...rootNavs, ...genNavs]

  return `\
const sidebar = ${JSON.stringify(sidebar, null, 2)}
export default sidebar
`
}
