<script setup></script>

<template>
  <h1>Navigation Guard</h1>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
  <RouterLink :to="{ name: 'blog', params: { id: 1, version: 1 } }">Blog</RouterLink>
  <RouterView />
</template>

<style scoped></style>
