import { createStore } from 'vuex'

const defaultState = {
  displayMode: 'light-mode',
  displayTheme: 'pure-theme',
}

export default createStore({
  state() {
    // 第一次进入时就判断系统显示模式
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      defaultState.displayMode = 'dark-mode'
    } else {
      defaultState.displayMode = 'light-mode'
    }
    const app = document.getElementById('app')
    app.classList.add(defaultState.displayMode)

    return defaultState
  },
  mutations: {
    // 主题切换：改变 #app 的 class，影响使用的 Less 函数，从而影响所有使用的全局 css 变量
    setDisplayMode(state: typeof defaultState, newDisplayMode: string) {
      const app = document.getElementById('app')
      app.classList.remove(state.displayMode)
      app.classList.add(newDisplayMode)
      state.displayMode = newDisplayMode
    },
    setDisplayTheme(state: typeof defaultState, newDisplayTheme: string) {
      const app = document.getElementById('app')
      app.classList.remove(state.displayTheme)
      app.classList.add(newDisplayTheme)
      state.displayTheme = newDisplayTheme
    },
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
  },
  getters: {
    color(state: typeof defaultState) {
      return state.displayMode
    },
  },
})
