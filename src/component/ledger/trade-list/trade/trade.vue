<template>
  <div class="trade">
    <MainContent>
      <div class="trade-detail-left-content">
        <div class="trade-detail-icon" :class="getCategoryName(props.ledger.categoryId)">
          <SvgIcon :name="getCategoryName(props.ledger.categoryId)"></SvgIcon>
        </div>
      </div>
      <div class="trade-detail-main-content">
        <div class="trade-detail-remark">
          {{ props.ledger.remark }}
        </div>
        <div class="trade-detail-brand">
          {{ props.ledger.brand }}
        </div>
      </div>
      <div class="trade-detail-right-content">
        <div v-if="isIncome(props.ledger.categoryId)" class="trade-detail-income">
          {{ `+` + props.ledger.amount }}
        </div>
        <div v-else class="trade-detail-expenditure">
          {{ `-` + props.ledger.amount }}
        </div>
      </div>
    </MainContent>
    <Footer>
      <div v-if="props.ledger.subLedgerSet.size !== 0" class="trade-detail-sub-content">
        <div class="collapse-button" @click="isCollapse = !isCollapse">
          <SvgIcon v-if="isCollapse" :name="'ios-arrow-down'"></SvgIcon>
          <SvgIcon v-if="!isCollapse" :name="'ios-arrow-up'"></SvgIcon>
        </div>
        <div class="collapse-sub-trade-area">
          <div v-if="isCollapse" class="collapse-sub-trade-icon-area">
            <div
              v-for="(subLedger, i) in Array.from(props.ledger.subLedgerSet).slice(0, 3)"
              :key="i"
              class="trade-detail-icon"
              :class="getCategoryName(subLedger.categoryId)"
            >
              <SvgIcon :name="getCategoryName(subLedger.categoryId)"></SvgIcon>
            </div>
            <div
              v-if="props.ledger.subLedgerSet.size > 3"
              class="trade-detail-more-icon-background"
              :class="getCategoryName(props.ledger.categoryId)"
            >
              <div class="trade-detail-more-icon">
                {{ `+${props.ledger.subLedgerSet.size - 3}` }}
              </div>
            </div>
          </div>
          <div v-if="!isCollapse" class="sub-trade-number">
            {{ `共${props.ledger.subLedgerSet.size}个交易单` }}
          </div>
        </div>
        <div class="sub-trade-area" :style="subTradeStyle">
          <div v-for="(subLedger, i) in Array.from(props.ledger.subLedgerSet)" :key="i" class="trade-detail">
            <Trade :ledger="subLedger" :trade-category-map="props.tradeCategoryMap"></Trade>
          </div>
        </div>
      </div>
    </Footer>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, ref } from 'vue'
import { tradeProps } from '@/component/ledger/trade-list/trade/trade'
import MainContent from '@/component/ui/main-content/main-content.vue'
import Footer from '@/component/ui/footer/footer.vue'
import { addUnit } from '@/util'

defineOptions({
  name: 'Trade',
})
const props = defineProps(tradeProps)

const isCollapse = ref(true)
const subTradeStyle = computed<CSSProperties>(() => {
  let subTradeHeight = addUnit(props.ledger.subLedgerSet.size * 4, 'rem')
  if (isCollapse.value) subTradeHeight = 0

  return {
    width: addUnit(100, '%'),
    height: subTradeHeight,
  }
})
const getCategoryName = (categoryId: string) => {
  return props.tradeCategoryMap.get(categoryId).categoryName.slice(0, 2)
}

const isIncome = (categoryId: string) => {
  return categoryId.startsWith('1')
}
</script>

<style src="./trade.less" lang="less" scoped></style>
