<template>
  <div class="calendar-cell">
    <div class="calender-cell-date">
      {{ cell.cellDate.getDate() }}
    </div>
    <div class="calender-cell-amount">
      {{ cell.cellAmount }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onUpdated } from 'vue'
import { calendarCellProps } from '@/common/calendar/calendar-cell/calendar-cell'

defineOptions({
  name: 'calendar-cell',
})

const props = defineProps(calendarCellProps)
onUpdated(() => {
  // console.info(props.ledgerList)
})
</script>

<style src="./calendar-cell.less" lang="less" scoped></style>
