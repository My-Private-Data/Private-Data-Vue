<template>
  <div class="footer">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Footer',
})
</script>

<style src="./footer.less" lang="less" scoped></style>
