import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Check3 from "@/pages/Check3.vue";
import About from "@/pages/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Check3
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
