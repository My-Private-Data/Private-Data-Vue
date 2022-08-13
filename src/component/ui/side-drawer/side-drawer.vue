<template>
  <div
    class="side-drawer"
    :class="[`position-${props.position}`, isCollapse ? 'is-collapse' : '']"
    :style="sideDrawerStyle"
  >
    <div class="side-drawer-content">
      <slot />
    </div>
    <div v-if="props.collapse" class="collapse-button" @click="isCollapse = !isCollapse">
      <SvgIcon
        v-if="(props.position === 'left' && isCollapse) || (props.position === 'right' && !isCollapse)"
        :name="'ios-arrow-forward'"
      ></SvgIcon>
      <SvgIcon
        v-if="(props.position === 'left' && !isCollapse) || (props.position === 'right' && isCollapse)"
        :name="'ios-arrow-back'"
      ></SvgIcon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, ref } from 'vue'
import { sideDrawerProps } from '@/component/ui/side-drawer/side-drawer'
import { addUnit } from '@/util'

defineOptions({
  name: 'SideDrawer',
})
const props = defineProps(sideDrawerProps)
const isCollapse = ref(false)

const sideDrawerStyle = computed<CSSProperties>(() => {
  let sideDrawerWidth
  let sideDrawerHeight

  if (props.position === 'left' || 'right') {
    sideDrawerWidth = props.size ? addUnit(props.size, 'rem') : 'auto'
    sideDrawerHeight = addUnit(100, '%')
    if (isCollapse.value) sideDrawerWidth = 0
  } else {
    sideDrawerWidth = addUnit(100, '%')
    sideDrawerHeight = props.size ? addUnit(props.size, 'rem') : 'auto'
    if (isCollapse.value) sideDrawerHeight = 0
  }
  return {
    width: sideDrawerWidth,
    height: sideDrawerHeight,
  }
})
</script>

<style src="./side-drawer.less" lang="less" scoped></style>
