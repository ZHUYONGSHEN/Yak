import { createApp } from "vue";
import "@/assets/style/reset.less";
import "@/assets/style/common.less";
import App from "./App.vue";
import router from "./router";


const instance = createApp(App);
instance
  .use(router)
  .mount("#app");
