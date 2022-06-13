export const segmentedPickerProps = {
  /** 组件大小，背景长:背景宽:背景圆角 = 343:32:8.91 */
  size: {
    type: Number,
    default: 343,
  },
  /** 选项 */
  optionList: {
    type: Array,
    default: () => ['On', 'Off'],
  },
}
