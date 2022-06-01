<script lang="ts" setup>
import NavBar from '@/component/ui/NavBar/NavBar.vue'
import SideBar from '@/component/ui/SideBar/SideBar.vue'
import DragList from '@/common/DragList/DragList.vue'
</script>

<template>
  <div class="home">
    <NavBar></NavBar>
    <div class="main-content">
      <SideBar></SideBar>
      <DragList></DragList>
      <router-view />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import 'src/style/function';

.home {
  .full-size;
  background-color: var(--web-background);
}
</style>
