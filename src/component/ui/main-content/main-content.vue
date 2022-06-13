<template>
  <div class="main-content">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'MainContent',
})
</script>

<style src="./main-content.less" lang="less" scoped></style>
