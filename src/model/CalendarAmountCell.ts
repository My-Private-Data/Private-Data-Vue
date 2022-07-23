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

  /** 金额 */
  cellAmount?: number

  /** 金额在本月区间中的百分比 */
  cellPercent?: number

  constructor(cellDate: Date, cellStatus: CalendarCellStatusEnum, cellAmount?: number, cellPercent?: number) {
    this.cellDate = cellDate
    this.cellStatus = cellStatus
    this.cellAmount = cellAmount
    this.cellPercent = cellPercent
  }
}
