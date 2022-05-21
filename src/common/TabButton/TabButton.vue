<template>
  <div class="tab-button">
    <SvgIcon :name="props.icon"></SvgIcon>
    <div class="button-text">{{ props.text }}</div>
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line no-undef
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
