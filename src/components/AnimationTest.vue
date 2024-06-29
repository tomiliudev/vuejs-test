<script setup>
import { ref } from 'vue'
const isShow = ref(true)
</script>
<template>
  <button @click="isShow = !isShow">isShow</button>

  <Transition name="fade">
    <div v-if="isShow">Hello</div>
  </Transition>
</template>
<style scoped>
/* 表示する時のアニメーション */
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 1s;
}
/* 非表示する時のアニメーション */
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 1s;
}
</style>
