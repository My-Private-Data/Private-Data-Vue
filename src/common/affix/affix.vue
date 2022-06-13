<template>
  <div ref="root" class="affix" :style="rootStyle">
    <div :class="{ fixed: fixed }" :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, shallowRef, watch, watchEffect } from 'vue'
import type { CSSProperties } from 'vue'
import { useElementBounding, useEventListener, useWindowSize } from '@vueuse/core'
import { affixEmits, affixProps } from '@/common/affix/affix'
import { getScrollContainer } from '@/util/dom/scroll'

defineOptions({
  name: 'affix',
})
const props = defineProps(affixProps)
const emits = defineEmits(affixEmits)

// target容器 ref
const target = shallowRef<HTMLElement>()
const targetRect = useElementBounding(target)
// 固钉ref，与template中的ref属性配合，得到HTML元素
const root = shallowRef<HTMLDivElement>()
// 滚动容器ref
const scrollContainer = shallowRef<HTMLElement | Window>()
// 窗口高度
const { height: windowHeight } = useWindowSize()
// 固钉状态
const {
  height: rootHeight,
  width: rootWidth,
  top: rootTop,
  bottom: rootBottom,
  update: updateRoot,
} = useElementBounding(root)

const fixed = ref(false)
const scrollTop = ref(0)
const transform = ref(0)
// 计算属性，通过固钉的状态自动更新固钉的样式
const rootStyle = computed<CSSProperties>(() => {
  return {
    height: fixed.value ? `${rootHeight.value}px` : '',
    width: fixed.value ? `${rootWidth.value}px` : '',
  }
})
const affixStyle = computed<CSSProperties>(() => {
  if (!fixed.value) return {}

  const offset = props.offset ? `${props.offset}px` : 0
  return {
    height: `${rootHeight.value}px`,
    width: `${rootWidth.value}px`,
    top: props.position === 'top' ? offset : '',
    bottom: props.position === 'bottom' ? offset : '',
    transform: transform.value ? `translateY(${transform.value}px)` : '',
    zIndex: props.zIndex,
  }
})

// 更新固钉状态函数
const update = () => {
  if (!scrollContainer.value) return

  scrollTop.value =
    scrollContainer.value instanceof Window ? document.documentElement.scrollTop : scrollContainer.value.scrollTop || 0

  if (props.position === 'top') {
    if (props.target) {
      const difference = targetRect.bottom.value - props.offset - rootHeight.value
      fixed.value = props.offset > rootTop.value && targetRect.bottom.value > 0
      transform.value = difference < 0 ? difference : 0
    } else {
      fixed.value = props.offset > rootTop.value
    }
  } else if (props.target) {
    const difference = windowHeight.value - targetRect.top.value - props.offset - rootHeight.value
    fixed.value = windowHeight.value - props.offset < rootBottom.value && windowHeight.value > targetRect.top.value
    transform.value = difference < 0 ? -difference : 0
  } else {
    fixed.value = windowHeight.value - props.offset < rootBottom.value
  }
}

// 滚动容器的scroll事件的响应函数
const handleScroll = () => {
  emits('scroll', {
    scrollTop: scrollTop.value,
    fixed: fixed.value,
  })
}
watch(
  () => fixed,
  (val) => emits('change', val),
)

onMounted(() => {
  // 根据传入的target确定 target容器
  if (props.target) {
    target.value = document.querySelector<HTMLElement>(props.target) ?? undefined
    if (!target.value) throw Error(`Target is not existed: ${props.target}`)
  } else {
    target.value = document.documentElement
  }

  // 根据固钉元素，向上寻找滚动容器
  scrollContainer.value = getScrollContainer(root.value!, true)
  updateRoot()
})

useEventListener(scrollContainer, 'scroll', handleScroll)
watchEffect(update)
/** 指定暴露的属性，才可以在父组件拿到 */
defineExpose({
  update,
})
</script>

<style src="./affix.less" lang="less" scoped></style>
