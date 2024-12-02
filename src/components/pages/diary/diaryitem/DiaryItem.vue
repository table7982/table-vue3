<template>
  <Header />

  <Head title="小小日记" />
  <h3>id编号为{{ dynamicParam }}</h3>
  <h3>还未开发,被骗了吧！</h3>
</template>

<script setup lang='ts' name='DiaryItem'>
import Header from '@/components/header/Header.vue';
import Head from '@/components/header/Head.vue';
import { RouterView } from 'vue-router';
import { useRoute } from 'vue-router';

const route = useRoute();
const dynamicParam = route.params.id; // 假设路由参数名为id

</script>

<style scoped></style>