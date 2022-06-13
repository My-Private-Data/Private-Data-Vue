<template>
  <div class="card">
    <div class="card-header">
      <slot></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cardProps } from '@/common/card/card'

defineOptions({
  name: 'Card',
})

const props = defineProps(cardProps)
</script>

<style src="./card.less" lang="less" scoped></style>
