import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import fastClick from 'fastclick';
import store from "./store/index";

import './assets/styles/reset.css';
import './assets/styles/border.css';
import './assets/styles/iconfont.css';



Vue.config.productionTip = false;
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
