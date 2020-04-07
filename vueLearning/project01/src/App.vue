<template>
  <div>
    <likeHeader>
      <template v-slot:title>
        <h2>hello slot</h2>
      </template>

      <h3>default</h3>
      
      <template v-slot:number>
        <p>{{number}}</p>
      </template>
    </likeHeader>
    
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

  h1 {
      color :blue;
  }
</style>
