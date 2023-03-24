import { relative } from 'path'
import { cliConfig } from '../../shared/config'
import { INDEX_FILE_NAME, VUE_UI_FILE } from '../../shared/constant'

export default function genLibEntryTemplate(componentsMeta: any[]) {
  const imports = []
  const installs = []
  const packages = []

  for (const meta of componentsMeta) {
    const { install, parts, fileInfo } = meta

    const importPkgPath = relative(VUE_UI_FILE, fileInfo.path)
      .replace(/\\/g, '/')
      .replace('..', '.')
      .replace('/' + INDEX_FILE_NAME, '')

    installs.push(install)
    imports.push(`import ${install}, { ${parts.join(', ')} } from '${importPkgPath}'`)
    packages.push(...parts)
  }

  return `\
import type { App } from 'vue'

${imports.join('\n') || '// Not find components.'}

const installs = [${installs.join(', ')}]

export { ${packages.join(', ')} }

export default {
  version: '${cliConfig.version}',
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
`
}
