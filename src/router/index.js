import { createRouter, createWebHistory } from 'vue-router'
import AppTop from '@/views/AppTop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AppTop',
      component: AppTop
    },
    {
      path: '/memos/:id/edit',
      name: 'MemoEdit',
      component: () => {
        return import('@/views/MemoEdit.vue')
      },
      props: (routes) => {
        const idNum = Number(routes.params.id)
        return { id: idNum }
      }
    },
    {
      path: '/memos/new',
      name: 'MemoNew',
      component: () => {
        return import('@/views/MemoNew.vue')
      }
    }
  ]
})

export default router
