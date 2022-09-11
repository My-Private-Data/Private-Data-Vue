<template>
  <div class="ledger">
    <NavBar>
      <span>ledger：账单，只包含收支记录，不包含全部的交易记录（如转账、存取等）</span>
    </NavBar>
    <MainContent>
      <Calendar
        :select-date-list="Array.from(selectDateMap.keys())"
        @selectDateChange="handleSelectDateChange"
        @monthChange="handleMonthChange"
      ></Calendar>
      <TradeList :select-date-map="selectDateMap" :trade-category-map="tradeCategoryMap"></TradeList>
    </MainContent>
    <SideDrawer class="right-drawer" :position="'right'" :size="25">
      <AddTrade :trade-category-list="Array.from(tradeCategoryMap.values())"></AddTrade>
    </SideDrawer>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { LedgerQueryApi } from '@/api'
import { CalendarAmountCell, Ledger, StatusCode, TradeCategory } from '@/model'
import Calendar from '@/common/calendar/calendar.vue'
import { getYearMonthDay } from '@/util'
import TradeList from '@/component/ledger/trade-list/trade-list.vue'
import NavBar from '@/component/ui/nav-bar/nav-bar.vue'
import MainContent from '@/component/ui/main-content/main-content.vue'
import SideDrawer from '@/component/ui/side-drawer/side-drawer.vue'
import AddTrade from '@/component/ledger/add-trade/add-trade.vue'
// key:日期，value:trade-list
const selectDateMap = ref(new Map<CalendarAmountCell, Array<Ledger>>())
const tradeCategoryMap = ref(new Map<{ categoryId: number }, TradeCategory>())

const handleSelectDateChange = (cell: CalendarAmountCell) => {
  // 选中了的日期再次点击，取消选中，
  if (selectDateMap.value.has(cell)) selectDateMap.value.delete(cell)
  // 添加选中的日期，同步增加账单列表
  else {
    const year = cell.cellDate.getFullYear()
    const month = cell.cellDate.getMonth() + 1
    const day = cell.cellDate.getDate()

    LedgerQueryApi.queryLedgerByDate(year, month, day).then((resp) => {
      const res = resp.data
      if (res.status !== StatusCode.SUCCESS) return console.error(`获取网盘文件失败！${res.message}`)
      // 初始化为空数组
      for (const ledger of res.data) {
        ledger.subLedgerSet = new Set()
      }
      selectDateMap.value.set(cell, res.data)
      sortMapByDate()
    })
  }
}

const handleMonthChange = () => {
  selectDateMap.value.clear()
}

const sortMapByDate = () => {
  const keyList = Array.from(selectDateMap.value.keys())
  keyList.sort((a, b) => (a.cellDate.getTime() > b.cellDate.getTime() ? 1 : -1))
  const sortedMap = new Map()
  keyList.forEach((key) => {
    sortedMap.set(key, selectDateMap.value.get(key))
  })
  selectDateMap.value = sortedMap
}

const getTradeCategoryMap = () => {
  LedgerQueryApi.queryCategoryList().then((resp) => {
    const res = resp.data
    if (res.status !== StatusCode.SUCCESS) return console.error(`获取网盘文件失败！${res.message}`)
    const tradeCategoryList = res.data
    tradeCategoryList.forEach((tradeCategory) => {
      tradeCategoryMap.value.set(tradeCategory.categoryId, tradeCategory)
    })
  })
}

onMounted(() => {
  getTradeCategoryMap()
})
</script>

<style lang="less" scoped>
@import '../../../style/function';

.ledger {
  .full-size;
  .background;

  .main-content {
    display: flex;
    justify-content: flex-start;
  }

  .right-drawer {
    backdrop-filter: saturate(180%) blur(14px);
    background: var(--background-glass-tertiary);
  }
}
</style>
