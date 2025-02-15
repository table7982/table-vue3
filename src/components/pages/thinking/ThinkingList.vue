<template>
  <div v-for=" thinkingDataItem in ThinkingList" :key="thinkingDataItem.id">
    <ThinkingListItem :thinkingMessage=thinkingDataItem />
  </div>

</template>

<script setup lang='ts' name='TinkingList'>
import ThinkingListItem from './ThinkingListItem.vue';
import useThinkingData from './thinkinghooks/useThinkingData';
const { ThinkingList } = useThinkingData()

</script>

<style scoped></style>