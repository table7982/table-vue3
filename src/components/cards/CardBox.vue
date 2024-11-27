<template>
  <div class="cardAll">
    <div class="cardBoxStyle">
      <div class="cardBox left">
        <Card class="cardItemLeft" :btnLink='spaceListItemF.btnLink'>
          <template v-slot:title>
            <p class="title">{{ spaceListItemF.title }}</p>
          </template>
          <template v-slot:paragraph>
            <p>{{ spaceListItemF.englishTitle }}</p>
          </template>
          <template v-slot:backTitle>
            <p class="title">{{ spaceListItemF.backTitle }}</p>
          </template>
          <template v-slot:backParagraph>
            <p>{{ spaceListItemF.backDiscribe }}</p>
          </template>
        </Card>
      </div>
    </div>
    <div class="cardBoxStyle">
      <div class="cardBox right">
        <Card class="cardItemRight" :btnLink='spaceListItemS.btnLink'>
          <template v-slot:title>
            <p class="title">{{ spaceListItemS.title }}</p>
          </template>
          <template v-slot:paragraph>
            <p>{{ spaceListItemS.englishTitle }}</p>
          </template>
          <template v-slot:backTitle>
            <p class="title">{{ spaceListItemS.backTitle }}</p>
          </template>
          <template v-slot:backParagraph>
            <p>{{ spaceListItemS.backDiscribe }}</p>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts' name='CardBox'>
import Card from './Card.vue';
const props: any = defineProps({
  spaceListItem: Array
});
console.log(props.spaceListItem[0]);
console.log(props.spaceListItem[1]);
let spaceListItemF = props.spaceListItem[0]
let spaceListItemS = props.spaceListItem[1]
</script>

<style scoped>
.cardAll {
  width: 100%;
  
  /* height: 50em; */
  /* overflow: hidden; */
}

.cardBoxStyle {
  width: 50%;
  height: 40rem;
  float: left;
  
  /* background-color: yellow; */
}

.title {
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.cardBoxStyle .cardBox {
  position: relative;
  width: 100%;
  height: 50%;
  /* background-color: red; */
  overflow: hidden;
}

.cardBoxStyle .left {

  transform: translateY(0);
  float: right;
}

.cardBoxStyle .right {

  transform: translateY(100%);
  float: left;
}

.cardItemLeft {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5%;
}

.cardItemRight {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5%;
}
</style>