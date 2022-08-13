export class Ledger {
  /** 交易单 ID */
  tradeId: string

  /** 父交易单 ID */
  parentId: string

  /** 用户 ID */
  userId: string

  /** 实付/实收金额 */
  amount: number

  /** 折扣/补贴 */
  discount: number

  /** 类别 */
  categoryId: string

  /** 备注 */
  remark: string

  /** 交易时间 */
  tradeTime: Date

  /** 商家/品牌/机构/组织 */
  brand: string

  /** 关联人 */
  relevantPerson: string

  /** 是否删除 */
  isDelete: boolean

  /** 创建时间 */
  createTime: Date

  /** 更新时间 */
  updateTime: Date

  /** 子订单集合 */
  subLedgerSet: Set<Ledger>

  constructor(
    tradeId: string,
    parentId: string,
    userId: string,
    amount: number,
    discount: number,
    categoryId: string,
    remark: string,
    tradeTime: Date,
    brand: string,
    relevantPerson: string,
    isDelete: boolean,
    createTime: Date,
    updateTime: Date,
    subLedgerSet?: Set<Ledger>,
  ) {
    this.tradeId = tradeId
    this.parentId = parentId
    this.userId = userId
    this.amount = amount
    this.discount = discount
    this.categoryId = categoryId
    this.remark = remark
    this.tradeTime = tradeTime
    this.brand = brand
    this.relevantPerson = relevantPerson
    this.isDelete = isDelete
    this.createTime = createTime
    this.updateTime = updateTime
    this.subLedgerSet = subLedgerSet || new Set()
  }
}
