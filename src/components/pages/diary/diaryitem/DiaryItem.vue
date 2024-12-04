<template>
  <Header />

  <Head title="小小日记" />
  <!-- {{ diaryMessage.diary_title }} -->
  <div v-html="ref_result" class="markdown-body" style="font-size:medium"></div>
</template>

<script setup lang='ts' name='DiaryItem'>

import Header from '@/components/header/Header.vue';
import Head from '@/components/header/Head.vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import 'github-markdown-css';
import { ref, onMounted } from 'vue';
const props = defineProps(['diaryMessage'])
console.log(props)
const route = useRoute();
const param_id = route.params.id; // 假设路由参数名为id

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
onMounted(loadAndRenderMarkdown);




// import Header from '@/components/header/Header.vue';
// import Head from '@/components/header/Head.vue';
// import { useRoute } from 'vue-router';
// import MarkdownIt from 'markdown-it'
// import 'github-markdown-css';

// import { watchEffect, computed, ref, shallowRef } from 'vue';
// import router from '@/router/main';


// const route = useRoute();
// const param_id = route.params.id; // 假设路由参数名为id
// let md = '# 加载中'

// // console.log(param_id)
// let param_id_string: string = param_id as string
// let modules = import.meta.glob('./md_diary/**/*.md', { as: 'raw' })
// let full_path = `./md_diary/${param_id_string}.md`
// modules[full_path]().then((mod) => {
//   md = mod
// })
// console.log(modules[full_path]())
// let randerContainer = new MarkdownIt();
// let result = randerContainer.render(md); //传入文本
// let ref_result = ref(result)
// console.log(ref_result.value)



// const currentName: any = computed(() => {
//   return route.params.id;
// });
// let diary_url: string = ''
// watchEffect(() => {
//   if (route.path.startsWith('/diaryitem/')) {
//     diary_url = `./md_diary/${currentName.value}'.md?raw`

//   }
// });
// let md = 'null' as string

// var result = ''
// function mdShow(md_name: string) {

// }

// mdShow(param_id_string)
// console.log('***', md)


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
</style>