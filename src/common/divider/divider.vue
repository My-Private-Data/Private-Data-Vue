<template>
  <div class="divider">
    <SvgIcon :name="icon"></SvgIcon>
    <div class="button-text">{{ text }}</div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Divider',
})

const props = defineProps({
  icon: {
    type: String,
    default: 'info-circle',
  },
  text: {
    type: String,
    default: 'button',
  },
})
</script>

<style src="./divider.less" lang="less" scoped></style>
