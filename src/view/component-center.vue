<template>
  <div class="component-center">
    <NavBar>
      <ThemePicker></ThemePicker>
    </NavBar>
    <MainContent>
      <Button v-for="(app, i) in state.apps" :key="i" :icon-name="app.icon" :title="app.title"></Button>
      <div class="component-area">
        <Input v-model="text" :theme="'underline'"></Input>
        <Input :theme="'underline'" :status="'primary'" :placeholder="'primary'"></Input>
        <Input :theme="'underline'" :status="'success'" :label="'success'"></Input>
        <Input :theme="'underline'" :status="'warning'" :label-placeholder="'warning'"></Input>
        <Input :theme="'underline'" :status="'error'"></Input>
        <Input :theme="'bordered'" :prefix-label="'prefixLabel'"></Input>
        <Input :theme="'bordered'" :status="'primary'" :placeholder="'primary'"></Input>
        <Input :theme="'bordered'" :status="'success'" :label="'success'" rounded></Input>
        <Input :theme="'bordered'" :status="'warning'" :label-placeholder="'warning'" rounded></Input>
        <Input :theme="'bordered'" :status="'error'" rounded></Input>
        <Input :placeholder="'input text'" :postfix-label="'postfixLabel'"></Input>
        <Input :status="'primary'" :placeholder="'primary'"></Input>
        <Input :status="'success'" :label="'success'" rounded></Input>
        <Input :status="'warning'" :label-placeholder="'warning'" rounded></Input>
        <Input :status="'error'" rounded></Input>
        <Input></Input>
        <Input :type="'textarea'"></Input>
      </div>
      <SegmentedPicker :option-list="['On', 'Off', 'On', 'Off']"></SegmentedPicker>
      <Button :size="3" :link="'/'" :icon-name="'home'"></Button>
      <div class="component-area">
        <Tag></Tag>
        <Tag :theme="'bordered'" :label="'中文你好'"></Tag>
        <Tag :status="'primary'" rounded closeable></Tag>
        <Tag :status="'success'" :label="'testfor123123'" closeable></Tag>
        <Tag :status="'warning'" :label="'testfor'" closeable></Tag>
        <Tag :status="'error'" closeable></Tag>
        <Select>
          <Option v-for="(option, i) in state.options" :key="i" :label="option.label" :value="option.value"></Option>
        </Select>
      </div>
      <div class="component-area">
        <DragList></DragList>
      </div>
    </MainContent>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import NavBar from '@/component/ui/nav-bar/nav-bar.vue'
import SideBar from '@/component/ui/side-bar/side-bar.vue'
import MainContent from '@/component/ui/main-content/main-content.vue'
import ThemePicker from '@/component/ui/theme-picker/theme-picker.vue'
import Button from '@/common/button/button.vue'
import SegmentedPicker from '@/common/segmented-picker/segmented-picker.vue'
import Input from '@/common/input/input.vue'
import Tag from '@/common/tag/tag.vue'
import Card from '@/common/card/card.vue'
import Select from '@/common/select/select.vue'
import DragList from '@/common/drag-list/drag-lsit.vue'
import Option from '@/common/select/option/option.vue'

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
  options: [
    {
      value: '选项1',
      label: 'Option 1',
    },
    {
      value: '选项2',
      label: 'Option 2',
    },
    {
      value: '选项3',
      label: 'Option 3',
    },
    {
      value: '选项4',
      label: 'Option 4',
    },
  ],
})

const text = ref<string>()
</script>

<style lang="less" scoped>
@import 'src/style/function';

.component-center {
  .full-size;
  .background;
  overflow-y: scroll;

  .component-area {
    .size(60rem, 30rem, 2rem);
    .background(var(--system-white));
    .flex-vertical-list;
    .flex-horizontal-center;
    margin: 1rem;
  }
}
</style>
