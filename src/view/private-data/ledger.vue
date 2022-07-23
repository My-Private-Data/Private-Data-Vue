<script lang="ts" setup>
import { ref } from 'vue'
import { LedgerQueryApi } from '@/api'
import { PageQuery, StatusCode } from '@/model'
import Calendar from '@/common/calendar/calendar.vue'
import { getYearMonthDay } from '@/util'
import TradeList from '@/component/ldeger/trade-list/trade-list.vue'

const selectDateMap = ref(new Map())

const handleSelectDateChange = (cellDate: Date) => {
  // 选中了的日期再次点击，取消选中，
  if (selectDateMap.value.has(cellDate)) selectDateMap.value.delete(cellDate)
  // 添加选中的日期，同步增加账单列表
  else {
    const singleDate = getYearMonthDay(cellDate)
    const pageQuery = new PageQuery()
    LedgerQueryApi.queryLedgerByDate(singleDate, pageQuery).then((resp) => {
      const res = resp.data
      if (res.status !== StatusCode.SUCCESS) return console.error(`获取网盘文件失败！${res.message}`)
      selectDateMap.value.set(cellDate, res.data.data)
    })
  }
  console.info(selectDateMap.value)
}
const handleMonthChange = () => {
  selectDateMap.value.clear()
}
</script>

<template>
  <div class="ledger">
    <span>ledger：账单，只包含收支记录，不包含全部的交易记录（如转账、存取等）</span>
    <Calendar
      :select-date-list="Array.from(selectDateMap.keys())"
      @selectDateChange="handleSelectDateChange"
      @monthChange="handleMonthChange"
    ></Calendar>
    <TradeList :trade-list="Array.from(selectDateMap.values())"></TradeList>
  </div>
</template>

<style lang="less" scoped>
@import 'src/style/function';

.ledger {
  .full-size;
  .background;
}
</style>
