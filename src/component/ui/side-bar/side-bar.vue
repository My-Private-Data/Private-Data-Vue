<template>
  <div class="side-bar">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'SideBar',
})
</script>

<style src="./side-bar.less" lang="less" scoped></style>
