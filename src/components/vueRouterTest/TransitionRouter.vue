<script setup></script>
<template>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
  <RouterLink :to="{ name: 'blog', params: { id: 3, version: 'a' } }"
    >Blog(id: {{ $route.params.id }})</RouterLink
  >

  <RouterView v-slot="{ Component, route }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template>
<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style>
