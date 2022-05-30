<template>
  <div class="nav-bar">
    <ThemePicker></ThemePicker>
  </div>
</template>

<script lang="ts" setup>
import ThemePicker from '@/component/ui/ThemePicker/ThemePicker.vue'

defineOptions({
  name: 'NavBar',
})
</script>

<style src="./NavBar.less" lang="less" scoped></style>
