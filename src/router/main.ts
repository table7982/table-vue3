
import { createRouter, createWebHashHistory } from 'vue-router'
import Work from '@/components/pages/work/Work.vue'
import Link from '@/components/pages/link/Link.vue'
import Index from '@/components/index/Index.vue'
import DiaryList from '@/components/pages/diary/DiaryList.vue'
import DiaryItem from '@/components/pages/diary/diaryitem/DiaryItem.vue'
import Thinking from '@/components/pages/thinking/Thinking.vue'
import ThinkingItem from '@/components/pages/thinking/thinkingItem/thinkingItem.vue'
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
    },
    {
      path: '/thinking',
      component: Thinking,
    },
    {
      path: '/thinkingitem/:id',
      component: ThinkingItem,
    },


  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }

})
export default router