<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function toAbout() {
  router.push({ path: '/about' }) // 履歴残る。ブラウザの戻るボタンで前の画面へ
  //router.replace({ path: '/about' }) // 履歴残らない。ブラウザの戻るボタンで前の画面へ行かなくなる
  //router.go(-1) // 一個前の履歴へ戻る
  //router.go(1) // 一個先の履歴へ
}
</script>

<template>
  <RouterLink to="/?lang=ja#aaa" replace>Home</RouterLink> |
  <RouterLink :to="{ path: '/about', query: { lang: 'ja' }, hash: '#bbb' }">About</RouterLink> |
  <button @click="toAbout">About2</button> |
  <button @click="$router.push({ path: '/about' })">About3</button>
  <RouterView />
</template>
