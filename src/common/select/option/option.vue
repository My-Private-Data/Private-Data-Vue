<template>
  <div class="option" :style="optionStyle" :class="{ selected: isSelect }" @click="isSelect = !isSelect">
    {{ props.label }}
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, ref } from 'vue'
import { optionEmits, optionProps } from '@/common/select/option/option'
import { addUnit } from '@/util'

defineOptions({
  name: 'Option',
})
const props = defineProps(optionProps)
const emits = defineEmits(optionEmits)
const isSelect = ref<boolean>(false)

const optionStyle = computed<CSSProperties>(() => {
  let optionWidth
  let optionHeight
  let optionBorderRadius
  // 19:4:4
  if (props.size) {
    optionWidth = props.size
    // defaults[0] 第一个插槽
    optionHeight = props.size * (4 / 19)
    optionBorderRadius = props.rounded ? props.size * (2 / 19) : props.size * (1 / 19)
  }

  return {
    width: addUnit(optionWidth, 'rem'),
    height: addUnit(optionHeight, 'rem'),
    borderRadius: addUnit(optionBorderRadius, 'rem'),
  }
})
</script>

<style src="./option.less" lang="less" scoped></style>
