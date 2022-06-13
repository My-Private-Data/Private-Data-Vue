// eslint-disable-next-line vue/prefer-import-from-vue
import { isString } from '@vue/shared'
import { isClient, isNumber } from '@vueuse/core'
import { camelize } from 'vue'
import type { CSSProperties } from 'vue'

export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value) return ''
  if (isString(value)) {
    return value
  }
  if (isNumber(value)) {
    return `${value}${defaultUnit}`
  }
}

export const getStyle = (element: HTMLElement, styleName: keyof CSSProperties): string => {
  if (!isClient || !element || !styleName) return ''

  let key = camelize(styleName)
  if (key === 'float') key = 'cssFloat'
  try {
    const style = element.style[styleName]
    if (style) return style
    const computed = document.defaultView?.getComputedStyle(element, '')
    return computed ? computed[styleName] : ''
  } catch {
    return element.style[styleName]
  }
}
