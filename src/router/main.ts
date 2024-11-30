
import { createRouter, createWebHashHistory } from 'vue-router'
import Work from '@/../pages/work/Work.vue'
import Link from '@/../pages/link/Link.vue'
import Index from '@/components/index/Index.vue'
const router = createRouter({
  history: createWebHashHistory(),
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