<template>
  <Header class="HeaderTop" />
  <IndexCover />
  <IndexCardsContainer />
  <IndexEnd />
</template>

<script setup lang='ts' name='App'>
import IndexCover from './IndexCover/IndexCover.vue'
import IndexCardsContainer from './IndexCards/IndexCardsContainer.vue';
import Header from '../header/Header.vue';
import IndexEnd from './IndexEnd/IndexEnd.vue';
</script>

<style scoped>
.HeaderTop {
  z-index: 1000;
}
</style>