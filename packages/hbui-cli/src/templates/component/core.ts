import { coreFileName, coreClassName, coreRealName, propsName, propsTypesName, typesFileName } from './utils'

export default function genCoreTemplate(name: string) {
  return `\
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
import { ${propsName(name)}, ${propsTypesName(name)} } from './${typesFileName(name)}'
import { useNamespace } from '@hooks/use-namespace'
import './${coreFileName(name)}.scss'

export default defineComponent({
  name: '${coreRealName(name)}',
  props: ${propsName(name)},
  emits: [] as string[],
  setup(props: ${propsTypesName(name)}, ctx: SetupContext) {
    const ns = useNamespace('${coreFileName(name)}')

    return () => (
      <div class="${coreClassName(name)}"></div>
    )
  }
})
`
}
