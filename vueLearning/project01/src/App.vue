<template>
  <div>
    <likeHeader></likeHeader>
    <likeNumber></likeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/likeHeader.vue';

export default {
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
