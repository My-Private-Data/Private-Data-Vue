export class TableData {
  /** 表主键 ID */
  tableId: string

  /** 创建时间 */
  createTime: Date

  /** 更新时间 */
  updateTime: Date

  constructor(tableId: string, createTime: Date, updateTime: Date) {
    this.tableId = tableId
    this.createTime = createTime
    this.updateTime = updateTime
  }
}
