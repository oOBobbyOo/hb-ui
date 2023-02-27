import { camelCase, upperFirst } from 'lodash-es'

export function bigCamelCase(str: string) {
  return upperFirst(camelCase(str))
}
