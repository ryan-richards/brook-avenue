import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createHead } from '@vueuse/head'




const head = createHead()


createApp(App)
.use(router)
.use(head)
.mount('#app')
