export const switchProps = {
  /** 是否禁用组件 */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 是否处于加载中状态 */
  loading: {
    type: Boolean,
    default: undefined,
  },
  /** 组件大小，背景长:背景宽:背景圆角 = 51:31:27 */
  size: {
    type: Number,
    default: 51,
  },
  colorTheme: {
    type: String,
    default: 'green-theme',
  },
  /** 是否一直处于激活状态 */
  checked: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  /** 自定义开关值，默认为 [true, false]。也可以是：[1, 0] 和 [`是`, `否`] */
  checkedValue: {
    type: [String, Number, Boolean],
    default: true,
  },
  /** 自定义开关值 */
  unCheckedValue: {
    type: [String, Number, Boolean],
    default: false,
  },
}

export const switchEmits = ['update:checked', 'change', 'blur', 'click', 'mouseup']
