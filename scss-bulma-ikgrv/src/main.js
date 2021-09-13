/* eslint-disable import/first */

import Vue from "vue";
import App from "./App.vue";

import "./style.scss";
import Buefy from "buefy";

Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas"
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
