<template>
  <div class="theme-picker">
    <PanelRow :width="400" :height="50" :title="'深色模式'">
      <template #prefix>
        <div class="panel-row-icon-area">
          <SvgIcon class="ios-moon-icon" name="ios-moon"></SvgIcon>
        </div>
      </template>
      <template #action>
        <Switch v-model:checked="isDark">
          <!--          <template #switch-inner>-->
          <!--            <SvgIcon v-if="isDark" :name="'prev'"></SvgIcon>-->
          <!--            <SvgIcon v-else :name="'next'"></SvgIcon>-->
          <!--          </template>-->
        </Switch>
      </template>
    </PanelRow>
    <PanelRow :width="400" :height="50" :title="'无边框模式'">
      <template #prefix>
        <div class="panel-row-icon-area">
          <SvgIcon class="ios-cog-icon" name="ios-cog"></SvgIcon>
        </div>
      </template>
      <template #action>
        <Switch v-model:checked="isPure"></Switch>
      </template>
    </PanelRow>
    <PanelRow :width="400" :height="50" :title="'无边框模式'"></PanelRow>
    <PanelRow :width="400" :height="50" :title="'无边框模式'">
      <template #label> 510_5G </template>
      <template #prefix>
        <div class="panel-row-icon-area">
          <SvgIcon class="ios-notification-icon" name="ios-notification"></SvgIcon>
        </div>
      </template>
    </PanelRow>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import Switch from '@/common/switch/switch.vue'
import PanelRow from '@/common/panel-row/panel-row.vue'

defineOptions({
  name: 'theme-picker',
})

const store = useStore()
const { displayMode, displayTheme } = store.state
const isDark = ref<Boolean>(displayMode === 'dark-mode')
const isPure = ref<Boolean>(displayTheme === 'pure-theme')

watch(isDark, (val) => {
  if (val) setDisplayMode('dark-mode')
  else setDisplayMode('light-mode')
})

watch(isPure, (val) => {
  if (val) setDisplayTheme('pure-theme')
  else setDisplayTheme('border-theme')
})

function setDisplayMode(newVal: string) {
  store.commit('setDisplayMode', newVal)
}

function setDisplayTheme(newVal: string) {
  store.commit('setDisplayTheme', newVal)
}

onMounted(() => {
  // 持续监听系统显示模式变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
      isDark.value = true
      setDisplayMode('dark-mode')
    } else {
      isDark.value = false
      setDisplayMode('light-mode')
    }
  })
})
</script>

<style src="./theme-picker.less" lang="less" scoped></style>
