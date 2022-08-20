<script lang="ts" setup>
import Card from '@/common/card/card.vue'
import Button from '@/common/button/button.vue'
</script>

<template>
  <div class="home">
    <Card :image="'src/asset/image/fruit-1.jpg'" :size="20" :link="'component'">
      <template #card-footer>
        <div class="card-footer-area">
          <div class="card-label">Component Center</div>
          <Button :label="'Try it'" :theme="'blue'" :width="5" :height="2" rounded></Button>
        </div>
      </template>
    </Card>
    <Card :image="'src/asset/image/fruit-2.jpg'" :size="20" :link="'tool'">
      <template #card-footer>
        <div class="card-footer-area">
          <div class="card-label">Vicai Tool</div>
          <Button :label="'Try it'" :theme="'blue'" :width="5" :height="2" rounded></Button>
        </div>
      </template>
    </Card>
    <Card :image="'src/asset/image/fruit-3.jpg'" :size="20" :link="'data'">
      <template #card-footer>
        <div class="card-footer-area">
          <div class="card-label">Private Data</div>
          <Button :label="'Try it'" :theme="'blue'" :width="5" :height="2" rounded></Button>
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="less" scoped>
@import 'src/style/function';

.home {
  .full-size;
  .background;
  .flex-horizontal-list;

  .card {
    margin: 1rem;

    .footer {
      .card-footer-area {
        .full-size;
        .flex-vertical-center;
        .flex-space-between;
        padding: 1rem;
        border-top: 1px rgba(255, 255, 255, 0.5) solid;
        backdrop-filter: saturate(100%) blur(14px);
        background: var(--background-glass-secondary);

        .card-label {
          .font(1rem, 800, var(--label-primary));
        }

        .button {
        }
      }
    }
  }
}
</style>
