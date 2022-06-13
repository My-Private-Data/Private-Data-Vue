<template>
  <div class="side-bar">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'side-bar',
})
</script>

<style src="./side-bar.less" lang="less" scoped></style>
