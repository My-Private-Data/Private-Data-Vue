<template>
  <div class="slider-button">
    <SvgIcon :name="icon"></SvgIcon>
    <div class="button-text">{{ text }}</div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'SliderButton',
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

<style src="./slider-button.less" lang="less" scoped></style>
