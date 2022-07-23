<script lang="ts" setup>
import PanelRow from '@/common/panel-row/panel-row.vue'
import SideBar from '@/component/ui/side-bar/side-bar.vue'
</script>

<template>
  <div class="private-data">
    <SideBar>
      <PanelRow :width="300" :height="50" :link="'album'"></PanelRow>
      <PanelRow :width="300" :height="50" :link="'bookmark'"></PanelRow>
      <PanelRow :width="300" :height="50" :link="'file'"></PanelRow>
      <PanelRow :width="300" :height="50" :link="'ledger'"></PanelRow>
      <PanelRow :width="300" :height="50" :link="'music'"></PanelRow>
      <PanelRow :width="300" :height="50" :link="'todo'"></PanelRow>
    </SideBar>
    <router-view />
  </div>
</template>

<style lang="less" scoped>
@import 'src/style/function';

.private-data {
  .full-size;
  .background;
  display: flex;
}
</style>
