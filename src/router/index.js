import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Pricing from '../views/Pricing.vue'
import Contact from '../views/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: Pricing
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return {
           left: 0, top: 0,
           behavior: 'smooth',
        }
      }
})

export default router