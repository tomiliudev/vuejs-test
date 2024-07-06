import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/components/vueRouterTest/HomeView.vue'
import BlogView from '@/components/vueRouterTest/BlogView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/blog/:id/:version',
    name: 'blog',
    component: BlogView,
    // 特定のナビゲーションへ遷移する時だけ実行されるガードです。
    // 遷移した後に１回だけ呼ばれる（配列で複数定義できる）
    beforeEnter: [beforeEnter1, beforeEnter2],
    meta: { requireAuth: true }
  }
]

function beforeEnter1(to, from) {
  console.log('beforeEnter1', to, from)
  return true
}

function beforeEnter2(to, from) {
  console.log('beforeEnter2', to, from)
  return true
}

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 遷移するたびに呼ばれる
router.beforeEach(async (to, from /* , next*/) => {
  console.log('beforeEach', to, from)

  // 非同期処理も書ける、この場合は２秒後にページ遷移が行われる
  await new Promise((resolve) => setInterval(resolve, 2000))

  // 認証されていない場合はloginへリダイレクト
  // const isAuthenticated = false
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()

  /* metaの値を使って、認証が必要で且つログインしていない場合はhomeへリダイレクト
  const isLogin = false
  if (to.meta.requireAuth && !isLogin) return { name: 'home' }
  */

  return true
})

// ページ遷移後（完了直前）に毎回呼ばれる
router.beforeResolve((to, from) => {
  console.log('beforeResolve', to, from)
  // if (to.name == 'blog') return { name: 'home' } 遷移しようとするページがblogであれば、homeへリダイレクトする
})

// ページの移動後（完了後）に毎回呼ばれる
// 厳密にafterEachが終わった後にDOMの更新が行われる
router.afterEach((to, from) => {
  console.log('afterEach', to, from)
  // return false afterEachはnavigation guardができない
})

export default router
