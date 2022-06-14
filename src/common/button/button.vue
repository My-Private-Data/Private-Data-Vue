<template>
  <div class="button" :style="buttonStyle">
    <div class="button-icon-area">
      <SvgIcon :name="iconName"></SvgIcon>
    </div>
    <div class="button-title">{{ title }}</div>
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

const buttonStyle = computed<CSSProperties>(() => ({
  // 144:32:9
  width: addUnit(props.size),
  height: addUnit(props.size * (32 / 144)),
  borderRadius: addUnit(props.size * (9 / 144)),
}))
</script>

<style src="./button.less" lang="less" scoped></style>
