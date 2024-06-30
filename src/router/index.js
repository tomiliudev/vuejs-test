import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/components/vueRouterTest/HomeView.vue'
import AboutView from '@/components/vueRouterTest/AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView }
]

const router = createRouter({
  history: createWebHistory(), // <===ここがcreateMemoryHistoryからcreateWebHistoryに変更したら治った
  routes
})

export default router
