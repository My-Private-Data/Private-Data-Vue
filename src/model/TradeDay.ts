export class TradeDay {
  /** 用户 ID */
  userId: string

  /** 交易日期 */
  tradeDay: Date

  /** 每日交易总额 */
  sumAmount: number

  /** 创建时间 */
  createTime: Date

  /** 更新时间 */
  updateTime: Date

  constructor(userId: string, tradeDay: Date, sumAmount: number, createTime: Date, updateTime: Date) {
    this.userId = userId
    this.tradeDay = tradeDay
    this.sumAmount = sumAmount
    this.createTime = createTime
    this.updateTime = updateTime
  }
}
