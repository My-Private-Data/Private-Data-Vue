export const selectProps = {
  size: {
    type: Number,
    default: 10,
  },
  // 占位符
  placeholder: {
    type: String,
    default: '请选择',
  },
  emptyText: {
    type: String,
    default: '暂无选项',
  },
}

export const selectEmits = ['update:checked']
