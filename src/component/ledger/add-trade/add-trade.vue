<template>
  <div class="add-trade">
    <NavBar>
      <SegmentedPicker v-model:selectSegment="selectSegment" :option-list="['收入', '支出']"></SegmentedPicker>
      <div class="add-trade-amount">
        <input v-model="ledger.amount" type="text" class="add-trade-amount-input" @input="handleMoneyChange" />
        <input v-model="ledger.discount" type="text" class="add-trade-amount-input" @input="handleMoneyChange" />
        <div class="add-trade-amount-unit">CNY</div>
      </div>
    </NavBar>
    <MainContent>
      <div v-if="selectSegment === '收入'" class="add-trade-category-list">
        <div
          v-for="(category, i) in tradeCategoryList.filter((category) => isIncome(category))"
          :key="i"
          class="add-trade-category-cell"
          :class="[ledger.categoryId === category.categoryId ? 'selected' : 'unchecked']"
          @click="selectOneCategory(category)"
        >
          <div class="add-trade-category-icon-content">
            <div class="add-trade-category-icon" :class="getCategoryName(category)">
              <SvgIcon :name="getCategoryName(category)"></SvgIcon>
            </div>
          </div>
          <div class="add-trade-category-name">
            {{ category.categoryName }}
          </div>
        </div>
      </div>
      <div v-if="selectSegment === '支出'" class="add-trade-category-list">
        <div
          v-for="(category, i) in tradeCategoryList.filter((category) => isExpenditure(category))"
          :key="i"
          class="add-trade-category-cell"
          :class="[ledger.categoryId === category.categoryId ? 'selected' : 'unchecked']"
          @click="selectOneCategory(category)"
        >
          <div class="add-trade-category-icon-content">
            <div class="add-trade-category-icon" :class="getCategoryName(category)">
              <SvgIcon :name="getCategoryName(category)"></SvgIcon>
            </div>
          </div>
          <div class="add-trade-category-name">
            {{ category.categoryName }}
          </div>
        </div>
      </div>
      <div class="trade-description">
        <div class="trade-description-line">
          <div class="trade-description-label">关联人：</div>
          <input v-model="ledger.relevantPerson" type="text" maxlength="50" />
        </div>
        <div class="trade-description-line">
          <div class="trade-description-label">备注：</div>
          <input v-model="ledger.remark" type="text" maxlength="50" />
        </div>
        <div class="trade-description-line">
          <div class="trade-description-label">品牌：</div>
          <input v-model="ledger.brand" type="text" maxlength="50" />
        </div>
      </div>
      <div class="date-input">
        <input v-model="year" type="text" maxlength="4" />
        <div class="text-split">年</div>
        <input v-model="month" type="text" maxlength="2" />
        <div class="text-split">月</div>
        <input v-model="day" type="text" maxlength="2" />
        <div class="text-split">日</div>
      </div>
      <div class="action-area">
        <Button :label="'Submit'" :theme="'blue'" :width="5" :height="2" rounded @click="addNewLedger"></Button>
      </div>
    </MainContent>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SegmentedPicker from '@/common/segmented-picker/segmented-picker.vue'
import { addTradeProps } from '@/component/ledger/add-trade/add-trade'
import { TradeCategory } from '@/model/TradeCategory'
import NavBar from '@/component/ui/nav-bar/nav-bar.vue'
import Button from '@/common/button/button.vue'
import MainContent from '@/component/ui/main-content/main-content.vue'
import { Ledger, StatusCode } from '@/model'
import { LedgerActionApi, LedgerQueryApi } from '@/api'

defineOptions({
  name: 'AddTrade',
})

const props = defineProps(addTradeProps)

const selectSegment = ref('收入')
const ledger = ref<Ledger>(new Ledger())
const year = ref<number>(new Date().getFullYear())
const month = ref<number>(new Date().getMonth() + 1)
const day = ref<number>(new Date().getDate())

const isIncome = (category: TradeCategory) => {
  return category.categoryId.startsWith('1') && category.categoryLevel === 1
}
const isExpenditure = (category: TradeCategory) => {
  return category.categoryId.startsWith('2') && category.categoryLevel === 1
}

const getCategoryName = (category: TradeCategory) => {
  return category.categoryName.slice(0, 2)
}

const selectOneCategory = (category: TradeCategory) => {
  ledger.value.categoryId = category.categoryId
}

const handleMoneyChange = () => {
  // TODO format check
}

const addNewLedger = () => {
  ledger.value.tradeTime = new Date(year.value, month.value - 1, day.value)
  ledger.value.createTime = new Date()
  // 添加的时候设置修改时间
  ledger.value.updateTime = ledger.value.createTime
  LedgerActionApi.addOneLedger(ledger.value).then((resp) => {
    const res = resp.data
    if (res.status !== StatusCode.SUCCESS) return console.error(`获取网盘文件失败！${res.message}`)
    console.info(res.data)
  })
}
</script>

<style src="./add-trade.less" lang="less" scoped></style>
