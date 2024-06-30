<script setup>
import { ref } from 'vue'
const isShow = ref(true)

function beforeEnter(el) {
  console.log('beforeEnter', el)
  el.style.transform = 'translateX(30px)'
}
function enter(el, done) {
  console.log('enter', el)
  let translateXValue = 30
  const intervalId = setInterval(() => {
    translateXValue--
    el.style.transform = `translateX(${translateXValue}px)`
    if (translateXValue <= 0) {
      clearInterval(intervalId)
      done()
    }
  }, 20)
}
function afterEnter(el) {
  console.log('afterEnter', el)
}

function beforeLeave(el) {
  console.log('beforeLeave', el)
}
function leave(el, done) {
  console.log('leave', el)
  let translateXValue = 0
  const intervalId = setInterval(() => {
    translateXValue++
    el.style.transform = `translateX(${translateXValue}px)`
    if (translateXValue >= 30) {
      clearInterval(intervalId)
      done() // done()を呼び出して明示的にアニメーションが終わることを伝える
    }
  }, 20)
}
function afterLeave(el) {
  console.log('afterLeave', el)
}
</script>
<template>
  <button @click="isShow = !isShow">switch</button>

  <Transition
    name="fade"
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
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 1s;
}
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
