<template>
  <div class="trade-list">
    <div v-for="(cell, i) in Array.from(selectDateMap.keys())" :key="i" class="trade-date-card">
      <NavBar>
        <div class="trade-date">{{ `${cell.cellDate.getMonth() + 1}月${cell.cellDate.getDate()}日` }}</div>
        <div class="trade-sum">
          <div v-if="cell.sumIncome > 0" class="trade-income">
            {{ `收入${cell.sumIncome}元,` }}
          </div>
          <div v-if="cell.sumExpenditure > 0" class="trade-expenditure">
            {{ `支出${cell.sumExpenditure}元` }}
          </div>
          <div v-if="cell.sumIncome === 0 && cell.sumExpenditure === 0" class="trade-none">
            {{ `当日无交易记录` }}
          </div>
        </div>
      </NavBar>
      <MainContent>
        <div v-for="(ledger, i) in getTradeList(props.selectDateMap.get(cell))" :key="i" class="trade-detail">
          <Trade :ledger="ledger" :trade-category-map="props.tradeCategoryMap"></Trade>
        </div>
      </MainContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { tradeListProps } from '@/component/ledger/trade-list/trade-list'
import NavBar from '@/component/ui/nav-bar/nav-bar.vue'
import MainContent from '@/component/ui/main-content/main-content.vue'
import { Ledger } from '@/model'
import Trade from '@/component/ledger/trade-list/trade/trade.vue'

defineOptions({
  name: 'tradeList',
})

const props = defineProps(tradeListProps)
const getTradeList = (ledgerList: Array<Ledger>) => {
  const ledgerIdMap = new Map<{ tradeId: number }, Ledger>()
  // TODO 支持多级订单嵌套
  for (const ledger of ledgerList) {
    if (ledger.parentId === ledger.tradeId) {
      ledgerIdMap.set(ledger.tradeId, ledger)
    }
  }
  for (const ledger of ledgerList) {
    if (ledger.parentId !== ledger.tradeId) {
      ledgerIdMap.get(ledger.parentId).subLedgerSet.add(ledger)
    }
  }

  return ledgerIdMap.values()
}
</script>

<style src="./trade-list.less" lang="less" scoped></style>
