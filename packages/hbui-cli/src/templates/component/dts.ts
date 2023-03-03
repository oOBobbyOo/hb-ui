export default function genDtsTemplate() {
  return `\
import { App } from 'vue'
declare function install(app: App): void
declare const _default: {
  version: string;
  install: typeof install;
};
export default _default;
`
}
