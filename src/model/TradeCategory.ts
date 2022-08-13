export class TradeCategory {
  /** 类别 ID */
  categoryId: string

  /** 类别等级，0-基本分类，1-一级分类，2-二级分类 */
  categoryLevel: number

  /** 类别名称 */
  categoryName: string

  /** 创建时间 */
  createTime: Date

  /** 更新时间 */
  updateTime: Date

  constructor(categoryId: string, categoryLevel: number, categoryName: string, createTime: Date, updateTime: Date) {
    this.categoryId = categoryId
    this.categoryLevel = categoryLevel
    this.categoryName = categoryName
    this.createTime = createTime
    this.updateTime = updateTime
  }
}
