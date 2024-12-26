import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/index.vue'
import TotalView from '@/views/total/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
          path: 'answer',
          name: 'answer',
          component:() => import('@/views/answer/index.vue'), 
        },
        {
          path: 'articles',
          name: 'articles',
          component: () => import('@/views/articles/index.vue'),
        },
        {
          path: 'data',
          name: 'data',
          component: () => import('@/views/data/index.vue'),
        },
        {
          path: 'market',
          name: 'market',
          component: () => import('@/views/market/index.vue'),
        },
        {
          path: 'news',
          name: 'news',
          component: () => import('@/views/news/index.vue'),
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
      ]
    }
    
  ],
})

export default router
