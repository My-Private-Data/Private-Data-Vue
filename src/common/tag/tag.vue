<template>
  <transition name="zoom" appear>
    <div class="tag" :style="tagStyle" :class="[props.theme, props.status]" @click="handleClick">
      <div class="tag-label">{{ props.label }}</div>
      <div v-if="props.closeable" class="close-button" :style="closeButtonStyle" @click.stop="handleClose">
        <SvgIcon :name="'ios-close'"></SvgIcon>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, ref } from 'vue'
import { tagEmits, tagProps } from '@/common/tag/tag'
import { addUnit, viewLength } from '@/util'

defineOptions({
  name: 'Tag',
})

const props = defineProps(tagProps)
const emits = defineEmits(tagEmits)

const isCollapse = ref<Boolean>(false)
const tagStyle = computed<CSSProperties>(() => {
  let tagWidth
  let tagHeight
  let borderRadius
  // 19:4:4
  if (props.size) {
    tagWidth = 2 * viewLength(props.label)
    tagHeight = props.size
    borderRadius = props.rounded ? props.size : props.size * 0.2
    // 限制最小长度为宽度的 1.5
    if (tagWidth < 1.5 * tagHeight) tagWidth = 1.5 * tagHeight
    // rounded 视觉效果缩小
    if (props.rounded) tagWidth += 0.5
    if (props.closeable) tagWidth += 1
  }

  return {
    width: isCollapse.value ? 0 : addUnit(tagWidth, 'rem'),
    height: isCollapse.value ? 0 : addUnit(tagHeight, 'rem'),
    borderRadius: addUnit(borderRadius, 'rem'),
    // 美化缩小时的效果
    marginTop: isCollapse.value ? addUnit(tagHeight / 2, 'rem') : 0,
    opacity: isCollapse.value ? 0 : 1,
  }
})

const closeButtonStyle = computed<CSSProperties>(() => {
  let buttonSize
  let marginWidth

  if (props.size) {
    buttonSize = props.size * 0.75
    marginWidth = props.size * 0.1
  }

  return {
    width: isCollapse.value ? 0 : addUnit(buttonSize, 'rem'),
    height: isCollapse.value ? 0 : addUnit(buttonSize, 'rem'),
    marginRight: addUnit(marginWidth, 'rem'),
  }
})

const handleClose = (event: MouseEvent) => {
  isCollapse.value = true
  // 防止点击 closeButton 时触发 tag 的点击事件
  // 阻止事件继续传播，与 @click.stop 相同
  // event.stopPropagation()
  emits('close', event)
}

const handleClick = (event: MouseEvent) => {
  emits('click', event)
}
</script>

<style src="./tag.less" lang="less" scoped></style>
