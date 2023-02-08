import { renderPlugin, codePlugin } from 'vitepress-theme-demoblock'
const options = { cssPreprocessor: 'scss' }
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const markdown = {
  config: (md) => {
    md.use(demoBlockPlugin)
  }
}
export default markdown
