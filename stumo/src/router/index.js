import { createRouter, createWebHistory } from 'vue-router'
import StumoMainView from '../views/StumoMainView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: StumoMainView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
