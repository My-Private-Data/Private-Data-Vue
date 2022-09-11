import { AxiosPromise } from 'axios'
import { PageQuery, WebResult, Ledger, TradeDay } from '@/model'
import request from '@/api/request'
import { TradeCategory } from '@/model/TradeCategory'

export class LedgerQueryApi {
  public static queryLedgerList(pageQuery: PageQuery): AxiosPromise<WebResult<Ledger[]>> {
    return request.get('ledger/1/query/list', {
      params: {
        pageNum: pageQuery.pageNum,
        pageSize: pageQuery.pageSize,
      },
    })
  }

  public static queryCategoryList(): AxiosPromise<WebResult<TradeCategory[]>> {
    return request.get('ledger/1/query/category')
  }

  public static queryLedgerByDate(year: number, month: number, day: number): AxiosPromise<WebResult<Ledger[]>> {
    return request.get('ledger/1/query/date', {
      params: {
        year,
        month,
        day,
      },
    })
  }

  public static querySumIncomeByDate(year: number, month: number, day: number): AxiosPromise<WebResult<number>> {
    return request.get('ledger/1/query/date/amount/income', {
      params: {
        year,
        month,
        day,
      },
    })
  }

  public static querySumIncome(): AxiosPromise<WebResult<number>> {
    return request.get('ledger/1/query/sum/income')
  }

  public static querySumExpenditureByDate(year: number, month: number, day: number): AxiosPromise<WebResult<number>> {
    return request.get('ledger/1/query/date/amount/expenditure', {
      params: {
        year,
        month,
        day,
      },
    })
  }

  public static querySumExpenditure(): AxiosPromise<WebResult<number>> {
    return request.get('ledger/1/query/sum/expenditure')
  }

  public static queryTradeDayByMonth(year: number, month: number): AxiosPromise<Array<TradeDay[]>> {
    return request.get('ledger/1/query/month/trade-day', {
      params: {
        year,
        month,
      },
    })
  }
}

export class LedgerActionApi {
  public static addOneLedger(ledger: Ledger): AxiosPromise<number> {
    return request.post('ledger/1/add', ledger)
  }
}
