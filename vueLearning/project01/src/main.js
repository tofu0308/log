import Vue from 'vue'
import App from './App.vue'
import likeNumber from './likeNumber.vue'

Vue.config.productionTip = true;
Vue.component('likeNumber', likeNumber);

console.log(App);
new Vue({
  render: h => h(App),
}).$mount('#app')
