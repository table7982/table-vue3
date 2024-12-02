
import { createRouter, createWebHashHistory } from 'vue-router'
import Work from '@/components/pages/work/Work.vue'
import Link from '@/components/pages/link/Link.vue'
import Index from '@/components/index/Index.vue'
import DiaryList from '@/components/pages/diary/DiaryList.vue'
import DiaryItem from '@/components/pages/diary/diaryitem/DiaryItem.vue'
import Diaryid01 from '@/components/pages/diary/diaryitem/diary_page/Diaryid01.vue'

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
    {
      // name: 'diarylist',
      path: '/diarylist',
      component: DiaryList,

    },
    {
      // name: 'diaryitem',
      path: '/diaryitem/:id',
      component: DiaryItem,
    }

  ]
})
export default router