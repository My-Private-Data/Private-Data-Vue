<script lang="ts" setup>
import NavBar from '@/component/ui/NavBar/NavBar.vue'
import SideBar from '@/component/ui/SideBar/SideBar.vue'
</script>

<template>
  <div class="home">
    <NavBar></NavBar>
    <div class="main-content">
      <SideBar></SideBar>
      <router-view />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import 'src/style/function';

.home {
  .full-size;
}
</style>
