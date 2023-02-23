import path from 'path'
import type { Plugin } from 'vite'
type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>

const hasDemoBlock = (str: string) => /:::demo/gim.test(str)

export function MdTransformer(): Plugin {
  return {
    name: 'md-transform-plus',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md')) return

      const componentId = path.basename(id, '.md')
      const componentDir = id.split('/').at(-3)
      const componentName = id.split('/').at(-2)
      const markdownStringArray = code.split('\r\n')
      if (componentDir !== 'components' || !markdownStringArray.some(hasDemoBlock)) {
        return code
      }

      const append: Append = {
        headers: [],
        footers: [],
        scriptSetups: [
          `const demoList = import.meta.globEager('../../example/${componentName}/*.vue') ?? []`
        ]
      }

      return combineMarkdown(
        code,
        [combineScriptSetup(append.scriptSetups), ...append.headers],
        append.footers
      )
    }
  }
}

const combineMarkdown = (code: string, headers: string[], footers: string[]) => {
  const fileTitle = code.indexOf('---\n\n')
  const frontmatterEnds = fileTitle < 0 ? 0 : fileTitle + 4
  const firstSubheader = code.search(/\n## \w/)
  const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader

  if (headers.length > 0)
    code = code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
  code += footers.join('\n')

  return `${code}\n`
}

const combineScriptSetup = (codes: string[]) =>
  `\n<script setup lang="ts">
${codes.join('\n')}
</script>
`
