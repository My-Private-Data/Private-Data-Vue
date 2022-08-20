export const tagProps = {
  iconName: {
    type: String,
    default: 'info-circle',
  },
  label: {
    type: String,
    default: 'tag',
  },
  /**
   * 主题属性
   */
  theme: {
    type: String,
    values: ['background', 'bordered'],
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
    default: 2,
  },
  /**
   * 可选属性
   */
  closeable: {
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
}

export const tagEmits = ['click', 'close']
