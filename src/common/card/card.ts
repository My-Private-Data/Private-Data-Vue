export const cardProps = {
  /** 背景图片 */
  image: {
    type: String,
    default: null,
  },
  link: {
    type: String,
    default: null,
  },
  /** size 为固定比例 7:5:1，也支持自定义宽高比例 */
  size: {
    type: Number,
    default: null,
  },
  width: {
    type: Number,
    default: null,
  },
  height: {
    type: Number,
    default: null,
  },
}

export const cardEmits = ['change', 'scroll']
