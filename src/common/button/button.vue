<template>
  <div class="button">
    <SvgIcon :name="icon"></SvgIcon>
    <div class="button-text">{{ text }}</div>
  </div>
</template>

<script lang="ts" setup>
import { buttonProps } from '@/common/button/button'

defineOptions({
  name: 'Button',
})

const props = defineProps(buttonProps)
</script>

<style src="./button.less" lang="less" scoped></style>
