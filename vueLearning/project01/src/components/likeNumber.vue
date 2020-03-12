<template>
  <div>
    <p>いいね ({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number, // type(型)
      // required :true 必須かどうか
      default: 20 // 指定がなければデフォルト値を設定
    }
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2
    }
  },
  methods: {
    increment() {
      this.number+= 1;
    }
  }
};
</script>

<style scoped>
  div {
    border: solid 1px red;
  }
</style>
