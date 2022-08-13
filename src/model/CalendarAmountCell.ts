export enum CalendarCellStatusEnum {
  NORMAL = 'normal',
  DISABLED = 'disabled',
  SELECTED = 'selected',
}

export class CalendarAmountCell {
  /** 日期 */
  cellDate: Date

  /** 状态 */
  cellStatus: CalendarCellStatusEnum

  /** 当日总支出 */
  sumIncome?: number

  /** 当日总消费 */
  sumExpenditure?: number

  /** 金额在本月区间中的百分比 */
  cellPercent?: number

  constructor(
    cellDate: Date,
    cellStatus: CalendarCellStatusEnum,
    sumIncome?: number,
    sumExpenditure?: number,
    cellPercent?: number,
  ) {
    this.cellDate = cellDate
    this.cellStatus = cellStatus
    this.sumIncome = sumIncome || 0
    this.sumExpenditure = sumExpenditure || 0
    this.cellPercent = cellPercent || 0
  }
}
