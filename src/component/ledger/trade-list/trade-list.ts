import { PropType } from 'vue'
// @ts-ignore
import { CalendarAmountCell, Ledger, TradeCategory } from '@/model'

export const tradeListProps = {
  selectDateMap: {
    type: Map as PropType<Map<CalendarAmountCell, Array<Ledger>>>,
    default: new Map(),
  },
  tradeCategoryMap: {
    type: Map as PropType<Map<{ categoryId: number }, TradeCategory>>,
    default: new Map(),
  },
}
