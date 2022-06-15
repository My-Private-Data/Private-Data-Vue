<template>
  <div class="loading">
    <div v-for="(val, i) in 12" :key="i" class="loading-petal"></div>
  </div>
</template>

<script lang="ts" setup>
import { LoadingProps } from '@/common/loading/loading'

defineOptions({
  name: 'Loading',
})

const props = defineProps(LoadingProps)
</script>

<style src="./loading.less" lang="less" scoped></style>
