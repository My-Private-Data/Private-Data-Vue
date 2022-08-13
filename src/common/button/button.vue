<template>
  <div class="button">
    <a :href="props.link">
      <div class="button-content" :style="buttonStyle" :class="[`theme-${props.theme}`]">
        <div v-if="props.iconName" class="button-icon-area" :class="{ 'no-label': !props.label }">
          <SvgIcon :name="props.iconName"></SvgIcon>
        </div>
        <div v-if="props.label" class="button-label-area" :class="{ 'no-icon': !props.iconName }">
          <div class="button-label">{{ props.label }}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
import { buttonProps } from '@/common/button/button'
import { addUnit } from '@/util'

defineOptions({
  name: 'Button',
})

const props = defineProps(buttonProps)

const buttonStyle = computed<CSSProperties>(() => {
  let buttonWidth
  let buttonHeight
  let buttonBorderRadius
  // 144:32:9
  if (props.size) {
    buttonWidth = props.size
    buttonHeight = props.size * (32 / 144)
    buttonBorderRadius = props.rounded ? props.size : props.size * (9 / 144)
    // 只有图标没有文字
    if (!props.label && props.iconName) {
      buttonHeight = buttonWidth
      buttonBorderRadius = props.rounded ? props.size : props.size * (28 / 144)
    }
  } else {
    buttonWidth = props.width ? props.width : 8
    buttonHeight = props.height ? props.height : buttonWidth * (32 / 144)
    buttonBorderRadius = props.rounded ? buttonHeight : buttonWidth * (9 / 144)
  }

  return {
    width: addUnit(buttonWidth, 'rem'),
    height: addUnit(buttonHeight, 'rem'),
    borderRadius: addUnit(buttonBorderRadius, 'rem'),
  }
})
</script>

<style src="./button.less" lang="less" scoped></style>
