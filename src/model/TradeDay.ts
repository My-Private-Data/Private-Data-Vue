export class TradeDay {
  /** 用户 ID */
  userId: string

  /** 交易单日期 */
  tradeDay: Date

  /** 当日收入总额 */
  sumIncome: number

  /** 当日支出总额 */
  sumExpenditure: number

  /** 创建时间 */
  createTime: Date

  /** 更新时间 */
  updateTime: Date

  constructor(
    userId: string,
    tradeDay: Date,
    sumIncome: number,
    sumExpenditure: number,
    createTime: Date,
    updateTime: Date,
  ) {
    this.userId = userId
    this.tradeDay = tradeDay
    this.sumIncome = sumIncome
    this.sumExpenditure = sumExpenditure
    this.createTime = createTime
    this.updateTime = updateTime
  }
}
