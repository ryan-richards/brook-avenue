import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import Markdown from 'vue3-markdown-it'
import { createHead } from '@vueuse/head'

const head = createHead()


createApp(App)
.use(router)
.use(Markdown)
.use(head)
.mount('#app')
