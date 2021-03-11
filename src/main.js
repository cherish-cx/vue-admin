import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router/index"; //index可省略
import router from "./router";
import store from "./store";
// 全局引入element，所有组件可用  按需引入需要用申明的组件 达到小项目体积的目的。 
// 全局
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount("#app");
