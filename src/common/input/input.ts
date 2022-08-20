export const inputProps = {
  modelValue: {
    type: [String, Number, Object],
    default: '',
  },
  /**
   * 主题属性
   */
  theme: {
    type: String,
    values: ['background', 'underline', 'bordered'],
    default: 'background',
  },
  status: {
    type: String,
    values: ['default', 'primary', 'success', 'warning', 'error'],
    default: 'default',
  },
  type: {
    type: String,
    // 如果是 textarea，内容属性将不支持
    values: ['input', 'textarea'],
    default: 'input',
  },
  size: {
    type: Number,
    default: 10,
  },
  /**
   * 可选属性
   */
  clearable: {
    type: Boolean,
    default: false,
  },
  readOnly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  /**
   * 内容属性
   */
  // 占位符
  placeholder: {
    type: String,
  },
  label: {
    // 与 labelPlaceholder 相冲突，只能存在一个
    type: String,
  },
  labelPlaceholder: {
    // 与 placeholder 和 label 相冲突，只能存在一个
    type: String,
  },
  helperText: {
    // 位于文本框下方的提示文本
    type: String,
  },
  prefixLabel: {
    // 与 prefixContent 冲突
    type: String,
  },
  postfixLabel: {
    // 与 postfixContent 冲突
    type: String,
  },
}

export const inputEmits = ['update:modelValue']
