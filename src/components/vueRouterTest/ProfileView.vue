<template>
  <h2>Profile(@{{ $route.params.id }})</h2>
  <RouterLink :to="{ name: 'posts' }">Posts</RouterLink> |
  <RouterLink :to="{ name: 'likes' }">Likes</RouterLink>
  <RouterView />
</template>
