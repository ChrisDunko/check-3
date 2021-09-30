import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Check3 from "@/views/Check3.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Check3
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
