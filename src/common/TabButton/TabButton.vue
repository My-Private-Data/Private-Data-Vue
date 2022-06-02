<template>
  <div class="tab-button">
    <SvgIcon :name="icon"></SvgIcon>
    <div class="button-text">{{ text }}</div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'TabButton',
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

<style src="./TabButton.less" lang="less" scoped></style>
