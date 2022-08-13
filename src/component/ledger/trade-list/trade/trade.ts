import { PropType } from 'vue'
// @ts-ignore
import { Ledger, TradeCategory } from '@/model'

export const tradeProps = {
  ledger: {
    type: Object as PropType<Ledger>,
    default: null,
  },
  tradeCategoryMap: {
    type: Map as PropType<Map<{ categoryId: number }, TradeCategory>>,
    default: new Map(),
  },
}
