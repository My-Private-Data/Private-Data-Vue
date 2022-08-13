<template>
  <div class="date-picker">
    <div class="picker-line"></div>
    <div ref="list" class="picker-list">
      <ul class="picker-ul">
        <li v-for="(el, i) in data" :key="i" class="picker-ul-item">{{ el }}</li>
      </ul>
    </div>
    <ul ref="wheel" class="picker-wheel">
      <li v-for="(el, i) in data" :key="i" class="picker-wheel-item" :style="setWheelItemDeg(i)">{{ el }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useEventListener } from '@vueuse/core'
import { datePickerProps } from '@/common/date-picker/date-picker'

defineOptions({
  name: 'DatePicker',
})
const props = defineProps(datePickerProps)
const list = ref()
const wheel = ref()

const setWheelItemDeg = (i) => {
  return { transform: `rotate3d(1, 0, 0, ${(-i * 20) % 360}deg) translate3d(0px, 0px, 100px)` }
}

const setStyle = (distance, type?, time?) => {}
const handleTouchStart = (event) => {
  const finger = event.changedTouches[0]
  finger.startY = finger.pageY
  finger.startTime = event.timeStamp || Date.now()
  finger.transformY = list.value.getAttribute('scroll')
  event.preventDefault()
}
const handleTouchMove = (event) => {
  const finger = event.changedTouches[0]
  finger.lastY = finger.pageY
  finger.lastTime = event.timeStamp || Date.now()
  // 设置 CSS 样式
  const distance = finger.lastY - finger.startY
  setStyle(distance)
  event.preventDefault()
}
const handleTouchEnd = (event) => {
  const finger = event.changedTouches[0]
  finger.lastY = finger.pageY
  finger.lastTime = event.timeStamp || Date.now()
  let distance = finger.lastY - finger.startY
  let time = finger.lastTime - finger.startTime
  // 平均速度
  // 当时间小于 300ms，需要移动的距离等于 distance + 减速运动距离
  const speed = distance / time
  // 加速度
  const a = 1.8
  // 设置 CSS 样式
  if (time <= 300) {
    distance = speed * a * time
    time = 1000 + time * a
    setStyle(distance, 'end', time)
  } else {
    setStyle(distance, 'end')
  }
}

onMounted(() => {
  useEventListener('touchstart', handleTouchStart)
  useEventListener('touchstart', handleTouchMove)
  useEventListener('touchstart', handleTouchEnd)
})
onUnmounted(() => {
  removeEventListener('touchstart', handleTouchStart)
  removeEventListener('touchstart', handleTouchMove)
  removeEventListener('touchstart', handleTouchEnd)
})
</script>

<style src="./date-picker.less" lang="less" scoped></style>
