
import { createRouter, createWebHistory } from 'vue-router'
import Work from '@/components/pages/work/Work.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/work',
      component: Work
    }
  ]
})