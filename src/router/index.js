import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/pricing-test",
    name: "Pricing",
    component: () => import("../views/Pricing.vue"),
  },
  {
    path: "/pricing",
    name: "PricingTest",
    component: () => import("../views/PricingTest.vue"),
  },
  {
    path: "/corporate",
    name: "Corporate",
    component: () => import("../views/Corporate.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue"),
  },
  {
    path: "/links",
    name: "Links",
    component: () => import("../views/Links.vue"),
  },
  { path: "/post/:id", component: () => import("../views/Post.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { left: 0, top: 0, behavior: "smooth" };
    }
  },
});

export default router;
