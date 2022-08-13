<script setup lang="ts">
// import router from '@/router'
//
// const isMobile = navigator.userAgent.match(
//   /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
// )
// if (isMobile) {
//   router.push('/mobile')
// } else {
//   router.push('/')
// }
</script>

<template>
  <router-view />
</template>

<style lang="less">
@import 'src/style/global';

#app {
  .full-size;
  background-color: var(--background-color);
}
</style>
