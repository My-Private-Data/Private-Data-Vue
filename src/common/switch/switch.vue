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
import { addUnit } from '@/util/dom/style'
import { switchEmits, switchProps } from '@/common/switch/switch'

defineOptions({
  name: 'Switch',
})
const props = defineProps(switchProps)
const emits = defineEmits(switchEmits)
const attrs = useAttrs()

type CheckedType = boolean | string | number

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

const focus = () => refSwitchNode.value?.focus()
const blur = () => refSwitchNode.value?.blur()

const setCheckedStatus = (newCheckedStatus: CheckedType, e: MouseEvent | KeyboardEvent) => {
  if (props.disabled || props.loading) {
    return
  }
  emits('change', newCheckedStatus, e)
  emits('update:checked', newCheckedStatus)
}

const handleBlur = (e: FocusEvent) => emits('blur', e)

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

<style src="./switch.less" lang="less" scoped></style>
