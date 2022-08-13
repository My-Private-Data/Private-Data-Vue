<template>
  <div class="calendar-cell">
    <div class="calendar-cell-date">
      {{ props.cell.cellDate.getDate() }}
    </div>
    <div class="calendar-cell-detail">
      <div v-if="props.cell.sumExpenditure !== 0" class="calendar-cell-amount" :class="'amount-expenditure'">
        {{ `-` + props.cell.sumExpenditure }}
      </div>
      <div v-if="props.cell.sumIncome !== 0" class="calendar-cell-amount" :class="'amount-income'">
        {{ `+` + props.cell.sumIncome }}
      </div>
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
