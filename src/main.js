import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import locale from 'element-ui/lib/locale/lang/en'
import i18n from '@/localization'

Vue.use(ElementUI, { locale });
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
new Vue({
  router,
render: (h) => h(App),
i18n
}).$mount("#app");