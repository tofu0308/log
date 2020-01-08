<template>
    <div class="home">
        <p>{{greetText}}</p>
        <p>挨拶した回数：{{count}}回</p>
        <p v-if="isRegulars">count >= 5 :isRegulars = true</p>

        <p>
          <MyButton class="myButton" :greet="greetText" @click="onMyButtonClicked">挨拶する</MyButton>
        </p>
        <p>
          <ResetButton initialValue="Hello" v-model="greetText"></ResetButton>
        </p>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator';
    import MyButton from '@/components/MyButton.vue';
    import ResetButton from '@/components/ResetButton.vue';

    @Component({
        components: {
            MyButton,
            ResetButton,
      },
    })
    export default class Home extends Vue {
      public greetText: string = 'hello';
      private count = 0;

      public get isRegulars(): boolean {
        return this.count >= 5;
      }

      @Watch('count')
      public countChanged() {
        if (this.count === 5) {
          alert('ボタン押下５回目:(isRegulars=true)');
        }
      }

      public onMyButtonClicked(count: number) {
        this.count = count;
        this.greetText = 'こんにちは';
      }
    }
</script>