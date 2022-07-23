<template>
  <div class="calendar">
    <div class="calendar-background">
      <div class="calendar-header">
        <div class="calendar-prev-button" @click="resetMonth(0, -1)">
          <SvgIcon name="ios-arrow-back"></SvgIcon>
        </div>
        <div class="calendar-year-month">
          {{ `${currentYear} 年 ${currentMonth} 月` }}
        </div>
        <div class="calendar-next-button" @click="resetMonth(0, 1)">
          <SvgIcon name="ios-arrow-forward"></SvgIcon>
        </div>
      </div>
      <div class="calender-body">
        <div class="calender-body-header">
          <div v-for="word in calendarBodyHeader" :key="word" class="calender-body-header-word">{{ word }}</div>
        </div>
        <div class="calender-body-table">
          <div
            v-for="(cell, i) in calendarCellList"
            :key="i"
            class="calender-body-table-cell-background"
            @click="selectOneDate(cell)"
          >
            <CalendarCell
              :cell="cell"
              :class="[
                selectDateList.includes(cell.cellDate) ? `selected` : '',
                cell.cellStatus === 'disabled' ? `disabled` : '',
              ]"
            ></CalendarCell>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { calendarProps } from '@/common/calendar/calendar'
import CalendarCell from './calendar-cell/calendar-cell.vue'
import { LedgerQueryApi } from '@/api'
import { CalendarAmountCell, StatusCode } from '@/model'

defineOptions({
  name: 'calendar',
})

const props = defineProps(calendarProps)
const emits = defineEmits(['selectDateChange', 'monthChange'])

const calendarBodyHeader = ['日', '一', '二', '三', '四', '五', '六']
const currentDate = new Date()
const currentYear = ref<number>(currentDate.getFullYear())
const currentMonth = ref<number>(currentDate.getMonth() + 1)
const calendarCellList = ref<CalendarAmountCell>([])

const getCalendarCellList = () => {
  const year = currentYear.value
  const month = currentMonth.value
  const daysInMonth = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  calendarCellList.value = []
  // 闰年判断
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInMonth[2] = 29
  }
  // 获取当前月份第一天
  const firstDateOfMonth = new Date(year, month - 1, 1)
  // 当前月份第一天在周几
  const weekOfFirstDay = firstDateOfMonth.getDay()
  // 如果不是周末，补全月末初前面的日期
  if (weekOfFirstDay > 0) {
    for (let i = weekOfFirstDay; i > 0; i--) {
      calendarCellList.value.push(new CalendarAmountCell(new Date(year, month - 1, 1 - i), 'disabled'))
    }
  }
  // 填充本月日期
  for (let i = 0; i < daysInMonth[month]; i++) {
    calendarCellList.value.push(new CalendarAmountCell(new Date(year, month - 1, 1 + i), 'normal'))
  }
  // 月末后面需要填充多少日期
  const needDayAfterLastDay = (calendarCellList.value.length > 35 ? 42 : 35) - calendarCellList.value.length
  // 填充月末后面的日期
  for (let i = 0; i < needDayAfterLastDay; i++) {
    calendarCellList.value.push(new CalendarAmountCell(new Date(year, month - 1, 1 + i), 'disabled'))
  }
}

const resetMonth = (numOfYear, numOfMonth) => {
  currentYear.value += numOfYear
  currentMonth.value += numOfMonth
  if (currentMonth.value < 1) {
    currentMonth.value = 12
    currentYear.value--
  } else if (currentMonth.value > 12) {
    currentMonth.value = 1
    currentYear.value++
  }
  // 获取该月每天日期
  getCalendarCellList()
  // 获取该月每天消费情况
  getSumAmountByMonth()
  // 清除已选择日期
  emits('monthChange')
}

const selectOneDate = (cell) => {
  if (cell.cellStatus !== 'normal') return
  emits('selectDateChange', cell.cellDate)
}

const getSumAmountByMonth = () => {
  LedgerQueryApi.querySumAmountByMonth(currentYear.value, currentMonth.value).then((resp) => {
    const res = resp.data
    if (res.status !== StatusCode.SUCCESS) return console.error(`获取网盘文件失败！${res.message}`)
    const tradeDayList = res.data
    // 按照价格区间渲染数字颜色【红-绿】
    let minAmount = 0
    let maxAmount = 0
    tradeDayList.forEach((tradeDay) => {
      minAmount = Math.min(minAmount, tradeDay.sumAmount)
      maxAmount = Math.max(maxAmount, tradeDay.sumAmount)
      // ref 数组是 Proxy 对象，无法直接调用 find
      calendarCellList.value.forEach((cell) => {
        // 不显示禁用的日期
        if (cell.cellStatus === 'disabled') return
        // 无法直接比较日期，因此通过日期的数字判断是否是同一天
        if (cell.cellDate.getTime() === Date.parse(tradeDay.tradeDay)) {
          cell.cellAmount = tradeDay.sumAmount
        }
      })
    })
    calendarCellList.value.forEach((cell) => {
      if (cell.cellAmount)
        cell.cellPercent = (((cell.cellAmount - minAmount) / (maxAmount - minAmount)) * 100).toFixed(0)
    })
  })
}

onMounted(() => {
  getCalendarCellList()
})
</script>

<style src="./calendar.less" lang="less" scoped></style>
