<template>
  <Header class="HeaderTop"/>
  <IndexCover />
  <IndexCardsContainer />
</template>

<script setup lang='ts' name='App'>
import IndexCover from './IndexCover/IndexCover.vue'
import IndexCardsContainer from './IndexCards/IndexCardsContainer.vue';
import Header from '../header/Header.vue';

</script>

<style scoped>
.HeaderTop {
  z-index: 1000;
}
</style>