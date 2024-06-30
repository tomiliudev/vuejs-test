<script setup></script>

<template>
  <RouterLink to="/?lang=ja#aaa">Home</RouterLink> |
  <RouterLink :to="{ path: '/about', query: { lang: 'ja' }, hash: '#bbb' }">About</RouterLink>
  <RouterView />
</template>
