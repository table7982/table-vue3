<template>
  <Header />

  <Head :title="DiaryTitle" />
  <br>
  <!-- <img :src="DiaryImgUrl" alt="" class="coverImg"> -->
  <div class="markdown-body">
    <el-image style="width: 100%; " :src="DiaryImgUrl" fit="full" />
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


let DiaryListMessage = {}
import emitter from '@/utils/emitter';
let param_id_string = String(param_id);
function sentDiaryId() {
  emitter.emit('diaryIdChange', param_id_string)
}

// 使用onMounted钩子来在组件挂载后加载Markdown
onMounted(() => {
  loadAndRenderMarkdown();
  sentDiaryId();
});
let diaryDetailMessage: any = ref(null)
emitter.on('sentDiaryImgUrl', (DetailMessage: any) => {
  diaryDetailMessage.value = DetailMessage
  console.log(diaryDetailMessage.value.img_url)
})


const defaultImgUrl = new URL('../../../../../static/sliderMain.png', import.meta.url).href

const DiaryTitle = ref('Hello!')
const DiaryTime = ref('NICE2035')
const DiaryImgUrl = ref(defaultImgUrl)
const DiaryDiscribe = ref('你没有从小小日记界面进入哦！')


watch(diaryDetailMessage, () => {
  emitter.off('sentDiaryImgUrl')
  console.log('注销了')
  console.log('函数外面的', diaryDetailMessage.value.diary_title)
  DiaryTitle.value = diaryDetailMessage.value.diary_title
  DiaryTime.value = diaryDetailMessage.value.diary_time
  DiaryImgUrl.value = diaryDetailMessage.value.img_url
  DiaryDiscribe.value = diaryDetailMessage.value.diary_discribe
})




// emitter.on('sentDiaryImgUrl', (value: any) => {
//   console.log('sendSliderNewValue被触发', value)

// })



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