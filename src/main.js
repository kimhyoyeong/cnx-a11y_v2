import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import store from "@/store/store.js";
import { VCodeBlock } from '@wdns/vue-code-block';

createApp(App)
  .component('VCodeBlock', VCodeBlock)
  .use(store)
  .use(router)
  .mount("#app");
