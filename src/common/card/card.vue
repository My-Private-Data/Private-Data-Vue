<template>
  <div class="card" :style="cardStyle">
    <a :href="props.link">
      <Header>
        <slot name="card-header"></slot>
      </Header>
      <MainContent>
        <slot name="card-main-content"></slot>
      </MainContent>
      <Footer>
        <slot name="card-footer"></slot>
      </Footer>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
import { cardProps } from '@/common/card/card'
import Header from '@/component/ui/header/header.vue'
import MainContent from '@/component/ui/main-content/main-content.vue'
import Footer from '@/component/ui/footer/footer.vue'
import { addUnit } from '@/util'

defineOptions({
  name: 'Card',
})

const props = defineProps(cardProps)
const cardStyle = computed<CSSProperties>(() => {
  let cardWidth
  let cardHeight
  let cardBorderRadius
  // 14:10:1
  if (props.size) {
    cardWidth = props.size
    cardHeight = props.size * (10 / 14)
    cardBorderRadius = props.size * (1 / 14)
  } else {
    cardWidth = props.width ? props.width : 14
    cardHeight = props.height ? props.height : cardWidth * (10 / 14)
    cardBorderRadius = cardWidth * (1 / 14)
  }

  return {
    'background-image': `url(${props.image})`,
    width: addUnit(cardWidth, 'rem'),
    height: addUnit(cardHeight, 'rem'),
    borderRadius: addUnit(cardBorderRadius, 'rem'),
  }
})
</script>

<style src="./card.less" lang="less" scoped></style>
