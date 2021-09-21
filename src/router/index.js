import {createRouter, createWebHistory} from 'vue-router'
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
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: () => import(/*webpackChunkName: "pricing" */"../views/Pricing.vue")
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(/*webpackChunkName: "contact" */"../views/Contact.vue")
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import(/*webpackChunkName: "Blog" */"../views/Blog.vue")
    },
    { path: '/post/:id', 
      component: () => import(/*webpackChunkName: "post" */"../views/Post.vue")
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

