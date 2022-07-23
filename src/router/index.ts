import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/view/home.vue'),
  },
  {
    path: '/component',
    name: 'component',
    component: () => import('@/view/component-center.vue'),
  },
  {
    path: '/data',
    name: 'data',
    component: () => import('@/view/private-data.vue'),
    children: [
      {
        path: '/album',
        name: 'album',
        component: () => import('@/view/private-data/album.vue'),
      },
      {
        path: '/bookmark',
        name: 'bookmark',
        component: () => import('@/view/private-data/bookmark.vue'),
      },
      {
        path: '/file',
        name: 'file',
        component: () => import('@/view/private-data/file.vue'),
      },
      {
        path: '/ledger',
        name: 'ledger',
        component: () => import('@/view/private-data/ledger.vue'),
      },
      {
        path: '/music',
        name: 'music',
        component: () => import('@/view/private-data/album.vue'),
      },
      {
        path: '/todo',
        name: 'todo',
        component: () => import('@/view/private-data/todo.vue'),
      },
    ],
  },
  {
    path: '/tool',
    name: 'VicaiTool',
    component: () => import('@/view/vicai-tool.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
