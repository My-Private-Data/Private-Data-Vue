<template>
  <div class="select" :style="selectStyle">
    <div class="select-area" @click="isCollapse = !isCollapse">
      <div class="label-area">{{ props.placeholder }}</div>
      <div class="postfix-area">
        <SvgIcon :name="'ios-arrow-forward'" :class="{ 'is-collapse': isCollapse }"></SvgIcon>
      </div>
    </div>
    <div class="option-area" :style="optionAreaStyle">
      <slot v-if="$slots.empty">
        {{ props.emptyText }}
      </slot>
      <slot v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, ref, useSlots, VNode } from 'vue'
import { selectEmits, selectProps } from '@/common/select/select'
import { addUnit } from '@/util'

defineOptions({
  name: 'Select',
})
const props = defineProps(selectProps)
const emits = defineEmits(selectEmits)
const slots = useSlots()
const defaults: VNode[] = [...(slots.default as () => Array<VNode>)()]

const isCollapse = ref(false)

const selectStyle = computed<CSSProperties>(() => {
  let selectWidth
  let selectHeight
  let selectBorderRadius
  // 19:4:4
  if (props.size) {
    selectWidth = props.size
    selectHeight = props.size * (4 / 19)
    selectBorderRadius = props.rounded ? props.size * (2 / 19) : props.size * (1 / 19)
  }

  return {
    width: addUnit(selectWidth, 'rem'),
    height: addUnit(selectHeight, 'rem'),
    borderRadius: addUnit(selectBorderRadius, 'rem'),
  }
})

const optionAreaStyle = computed<CSSProperties>(() => {
  let optionTop
  let optionWidth
  let optionHeight
  let optionBorderRadius
  let optionPadding
  // 19:4:4
  if (props.size) {
    optionTop = props.size * (4 / 19)
    optionWidth = props.size
    optionPadding = 0.5
    // defaults[0] 第一个插槽
    optionHeight = Number(defaults[0].children.length) * optionTop + optionPadding * 2
    optionBorderRadius = props.rounded ? props.size * (2 / 19) : props.size * (1 / 19)
    console.info(optionHeight)
  }

  return {
    padding: isCollapse.value ? 0 : addUnit(optionPadding, 'rem'),
    top: addUnit(optionTop, 'rem'),
    width: addUnit(optionWidth, 'rem'),
    height: isCollapse.value ? 0 : addUnit(optionHeight, 'rem'),
    borderRadius: addUnit(optionBorderRadius, 'rem'),
  }
})
</script>

<style src="./select.less" lang="less" scoped></style>
