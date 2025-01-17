import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/home/index.vue'
import TotalView from '@/views/total/index.vue'
 
const routes: Array<RouteRecordRaw> =  [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/total',
    children: [
      {
        path: 'total',
        name: 'total',
        component: TotalView
      },
      {
        path: 'articles',
        name: 'articles',
        component: () => import('@/views/articles/index.vue'),
      },
      
      {
        path: 'market',
        name: 'market',
        component: () => import('@/views/market/index.vue'),
      },
      {
        path: 'market-show',
        name: 'marketShow',
        component: () => import('@/views/market-show/index.vue'),
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/views/news/index.vue'),
      },
      {
        path: 'tool',
        name: 'tool',
        component: () => import('@/views/tool/index.vue'),
      },
      {
        path: 'rates',
        name: 'rates',
        component: () => import('@/views/rates/index.vue'),
      },
      {
        path: 'topic',
        name: 'topic',
        component: () => import('@/views/topic/index.vue'),
      },
      {
        path: 'navigator',
        name: 'navigator',
        component: () => import('@/views/navigator/index.vue'),
      },
      {
        path: 'essay',
        name: 'essay',
        component: () => import('@/views/essay/index.vue'),
      },
      {
        path: 'write',
        name: 'write',
        component:() => import('@/views/write/index.vue'), 
      },
      {
        path: 'developer',
        name: 'developer',
        component: () => import('@/views/developer/index.vue'),
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/search/index.vue'),
      },

    ]
  }
  
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {    // 控制滚动条是否保存位置
    if (['articles','write'].includes(to.name as string)) {
      if(savedPosition) {

        return savedPosition;
      }
    } else {
      return { top: 0 }; // 返回页面顶部
    }
  }
})

export default router
