<template>
  <h2>Blog(id: {{ $route.params.id }} )</h2>
  <p>version : {{ $route.params.version }}</p>
  <RouterLink
    :to="{
      name: 'blog',
      params: { id: Number($route.params.id) + 1, version: $route.params.version }
    }"
    >next</RouterLink
  >
</template>
