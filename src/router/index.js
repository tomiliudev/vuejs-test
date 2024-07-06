import { createWebHistory, createRouter } from 'vue-router'
// import HomeView from '@/components/vueRouterTest/HomeView.vue'
// import BlogView from '@/components/vueRouterTest/BlogView.vue'

// 動的importをつかって遅延読み込みを行う（必要になった時にコンポーネントをダウンロードする）
const HomeView = () => import('@/components/vueRouterTest/HomeView.vue')

const routes = [
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/blog/:id/:version',
    name: 'blog',
    // 動的importをつかって遅延読み込みを行う（必要になった時にコンポーネントをダウンロードする）
    component: () => import('@/components/vueRouterTest/BlogView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
