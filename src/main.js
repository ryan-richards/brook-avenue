import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import Markdown from 'vue3-markdown-it'


createApp(App)
.use(router)
.use(Markdown)
.mount('#app')
