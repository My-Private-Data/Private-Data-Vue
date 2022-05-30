import { createStore } from 'vuex'

const defaultState = {
  colorTheme: 'light-theme',
}

export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    setTheme(state: typeof defaultState, newTheme: string) {
      state.colorTheme = newTheme
      // 主题切换：改变 #app 的 class，影响使用的 Less 函数，从而影响所有使用的全局 css 变量
      document.getElementById('app').className = newTheme
    },
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
  },
  getters: {
    colorTheme(state: typeof defaultState) {
      return state.colorTheme
    },
  },
})
