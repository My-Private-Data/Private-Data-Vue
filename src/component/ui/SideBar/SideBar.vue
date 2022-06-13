<template>
  <div class="side-bar">
    <TabButton v-for="(app, i) in state.apps" :key="i" :icon="app.icon" :text="app.title"></TabButton>
    <SegmentedPicker :option-list="['On', 'Off', 'On', 'Off']"></SegmentedPicker>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import TabButton from '@/common/TabButton/TabButton.vue'
import SegmentedPicker from '@/common/SegmentedPicker/SegmentedPicker.vue'
import Affix from '@/common/Affix/affix.vue'

defineOptions({
  name: 'SideBar',
})

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

<style src="./SideBar.less" lang="less" scoped></style>
