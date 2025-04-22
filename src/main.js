import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
Vue.use(Vuex);
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state, payload) {
      state.count = state.count + payload.count;
    }
  }
});
new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
