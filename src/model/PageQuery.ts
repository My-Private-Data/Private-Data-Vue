export enum PageSizeEnum {
  LITTLE = 5,
  DEFAULT = 10,
  LARGE = 20,
  HUGE = 50,
  MAX = 100,
}

export class PageQuery {
  /** 分页查询的页数 */
  pageNum: number

  /** 分页查询的页大小 */
  pageSize: number

  constructor(pageNum?: number, pageSize?: number) {
    this.pageNum = pageNum || 0
    this.pageSize = pageSize || PageSizeEnum.DEFAULT
  }
}
