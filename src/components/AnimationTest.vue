<script setup>
import { ref } from 'vue'
const isShow = ref(true)

function beforeEnter(el) {
  console.log('beforeEnter', el)
}
function enter(el) {
  console.log('enter', el)
}
function afterEnter(el) {
  console.log('afterEnter', el)
}

function beforeLeave(el) {
  console.log('beforeLeave', el)
}
function leave(el) {
  console.log('leave', el)
}
function afterLeave(el) {
  console.log('afterLeave', el)
}
</script>
<template>
  <button @click="isShow = !isShow">isShow</button>

  <Transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <div v-if="isShow">Hello</div>
  </Transition>
</template>
<style scoped>
.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: opacity 1s;
}
.v-leave-from {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: opacity 1s;
}
</style>
