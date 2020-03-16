<template>
  <div>
    <likeHeader></likeHeader>
    <p>{{ number }}</p>
    <likeNumber :total-number="number" v-on:my-click="incrementNumber"></likeNumber>
    <likeNumber :total-number="number"></likeNumber>
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
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
}
</script>

<style scoped>
  div {
    border: solid 1px blue;
  }
</style>
