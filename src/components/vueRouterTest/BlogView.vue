<script setup>
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
// params, query, hashなど変化がある度によばれる
onBeforeRouteUpdate((to, from) => {
  console.log('onBeforeRouteUpdate', to, from)
})

// ページから離れようとする時に呼ばれる
onBeforeRouteLeave((to, from) => {
  console.log('onBeforeRouteLeave', to, from)
  // return window.confirm('ページを離れてもいいですか？')
})
</script>
<template>
  <div>
    <h1>Blog(id: {{ $route.params.id }} )</h1>
    <p>version : {{ $route.params.version }}</p>
    <RouterLink
      :to="{
        name: 'blog',
        params: { id: Number($route.params.id) + 1, version: $route.params.version }
      }"
      >next</RouterLink
    >
  </div>
</template>
