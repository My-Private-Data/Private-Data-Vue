<template>
  <div class="svg-icon">
    <svg aria-hidden="true">
      <use :href="symbolId" />
    </svg>
  </div>
</template>

<script lang="ts" setup>
// Vue3 中 svg 的官方实现
// https://v3.cn.vuejs.org/cookbook/editable-svg-icons.html#注意事项
import { computed } from 'vue'
import { svgIconProps } from '@/common/svg-icon/svg-icon'

defineOptions({
  name: 'SvgIcon',
})

const props = defineProps(svgIconProps)

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

defineExpose({
  symbolId,
})
</script>
<style src="./svg-icon.less" lang="less" scoped></style>
