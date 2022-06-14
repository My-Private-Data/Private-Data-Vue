<template>
  <div class="home">
    <NavBar>
      <ThemePicker></ThemePicker>
    </NavBar>
    <MainContent>
      <SideBar>
        <Button v-for="(app, i) in state.apps" :key="i" :icon-name="app.icon" :title="app.title"></Button>
        <SegmentedPicker :option-list="['On', 'Off', 'On', 'Off']"></SegmentedPicker>
      </SideBar>
      <router-view />
    </MainContent>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import NavBar from '@/component/ui/nav-bar/nav-bar.vue'
import SideBar from '@/component/ui/side-bar/side-bar.vue'
import MainContent from '@/component/ui/main-content/main-content.vue'
import ThemePicker from '@/component/ui/theme-picker/theme-picker.vue'
import Button from '@/common/button/button.vue'
import SegmentedPicker from '@/common/segmented-picker/segmented-picker.vue'

const state = reactive({
  apps: [
    {
      title: '书签',
      icon: 'bookmark',
    },
    {
      title: '账户',
      icon: 'password',
    },
    {
      title: '表格数据',
      icon: 'list',
    },
  ],
})
</script>

<style lang="less" scoped>
@import 'src/style/function';

.home {
  .full-size;
  .background;
}
</style>
