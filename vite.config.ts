import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// npm i @types/node -D
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@': resolve(__dirname, 'src') // `@` 指向 `src` 目录
    }
  },
  base: './', // 打包路径
  server: {
    port: 3000, // 服务启动端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true // 允许跨域

    // 代理设置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  }
})
