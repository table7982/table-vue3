<template>
  <Header />

  <Head title="小小日记" />
  <DiaryListItem :diaryMessage='DiaryList[0]' />
  <DiaryListItem :diaryMessage='DiaryList[1]' />
  <DiaryListItem :diaryMessage='DiaryList[2]' />
</template>

<script setup lang='ts' name='DiaryList'>

import emitter from '@/utils/emitter';
import router from '@/router/main';
import { RouterView } from 'vue-router';
import Header from '@/components/header/Header.vue';
import DiaryListItem from './DiaryListItem.vue';
import Head from '@/components/header/Head.vue';
import { ref, watch } from 'vue';
import DiaryItem from './diaryitem/DiaryItem.vue';
const diary_img_url_id03 = new URL('../../../../static/sliderMain.png', import.meta.url).href
const diary_img_url_id02 = new URL('../../../../static/SuStation.jpg', import.meta.url).href
const diary_img_url_id01 = new URL('../../../../static/SuPicture.jpg', import.meta.url).href

const DiaryList: any = [
  { diary_id: 'id03', diary_title: '写点什么', img_url: diary_img_url_id03, diary_time: '2024年 12月 2日 星期一', diary_discribe: '为什么要做这个网站？', route_link: '/diaryitem/id03' },
  { diary_id: 'id02', diary_title: '苏州一日行', img_url: diary_img_url_id02, diary_time: '2024年 11月 23日 星期六', diary_discribe: '特种兵之速通苏州，“月落乌啼霜满天~”.', route_link: '/diaryitem/id02' },
  { diary_id: 'id01', diary_title: '关于设计', img_url: diary_img_url_id01, diary_time: '2025年 7月 1日 星期二', diary_discribe: '给秋天一个约定，请春天来见证。', route_link: '/diaryitem/id01' },
]



let diaryItemId = ref('')
emitter.on('diaryIdChange', (value: any) => {
  console.log('diaryIdChange被触发', value)
  diaryItemId.value = value
  for (let i = 0; i < DiaryList.length; i++) {
    if (DiaryList[i].diary_id == diaryItemId.value) {
      console.log("找到了")
      emitter.emit('sentDiaryImgUrl', DiaryList[i])
    }
  }
  emitter.off('diaryIdChange')
})





// watch(diaryItemId, (newDiaryIndex) => {

// })

</script>

<style scoped></style>