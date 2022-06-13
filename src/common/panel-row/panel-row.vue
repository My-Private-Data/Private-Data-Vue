<template>
  <div class="panel-row">
    <div class="panel-row-background" :style="panelRowStyle">
      <div class="panel-row-icon">
        <slot name="prefix" />
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
import { panelRowProps } from '@/common/panel-row/panel-row'

defineOptions({
  name: 'panel-row',
})

const props = defineProps(panelRowProps)

const panelRowStyle = computed<CSSProperties>(() => ({
  width: addUnit(props.width),
  height: addUnit(props.height),
  // borderRadius: addUnit(props.height * (17 / 89)),
}))
</script>

<style src="./panel-row.less" lang="less" scoped></style>
