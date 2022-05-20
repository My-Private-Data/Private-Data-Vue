import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import SvgIcon from '@/common/SvgIcon/SvgIcon.vue'
import '@/style/global.less'
import 'virtual:svg-icons-register'

createApp(App).use(router).use(store).component('SvgIcon', SvgIcon).mount('#app')
