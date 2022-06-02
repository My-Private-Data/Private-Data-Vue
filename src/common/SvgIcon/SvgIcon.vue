<template>
  <svg aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>

<script lang="ts" setup>
// Vue3 中 svg 的官方实现
// https://v3.cn.vuejs.org/cookbook/editable-svg-icons.html#注意事项
import { computed } from 'vue'

defineOptions({
  name: 'SvgIcon',
})

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

defineExpose({
  symbolId,
})
</script>
<style src="./SvgIcon.less" lang="less" scoped></style>
