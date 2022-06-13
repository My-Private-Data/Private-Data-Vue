export const affixProps = {
  zIndex: {
    type: [Number, String],
    default: 100,
  },
  /** 让固钉始终保持在 target 容器内，超过范围则隐藏 */
  target: {
    type: String,
    default: '',
  },
  /** 设置 offset 属性来改变吸顶距离，默认值为 0 */
  offset: {
    type: Number,
    default: 0,
  },
  /** 设置 position 属性来改变固定位置，吸顶或吸底 */
  position: {
    type: String,
    values: ['top', 'bottom'],
    default: 'top',
  },
}

export const affixEmits = ['change', 'scroll']
