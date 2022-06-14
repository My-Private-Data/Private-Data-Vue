<template>
  <div class="tag">
    <div class="tag-title">{{ title }}</div>
  </div>
</template>

<script lang="ts" setup>
import { tagProps } from '@/common/tag/tag'

defineOptions({
  name: 'Tag',
})

const props = defineProps(tagProps)
</script>

<style src="tag.less" lang="less" scoped></style>
