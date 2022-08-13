<template>
  <div class="header">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Header',
})
</script>

<style src="./header.less" lang="less" scoped></style>
