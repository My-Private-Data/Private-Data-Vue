<template>
  <div class="input">
    <div class="top-area" :style="areaStyle">
      <div v-if="props.placeholder && inputText.length === 0" class="placeholder-area" :style="placeholderStyle">
        {{ props.placeholder }}
      </div>
      <div
        v-if="props.label && !props.labelPlaceholder"
        class="label-area"
        :class="[props.theme, props.status, isFocus ? 'isFocus' : '']"
      >
        {{ props.label }}
      </div>
      <div
        v-if="props.labelPlaceholder"
        class="label-placeholder-area"
        :class="[props.theme, props.status, isFocus ? 'isFocus' : '']"
        :style="labelPlaceholderStyle"
      >
        {{ props.labelPlaceholder }}
      </div>
    </div>
    <div class="input-area">
      <div v-if="props.prefixLabel" class="prefix-area" :style="prefixLabelStyle" :class="[props.theme, props.status]">
        {{ props.prefixLabel }}
      </div>
      <input
        v-if="props.type === 'input'"
        :value="props.modelValue"
        :class="[props.theme, props.status]"
        :style="inputStyle"
        @input="handleInput"
        @focus="isFocus = true"
        @blur="isFocus = false"
      />
      <textarea v-else :placeholder="props.placeholder"></textarea>
      <SvgIcon v-if="props.clearable" :name="'ios-close'"></SvgIcon>
      <div
        v-if="props.postfixLabel"
        class="postfix-area"
        :style="postfixLabelStyle"
        :class="[props.theme, props.status]"
      >
        {{ props.postfixLabel }}
      </div>
    </div>
    <div class="bottom-area" :style="areaStyle"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, ref, watch } from 'vue'
import { addUnit } from '@/util'
import { inputEmits, inputProps } from '@/common/input/input'

defineOptions({
  name: 'Input',
})
const props = defineProps(inputProps)
const emits = defineEmits(inputEmits)

const inputText = ref<String>(props.modelValue)
const isFocus = ref<Boolean>(false)
// v-model
// 传入 :value
// 传出 emits('update:modelValue', val)
const handleInput = (e) => {
  emits('update:modelValue', e.target.value)
}
// TODO 把所有的变量汇总 computed
const prefixLabelStyle = computed<CSSProperties>(() => {
  let prefixWidth
  let prefixHeight
  let paddingWidth
  // 19:4:4
  if (props.size) {
    prefixWidth = props.prefixLabel.length * 0.55
    prefixHeight = props.size * (4 / 19)

    if (props.theme === 'underline') paddingWidth = props.size * (0.5 / 19)
  }

  return {
    width: addUnit(prefixWidth, 'rem'),
    height: addUnit(prefixHeight, 'rem'),
    marginLeft: `-5rem`,
  }
})

const postfixLabelStyle = computed<CSSProperties>(() => {
  let areaWidth
  let areaHeight
  let paddingWidth
  // 19:4:4
  if (props.size) {
    areaWidth = props.size
    areaHeight = props.size * (2.8 / 19)
    paddingWidth = props.rounded ? props.size * (1.5 / 19) : props.size * (1 / 19)
    if (props.theme === 'underline') paddingWidth = props.size * (0.5 / 19)
  }

  return {
    width: addUnit(areaWidth, 'rem'),
    height: addUnit(areaHeight, 'rem'),
    paddingLeft: addUnit(paddingWidth, 'rem'),
  }
})

const areaStyle = computed<CSSProperties>(() => {
  let areaWidth
  let areaHeight
  let paddingWidth
  // 19:4:4
  if (props.size) {
    areaWidth = props.size
    areaHeight = props.size * (2.8 / 19)
    paddingWidth = props.rounded ? props.size * (1.5 / 19) : props.size * (1 / 19)
    if (props.theme === 'underline') paddingWidth = props.size * (0.5 / 19)
  }

  return {
    width: addUnit(areaWidth, 'rem'),
    height: addUnit(areaHeight, 'rem'),
    paddingLeft: addUnit(paddingWidth, 'rem'),
  }
})

const placeholderStyle = computed<CSSProperties>(() => {
  let marginTopHeight
  let marginLeftWidth
  // 19:4:4
  if (props.size) {
    marginTopHeight = isFocus.value ? (props.size * (4 / 19)) / 1.2 : (props.size * (4 / 19)) / 1.15
    marginLeftWidth = props.size * (1 / 19)
    // if (props.prefixLabel.length > 0) marginLeftWidth += props.prefixLabel.length * 0.55
  }

  return {
    marginTop: addUnit(marginTopHeight, 'rem'),
    marginLeft: addUnit(marginLeftWidth, 'rem'),
    opacity: isFocus.value ? 0 : 1,
  }
})

const labelPlaceholderStyle = computed<CSSProperties>(() => {
  let topHeight
  let paddingWidth
  // 19:4:4
  if (props.size) {
    topHeight = isFocus.value || inputText.value.length > 0 ? 0 : (props.size * (4 / 19)) / 1.15
    paddingWidth = isFocus.value || inputText.value.length > 0 ? 0 : props.size * (1 / 19)
  }

  return {
    marginTop: addUnit(topHeight, 'rem'),
    marginLeft: addUnit(paddingWidth, 'rem'),
  }
})

const inputStyle = computed<CSSProperties>(() => {
  let inputWidth
  let inputHeight
  let inputBorderRadius
  let paddingWidth
  // 19:4:4
  if (props.size) {
    inputWidth = props.size
    inputHeight = props.size * (4 / 19)
    inputBorderRadius = props.rounded ? props.size * (2 / 19) : props.size * (1 / 19)
    paddingWidth = inputBorderRadius
    if (props.theme === 'underline') inputBorderRadius = 0
  }

  return {
    width: addUnit(inputWidth, 'rem'),
    height: addUnit(inputHeight, 'rem'),
    borderRadius: addUnit(inputBorderRadius, 'rem'),
    paddingLeft: addUnit(paddingWidth, 'rem'),
    paddingRight: addUnit(paddingWidth, 'rem'),
  }
})
</script>

<style src="./input.less" lang="less" scoped></style>
