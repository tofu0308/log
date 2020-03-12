<template>
  <div>
    <likeHeader></likeHeader>
    <p>{{ number }}</p>
    <likeNumber></likeNumber>
    <likeNumber :total-number="number" :test-props="test"></likeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/likeHeader.vue';

export default {
  data() {
   return {
     number: 14
   }
  },
  components: {
    LikeHeader
  }
}
</script>

<style scoped>
  div {
    border: solid 1px blue;
  }
</style>
