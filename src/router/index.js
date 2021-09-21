import {createRouter, createWebHistory} from 'vue-router'
import defineAsyncComponent from 'vue'

import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: defineAsyncComponent(() => import("../views/About.vue"))
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: defineAsyncComponent(() => import("../views/Pricing.vue"))
    },
    {
        path: '/contact',
        name: 'Contact',
        component: defineAsyncComponent(() => import("../views/Contact.vue"))
    },
    {
        path: '/blog',
        name: 'Blog',
        component: defineAsyncComponent(() => import("../views/Blog.vue"))
    },
    { path: '/post/:id', 
      component: defineAsyncComponent(() => import("../views/post.vue"))
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return  {
   
                      el: to.hash,
                      behavior: 'smooth',
                    }
              
            } else {
          return {left: 0, top: 0, behavior: 'smooth'}
        }
    
    }
})

export default router

