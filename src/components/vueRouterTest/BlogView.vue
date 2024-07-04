<script setup>
defineProps({
  id: {
    required: true,
    type: String
  },
  version: {
    required: true,
    type: String
  }
})
</script>
<template>
  <div>
    <h2>Blog(id: {{ $route.params.id }} )</h2>
    <p>version : {{ $route.params.version }}</p>
    <RouterLink
      :to="{
        name: 'blog',
        params: { id: Number($route.params.id) + 1, version: $route.params.version }
      }"
      >next</RouterLink
    >
    <p>props id: {{ id }}</p>
    <p>props version: {{ version }}</p>
  </div>
</template>
