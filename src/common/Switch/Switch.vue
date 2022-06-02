<template>
  <div class="switch">
    <button
      ref="refSwitchNode"
      type="button"
      role="switch"
      :class="['switch-background', { checked: checkedStatus, loading: loading, disabled: disabled }, colorTheme]"
      :style="switchStyle"
      :disabled="disabled || loading"
      @click="handleClick"
      @blur="handleBlur"
      @mouseup="handleMouseUp"
    >
      <div class="switch-toggle" :style="toggleStyle">
        <div v-if="loading" class="'loading-icon'"></div>
      </div>
      <div :class="['switch-inner', { checked: checkedStatus }]">
        <slot name="switch-inner" />
      </div>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, nextTick, onMounted, ref, useAttrs, watch } from 'vue'
import { addUnit } from '@/util/style'

defineOptions({
  name: 'Switch',
})
type CheckedType = boolean | string | number
const attrs = useAttrs()
const props = defineProps({
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
})
const emits = defineEmits(['update:checked', 'change', 'blur', 'click', 'mouseup'])

const refSwitchNode = ref()
const checked = ref<CheckedType>(props.checked !== undefined ? props.checked : (attrs.defaultChecked as boolean))

watch(
  () => props.checked,
  () => {
    checked.value = props.checked
  },
)

const checkedStatus = computed(() => checked.value === props.checkedValue)
// 计算尺寸大小
const switchStyle = computed<CSSProperties>(() => ({
  width: addUnit(props.size),
  height: addUnit(props.size * (31 / 51)),
  borderRadius: addUnit(props.size),
  // 边缘空隙
  padding: addUnit(props.size * (2 / 51)),
}))

const toggleStyle = computed<CSSProperties>(() => ({
  width: addUnit(props.size * (27 / 51)),
  height: addUnit(props.size * (27 / 51)),
  borderRadius: addUnit(props.size),
}))

const focus = () => {
  refSwitchNode.value?.focus()
}

const blur = () => {
  refSwitchNode.value?.blur()
}

const setCheckedStatus = (newCheckedStatus: CheckedType, e: MouseEvent | KeyboardEvent) => {
  if (props.disabled || props.loading) {
    return
  }
  emits('change', newCheckedStatus, e)
  emits('update:checked', newCheckedStatus)
}

const handleBlur = (e: FocusEvent) => {
  emits('blur', e)
}

const handleClick = (e: MouseEvent) => {
  focus()
  const newCheckedStatus = checkedStatus.value ? props.unCheckedValue : props.checkedValue
  setCheckedStatus(newCheckedStatus, e)
  emits('click', newCheckedStatus, e)
}

const handleMouseUp = (e: MouseEvent) => {
  blur()
  emits('mouseup', e)
}

onMounted(() => {
  nextTick(() => {
    if (!props.disabled && !props.loading) {
      focus()
    }
  })
})

/** 指定暴露的属性，才可以在父组件拿到 */
defineExpose({
  focus,
  blur,
})
</script>

<style src="./Switch.less" lang="less" scoped></style>
