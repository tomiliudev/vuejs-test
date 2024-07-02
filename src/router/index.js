import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/components/vueRouterTest/HomeView.vue'
import AboutView from '@/components/vueRouterTest/AboutView.vue'
import BlogView from '@/components/vueRouterTest/BlogView.vue'
import NotFound from '@/components/vueRouterTest/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  {
    path: '/blog/:id/:version',
    name: 'blog',
    props: true,
    component: BlogView
  },
  //   { path: '/blog/id-:id-number', name: 'blog', component: BlogView } // :id以外の部分は必須
  //   { path: '/blog/:id?', name: 'blog', component: BlogView } // パラメータを付けても付けなくてもいい
  //   { path: '/blog/:id+', name: 'blog', component: BlogView } // 1/2/3のようなURLをつくることができる
  //   { path: '/blog/:id*', name: 'blog', component: BlogView } // ?と+の合体版
  //   { path: '/blog/:id(\\d+)', name: 'blog', component: BlogView } // ()内は正規表現、例は数字が１文字以上
  //   { path: '/blog/:id(.+)', name: 'blog', component: BlogView } // ()内は正規表現、例は任意の文字が１文字以上
  {
    path: '/:catchAll(.*)*', // すべてのパスを受け付ける。パスの評価優先度はより詳細度の高いパスが優先される
    name: 'notFound',
    redirect: { name: 'home' }, // リダイレクト先。これを指定した場合、componentが無視される
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(), // <===ここがcreateMemoryHistoryからcreateWebHistoryに変更したら治った
  routes
})

export default router
