<template>
  <div class="drag-list">
    <transition-group name="drag" class="list" tag="ul">
      <li
        v-for="(item, index) in list"
        :key="item.label"
        class="list-item"
        draggable="true"
        @drag="drag"
        @dragstart="dragstart($event, index)"
        @dragend.prevent="dragend"
        @dragenter.prevent="dragenter($event, index)"
        @dragover.prevent="dragover(index)"
        @dragleave="dragleave(index)"
        @drop.prevent="drop"
      >
        {{ item.label }}
      </li>
    </transition-group>
    <div class="put-area">
      <div class="sub-area" @dragover="dragoverContainer">拖到这里</div>
      <div class="sub-area">不可拖到这里</div>
      <div class="sub-area">拖到这里</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineOptions({
  name: 'DragList',
})

const props = defineProps({
  icon: {
    type: String,
    default: 'info-circle',
  },
  text: {
    type: String,
    default: 'button',
  },
})

const list = ref([
  { label: '列表 1' },
  { label: '列表 2' },
  { label: '列表 3' },
  { label: '列表 4' },
  { label: '列表 5' },
  { label: '列表 6' },
  { label: '列表 7' },
  { label: '列表 8' },
  { label: '列表 9' },
  { label: '列表 10' },
  { label: '列表 11' },
  { label: '列表 12' },
])

const dragIndex = ref<number>(-1)

const dragstart = (e: DragEvent, index: number) => {
  const ele = e.target as HTMLElement
  // x, y 拖拽时相对于鼠标的位置
  // const copyEle = ele.cloneNode(true) as HTMLElement
  // copyEle.classList.add('drag-image')
  // const dt = e.dataTransfer
  // dt.setDragImage(copyEle, copyEle.offsetWidth, copyEle.offsetHeight)
  dragIndex.value = index
}

const drag = (e: DragEvent) => {
  const ele = e.target as HTMLElement
  ele.classList.add('dragging')
}

const dragenter = (e: DragEvent, index: number) => {
  // 如果拖到了其他位置
  if (dragIndex.value !== index) {
    const dragObject = list.value[dragIndex.value]
    // 删除原位置上的拖拽对象
    list.value.splice(dragIndex.value, 1)
    // 把拖拽对象插入到新位置
    list.value.splice(index, 0, dragObject)
    // 记录新位置下标
    dragIndex.value = index
    console.info(`drag enter ${index}`)
    e.stopPropagation()
  }
}

const dragover = (index: number) => {
  console.info(`drag over ${index}`)
}

const dragleave = (index: number) => {
  console.info(`drag leave ${index}`)
}

const drop = (e: DragEvent) => {
  const ele = e.target as HTMLElement
  dragIndex.value = -1
  ele.classList.remove('dragging')
  ele.classList.remove('drag-image')
}

const dragend = (e: DragEvent) => {
  const ele = e.target as HTMLElement
  dragIndex.value = -1
  ele.classList.remove('dragging')
  ele.classList.remove('drag-image')
}

// 容器拖拽事件
const dragoverContainer = () => {
  console.info(dragIndex.value)
}
</script>

<style src="./drag-list.less" lang="less" scoped></style>
