<template>
  <div class="drag-list">
    <transition-group name="drag" class="list" tag="ul">
      <li
        v-for="(item, index) in list"
        :key="item.label"
        class="list-item"
        draggable="true"
        @dragstart="dragstart(index)"
        @dragenter.prevent="dragenter(index)"
        @dragover.prevent="dragover(index)"
        @drop.prevent="drop(index)"
      >
        {{ item.label }}
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineOptions({
  name: 'drag-list',
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
])

const dragIndex = ref<number>()
const enterIndex = ref<number>()

// 开始拖拽
function dragstart(index): void {
  dragIndex.value = index
  console.info(`drag start ${dragIndex.value}`)
}

// 拖拽进入某个区域（只触发一次）
function dragenter(index: number): void {
  if (dragIndex.value !== index) {
    const moving = list.value[dragIndex.value]
    list.value.splice(dragIndex.value, 1)
    list.value.splice(index, 0, moving)
    // 排序变化后目标对象的索引变成源对象的索引
    dragIndex.value = index
    console.info(`drag enter ${index}`)
  }
}

// dragenter后，继续拖拽时
function dragover(index: number): void {
  // console.info(`drag over ${index}`)
}

// 松开拖拽
function drop(index: number): void {
  console.info(`drop ${index}`)
}
</script>

<style src="./drag-list.less" lang="less" scoped></style>
