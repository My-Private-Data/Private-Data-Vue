<script lang="ts" setup>
import { useStore } from 'vuex'
import { ref, watch } from 'vue'
import SideDrawer from '@/component/ui/side-drawer/side-drawer.vue'
import Header from '@/component/ui/header/header.vue'
import MainContent from '@/component/ui/main-content/main-content.vue'
import Footer from '@/component/ui/footer/footer.vue'
import Button from '@/common/button/button.vue'
import Switch from '@/common/switch/switch.vue'

// 显示模式
const store = useStore()
const { displayMode } = store.state
const isDark = ref<Boolean>(displayMode === 'dark-mode')

watch(isDark, (val) => {
  if (val) setDisplayMode('dark-mode')
  else setDisplayMode('light-mode')
})

function setDisplayMode(newVal: string) {
  store.commit('setDisplayMode', newVal)
}
</script>

<template>
  <div class="private-data">
    <SideDrawer class="left-drawer">
      <Header>
        <div class="avatar-area"></div>
      </Header>
      <MainContent>
        <Button :size="3" :link="'bookmark'" :icon-name="'bookmark'"></Button>
        <Button :size="3" :link="'file'" :icon-name="'folder'"></Button>
        <Button :size="3" :link="'ledger'" :icon-name="'coin'"></Button>
        <Button :size="3" :link="'music'" :icon-name="'music'"></Button>
        <Button :size="3" :link="'todo'" :icon-name="'check'"></Button>
        <Button :size="3" :link="'/'" :icon-name="'home'"></Button>
      </MainContent>
      <Footer>
        <Switch v-model:checked="isDark"></Switch>
      </Footer>
    </SideDrawer>
    <router-view />
  </div>
</template>

<style lang="less" scoped>
@import 'src/style/function';

.private-data {
  .full-size;
  .background;
  display: flex;

  .left-drawer {
    .header {
      .full-width(10rem);
    }

    .main-content {
      .flex-vertical-list;
      .flex-diagonal-center;

      .button {
        margin: 0.5rem;
      }
    }

    .footer {
      .full-width(10rem);
      .flex-vertical-list;
      .flex-diagonal-center;

      .button {
        margin: 0.5rem;
      }
    }
  }
}
</style>
