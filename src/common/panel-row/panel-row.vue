<template>
  <div class="panel-row">
    <a :href="props.link">
      <div class="panel-row-background" :style="panelRowStyle">
        <div class="panel-row-icon-area">
          <slot name="prefix" />
        </div>
        <div class="panel-row-content-area">
          <div class="panel-row-title-area">
            {{ props.title || props.link }}
          </div>
          <div class="panel-row-action-area">
            <slot name="label"></slot>
            <slot name="action">
              <SvgIcon class="arrow-forward-icon" name="ios-arrow-forward"></SvgIcon>
            </slot>
          </div>
        </div>
      </div>
    </a>
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
