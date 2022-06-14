<template>
  <div class="panel-row-icon">
    <slot>
      <SvgIcon :class="`${theme}-panel-row-icon`" :name="iconName"></SvgIcon>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { panelRowIconProps } from '@/common/panel-row/panel-row-icon/panel-row-icon'

defineOptions({
  name: 'PanelRowIcon',
})

const props = defineProps(panelRowIconProps)
</script>

<style src="./panel-row-icon.less" lang="less" scoped></style>
