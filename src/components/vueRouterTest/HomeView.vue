<template>
  <h1>Home</h1>
  <RouterLink :to="{ name: 'blog', params: { id: 1, version: 123 } }">Blog</RouterLink> |
  <RouterLink :to="{ name: 'posts', params: { id: 'tomiliu' } }">Profile</RouterLink>
</template>
