<template>
  <div>
    <button @click="fetchData">获取数据</button>
    <div v-if="loading">加载中...</div>
    <div v-if="error" style="color: red">{{ error }}</div>
    <div v-if="data">
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface APIResponse {
  message: string;
  // 根据你的 API 返回的数据结构，添加更多的字段
}

export default defineComponent({
  setup() {
    const data = ref<APIResponse | null>(null);
    const error = ref<string | null>(null);
    const loading = ref<boolean>(false);

    const fetchData = async () => {
      loading.value = true;
      error.value = null;
      data.value = null;

      try {
        const response = await fetch('http://47.117.152.226:8000/api/vote/list'); // 替换为你的 API 地址
        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        data.value = await response.json() as APIResponse;
      } catch (err) {
        error.value = err instanceof Error ? err.message : '未知错误';
      } finally {
        loading.value = false;
      }
    };

    return {
      data,
      error,
      loading,
      fetchData,
    };
  },
});
</script>