<template>
  <div class="switch">
    <div :class="['switch-background', active ? 'is-active' : '']" :style="switchStyle" @click="toggle">
      <div class="switch-toggle" :style="toggleStyle"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, ref } from 'vue'
import { add } from 'husky'
import { addUnit } from '@/util/style'

defineOptions({
  name: 'Switch',
})

const props = defineProps({
  /** 是否禁用组件 */
  disabled: Boolean,
  /** 是否处于加载中状态 */
  loading: Boolean,
  /** 组件大小，背景长:背景宽:按钮直径 = 51:31:27 */
  size: {
    type: Number,
    default: 51,
  },
})

const emits = defineEmits(['status'])

const active = ref<Boolean>()

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

function handleToggle() {
  active.value = !active.value
  emits('status', active.value)
}

function toggle() {
  if (props.disabled || props.loading) {
    return
  }
  handleToggle()
}
</script>

<style src="./Switch.less" lang="less" scoped></style>
