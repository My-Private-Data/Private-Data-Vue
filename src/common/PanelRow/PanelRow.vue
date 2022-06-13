<template>
  <div class="panel-row">
    <div class="panel-row-background" :style="panelRowStyle">
      <div class="panel-row-icon">
        <SvgIcon :name="icon"></SvgIcon>
      </div>
      <div class="panel-row-content">
        <div class="panel-row-title">
          {{ title }}
        </div>
        <div class="panel-row-action">
          <slot name="action" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
import { addUnit } from '@/util/dom/style'
import Switch from '@/common/Switch/switch.vue'

defineOptions({
  name: 'PanelRow',
})

const props = defineProps({
  icon: {
    type: String,
    default: 'info-circle',
  },
  title: {
    type: String,
    default: 'title',
  },
  width: {
    type: Number,
    default: 747,
  },
  height: {
    type: Number,
    default: 89,
  },
})

const panelRowStyle = computed<CSSProperties>(() => ({
  width: addUnit(props.width),
  height: addUnit(props.height),
  // borderRadius: addUnit(props.height * (17 / 89)),
}))
</script>

<style src="./PanelRow.less" lang="less" scoped></style>
