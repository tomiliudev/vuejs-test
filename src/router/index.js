import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/components/vueRouterTest/HomeView.vue'
import AboutView from '@/components/vueRouterTest/AboutView.vue'
import BlogView from '@/components/vueRouterTest/BlogView.vue'
import ProfileView from '@/components/vueRouterTest/ProfileView.vue'
import PostsView from '@/components/vueRouterTest/PostsView.vue'
import LikesView from '@/components/vueRouterTest/LikesView.vue'
import NotFound from '@/components/vueRouterTest/NotFound.vue'
import ScrollHome from '@/components/vueRouterTest/ScrollTest/ScrollTestHome.vue'
import ScrollBlog from '@/components/vueRouterTest/ScrollTest/ScrollTestBlog.vue'

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
    path: '/profile/:id',
    name: 'profile',
    component: ProfileView,
    children: [
      {
        path: '', // profileにアクセスした時のデフォルトとしてpostsを表示したい場合、ここのpathを空文字にした上で、RouterLinkで親（profile）ではなく子（posts）を指定するとよい
        name: 'posts',
        component: PostsView
      },
      {
        path: 'likes',
        name: 'likes',
        component: LikesView
      }
    ]
  },
  {
    path: '/scrollHome',
    name: 'scrollHome',
    component: ScrollHome
  },
  {
    path: '/scrollBlog',
    name: 'scrollBlog',
    component: ScrollBlog
  },
  {
    path: '/:catchAll(.*)*', // すべてのパスを受け付ける。パスの評価優先度はより詳細度の高いパスが優先される
    name: 'notFound',
    redirect: { name: 'home' }, // リダイレクト先。これを指定した場合、componentが無視される
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(), // <===ここがcreateMemoryHistoryからcreateWebHistoryに変更したら治った
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      // return resolve()が呼ばれるとスクロール開始される
      setTimeout(() => {
        // 2秒後にreturn resolve()を呼ぶ
        if (savedPosition) {
          // ブラウザの戻るボタン押下で以前の画面へ戻った時にスクロールポジションを記憶してくれる
          return resolve(savedPosition)
        }
        if (to.hash) {
          // ハッシュが指定されていたらそこへ飛ぶ（スクロール）
          return resolve({
            el: to.hash,
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        }
        return resolve({
          // デフォルトのスクロールポジション
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }, 2000)
    })
  }
})

export default router
