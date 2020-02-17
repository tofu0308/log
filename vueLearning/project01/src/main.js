import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = true;

console.log(App);
new Vue({
  render: h => h(App),
}).$mount('#app')
