<template>
  <Header />

  <Head :title="DiaryTitle" />
  <br>
  <!-- <img :src="DiaryImgUrl" alt="" class="coverImg"> -->
  <div class="markdown-body">
    <el-image style="width: 100%; " :src="DiaryImgUrl" fit="fill" />
    {{ DiaryTime }}
    <br>
    {{ DiaryDiscribe }}
  </div>
  <!-- <el-image loading="lazy" :src="">

  </el-image> -->
  <div v-html="ref_result" class="markdown-body" style="font-size:medium"></div>
</template>


<script setup lang='ts' name='DiaryItem'>

import Header from '@/components/header/Header.vue';
import Head from '@/components/header/Head.vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import 'github-markdown-css';
import { ref, onMounted, watch } from 'vue';

const route = useRoute();
const param_id = route.params.id;

// 使用ref创建一个响应式变量来存储结果
const ref_result = ref<string | null>(null);

// 创建一个async函数来加载和渲染Markdown
async function loadAndRenderMarkdown() {
  const param_id_string = String(param_id);
  const full_path = `./md_diary/${param_id_string}.md`;

  const modules = import.meta.glob('./md_diary/**/*.md', { as: 'raw' });
  if (modules[full_path]) {
    // 等待异步模块加载完成
    const mod = await modules[full_path]();
    const mdContent = mod;
    const renderer = new MarkdownIt();
    ref_result.value = renderer.render(mdContent);
  } else {
    console.log('指定的Markdown文件不存在');
    ref_result.value = '指定的Markdown文件不存在';
  }
}
console.log(0)




// 使用onMounted钩子来在组件挂载后加载Markdown
onMounted(() => {
  loadAndRenderMarkdown();
});

const defaultImgUrl = new URL('../../../../../static/sliderMain.png', import.meta.url).href

const DiaryTitle = ref('Hello!')
const DiaryTime = ref('NICE2035')
const DiaryImgUrl = ref(defaultImgUrl)
const DiaryDiscribe = ref('出现了一些问题哦~')

import useDiaryData from '../diaryHooks/useDiaryData';
const { getDiaryListById } = useDiaryData()
const diaryItemMessage = getDiaryListById(String(param_id))
if (diaryItemMessage) {
  DiaryTitle.value = diaryItemMessage.diary_title
  DiaryTime.value = diaryItemMessage.diary_time
  DiaryDiscribe.value = diaryItemMessage.diary_discribe
  DiaryImgUrl.value = diaryItemMessage.img_url
}






</script>

<style scoped>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

.imgContainer {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  /* 确保img是块级元素 */
}
</style>