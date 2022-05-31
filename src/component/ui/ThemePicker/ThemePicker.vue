<template>
  <div class="theme-picker">
    <div class="display-mode-title">显示模式</div>
    <div
      v-for="(mode, i) in displayModeList"
      :key="i"
      :class="['display-mode-button', displayMode == mode ? 'is-active' : '']"
      @click="setDisplayMode(mode)"
    >
      {{ mode }}
    </div>
    <div class="display-theme-title">显示主题</div>
    <div
      v-for="(theme, i) in displayThemeList"
      :key="i"
      class="display-theme-title"
      :class="['display-theme-button', displayTheme == theme ? 'is-active' : '']"
      @click="setDisplayTheme(theme)"
    >
      {{ theme }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, toRef, toRefs } from 'vue'
import { useStore } from 'vuex'

defineOptions({
  name: 'ThemePicker',
})

const store = useStore()
const { displayMode, displayTheme } = toRefs(store.state)

const displayModeList = ref(['light-mode', 'dark-mode'])
const displayThemeList = ref(['pure-theme', 'border-theme'])

function setDisplayMode(newVal: string) {
  store.commit('setDisplayMode', newVal)
}

function setDisplayTheme(newVal: string) {
  store.commit('setDisplayTheme', newVal)
}

onMounted(() => {
  // 第一次进入时就判断系统显示模式
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setDisplayMode('dark-mode')
  }
  // 持续监听系统显示模式变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
      setDisplayMode('dark-mode')
    } else {
      setDisplayMode('light-mode')
    }
  })
})
</script>

<style src="./ThemePicker.less" lang="less" scoped></style>
