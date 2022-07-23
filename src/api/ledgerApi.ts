import { AxiosPromise } from 'axios'
import { PageQuery, WebResult, Ledger, TradeDay } from '@/model'
import request from '@/api/request'

export class LedgerQueryApi {
  public static queryLedgerList(pageQuery: PageQuery): AxiosPromise<WebResult<Ledger[]>> {
    return request.get('ledger/1/query/list', {
      params: {
        pageNum: pageQuery.pageNum,
        pageSize: pageQuery.pageSize,
      },
    })
  }

  public static queryLedgerByDate(date: string, pageQuery: PageQuery): AxiosPromise<WebResult<Ledger[]>> {
    return request.get('ledger/1/query/date', {
      params: {
        singleDate: date,
        pageNum: pageQuery.pageNum,
        pageSize: pageQuery.pageSize,
      },
    })
  }

  public static querySumAmountByMonth(year: number, month: number): AxiosPromise<Array<TradeDay[]>> {
    return request.get('ledger/1/query/sum', {
      params: {
        year,
        month,
      },
    })
  }
}

export class LedgerActionApi {
  public static addOneLedger() {}
}
