import { createStore } from 'vuex'

const defaultState = {
  displayMode: 'light-mode',
  displayTheme: 'pure-theme',
}

export default createStore({
  state() {
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
