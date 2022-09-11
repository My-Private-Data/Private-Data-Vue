export const optionProps = {
  size: {
    type: Number,
    default: 10,
  },
  label: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
}

export const optionEmits = ['update:checked']
