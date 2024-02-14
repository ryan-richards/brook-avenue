import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { createHead } from "@vueuse/head";
import LogSnag from "@logsnag/vue";

const head = createHead();

createApp(App)
  .use(router)
  .use(head)
  .use(LogSnag, {
    token: import.meta.env.VITE_LOGSNAG_TOKEN,
    project: import.meta.env.VITE_LOGSNAG_PROJECT,
  })
  .mount("#app");
