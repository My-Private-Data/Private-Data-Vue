<template>
  <div class="theme-picker">
    <div
      v-for="(theme, i) in themeList"
      :key="i"
      :class="['theme-button', currentTheme == theme ? 'is-picked' : '']"
      @click="currentTheme = theme"
    >
      {{ theme }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'

defineOptions({
  name: 'ThemePicker',
})

const store = useStore()
const currentTheme = ref('')
const themeList = ref(['light-theme', 'dark-theme', 'pure-theme', 'profession-theme'])

watch(currentTheme, (newVal, _) => {
  store.commit('setTheme', newVal)
})

onMounted(() => {
  // 第一次进入时，判断系统主题
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    store.commit('setTheme', 'dark-theme')
  }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
      store.commit('setTheme', 'dark-theme')
    } else {
      store.commit('setTheme', 'light-theme')
    }
  })
})
</script>

<style src="./ThemePicker.less" lang="less" scoped></style>
