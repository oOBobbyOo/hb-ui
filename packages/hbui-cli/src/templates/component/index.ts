import { camelCase } from 'lodash-es'
import { coreFileName, coreName, directiveFileName, directiveName, propsTypesName, serviceFileName, serviceName, typesFileName } from './utils'

export default function genIndexTemplate(name: string, title: string, category: string, parts: string[]) {
  const importParts = []
  const exportParts = []
  const installParts = []
  const propsParts = []

  let needsTypes = false

  if (parts.includes('component')) {
    needsTypes = true

    importParts.push(`import ${coreName(name)} from './src/${coreFileName(name)}'`)
    exportParts.push(coreName(name))
    installParts.push(`\tapp.component(${coreName(name)}.name, ${coreName(name)})`)
  }

  if (parts.includes('service')) {
    needsTypes = true

    importParts.push(`import ${serviceName(name)} from './src/${serviceFileName(name)}'`)
    exportParts.push(serviceName(name))
    installParts.push(`\tapp.config.globalProperties.$${camelCase(serviceName(name))} = ${serviceName(name)}`)
  }

  if (parts.includes('directive')) {
    importParts.push(`import ${directiveName(name)} from './src/${directiveFileName(name)}'`)
    exportParts.push(directiveName(name))
    installParts.push(`\tapp.directive('${coreName(name)}', ${directiveName(name)})`)
  }

  if (needsTypes) {
    importParts.push(`import { ${propsTypesName(name)} } from './src/${typesFileName(name)}'`)
    propsParts.push(propsTypesName(name))
  }

  return `\
import type { App } from 'vue'
${importParts.join('\n')}

${coreName(name)}.install = function (app: App): void {
${installParts.join('\n')}
}

export { ${exportParts.join(', ')} }
export type { ${propsParts.join(', ')} }

export default {
  title: '${coreName(name)} ${title}',
  category: '${category}',
  status: '0%',
  install(app: App) {
    app.component(${coreName(name)}.name, ${coreName(name)});
  }
}
`
}
