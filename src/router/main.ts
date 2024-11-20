
import { createRouter, createWebHistory } from 'vue-router'
import Work from '@/components/pages/work/Work.vue'
import Link from '@/components/pages/link/Link.vue'
import Index from '@/components/index/Index.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/work',
      component: Work
    },
    {
      path: '/link',
      component: Link
    },
    {
      path: '/index',
      component: Index
    },

  ]
})
export default router