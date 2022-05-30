<template>
  <div class="switch">
    <div class="button-text">{{ props.text }}</div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Switch',
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

<style src="./Switch.less" lang="less" scoped></style>
