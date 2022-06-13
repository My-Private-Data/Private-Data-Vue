<script lang="ts" setup>
import NavBar from '@/component/ui/NavBar/NavBar.vue'
import SideBar from '@/component/ui/SideBar/SideBar.vue'
</script>

<template>
  <div class="book-mark">
    <NavBar></NavBar>
    <div class="main-content">
      <SideBar></SideBar>
      <router-view />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import 'src/style/function';

.book-mark {
  .full-size;
  .background;
}
</style>
