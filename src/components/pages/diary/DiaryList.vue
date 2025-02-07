<template>
  <Header />

  <Head title="小小记录" />
  <DiaryListItem :diaryMessage='DiaryList[0]' />
  <DiaryListItem :diaryMessage='DiaryList[1]' />
  <DiaryListItem :diaryMessage='DiaryList[2]' />
  <DiaryListItem :diaryMessage='DiaryList[3]' />
  <DiaryListItem :diaryMessage='DiaryList[4]' />
  <DiaryListItem :diaryMessage='DiaryList[5]' />
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
import useDiaryData from './diaryHooks/useDiaryData';
const { DiaryList } = useDiaryData()






</script>

<style scoped></style>