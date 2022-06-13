<template>
  <div class="segmented-picker">
    <div class="segmented-picker-background" :style="segmentedPickerStyle">
      <div
        v-for="(option, i) in optionList"
        :key="i"
        :class="['segment', { selected: i === selectedIndex }]"
        :style="segmentStyle"
        @click="selectSegment(i)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, ref } from 'vue'
import { addUnit } from '@/util'
import { segmentedPickerProps } from '@/common/segmented-picker/segmented-picker'

defineOptions({
  name: 'segmented-picker',
})

const props = defineProps(segmentedPickerProps)
const selectedIndex = ref()

// 计算尺寸大小
const segmentedPickerStyle = computed<CSSProperties>(() => ({
  width: addUnit(props.size),
  height: addUnit(props.size * (32 / 343)),
  borderRadius: addUnit(props.size * (8.91 / 343)),
  // 边缘空隙
  padding: addUnit(props.size * (2 / 343)),
}))

const segmentStyle = computed<CSSProperties>(() => ({
  width: addUnit((props.size / props.optionList.length) * 0.98),
  height: addUnit(props.size * (28 / 343)),
  borderRadius: addUnit(props.size * (6.93 / 343)),
}))

const selectSegment = (index: number) => {
  selectedIndex.value = index
}
</script>

<style src="./segmented-picker.less" lang="less" scoped></style>
