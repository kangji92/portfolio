import Vue from "vue";
import App from "./App.vue";
import router from "@/routes/index";
import store from "@/store/index";
import { i18n } from "@/locales/i18n";
import VModal from "vue-js-modal";
//import VueMobileDetection from "vue-mobile-detection";

//import axios from 'axios'
//import VueI18n from "vue-i18n";
//Vue.use(VueI18n);

//Vue.use(VueMobileDetection);
Vue.config.productionTip = false;
Vue.use(VModal, { dynamic: true });

new Vue({
  router,
  store,
  i18n,

  render: (h) => h(App),
}).$mount("#app");
