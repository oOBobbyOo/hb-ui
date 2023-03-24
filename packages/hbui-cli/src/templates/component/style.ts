import { coreClassName } from './utils'

export default function genStyleTemplate(name: string) {
  return `\
@import '@hbui/styles-var/index.scss';

.#{$hbui-prefix}-${coreClassName(name)} {

}

`
}
