<template>
  <div class="trade-list">todo</div>
</template>

<script lang="ts" setup>
import { tradeListProps } from '@/component/ldeger/trade-list/trade-list'

defineOptions({
  name: 'tradeList',
})

const props = defineProps(tradeListProps)
</script>

<style src="./trade-list.less" lang="less" scoped></style>
