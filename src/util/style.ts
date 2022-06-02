// eslint-disable-next-line vue/prefer-import-from-vue
import { isString } from '@vue/shared'
// @ts-ignore
import { isNumber } from '@vueuse/core'

export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value) return ''
  if (isString(value)) {
    return value
  }
  if (isNumber(value)) {
    return `${value}${defaultUnit}`
  }
}
