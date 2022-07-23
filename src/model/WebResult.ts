export enum StatusCode {
  SUCCESS = '200',
}

export interface WebResult<T = any> {
  /** 状态码 */
  status: string
  /** 响应消息 */
  message: string
  /** 响应数据 */
  data: T
}
