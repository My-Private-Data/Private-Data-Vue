<template>
  <div class="nav-bar">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'nav-bar',
})
</script>

<style src="./nav-bar.less" lang="less" scoped></style>
