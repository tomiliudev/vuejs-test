<script setup>
import { ref } from 'vue'
const isShow = ref(true)

function beforeEnter(el) {
  console.log('beforeEnter', el)
  el.style.transform = 'translateX(30px)'
}
let enterIntervalId
function enter(el, done) {
  console.log('enter', el)
  let translateXValue = 30
  enterIntervalId = setInterval(() => {
    translateXValue--
    el.style.transform = `translateX(${translateXValue}px)`
    if (translateXValue <= 0) {
      clearInterval(enterIntervalId)
      done()
    }
  }, 20)
}
function afterEnter(el) {
  console.log('afterEnter', el)
}
function enterCancelled(el) {
  console.log('enterCanceled', el)
  clearInterval(enterIntervalId)
}

function beforeLeave(el) {
  console.log('beforeLeave', el)
}
let leaveIntervalId
function leave(el, done) {
  console.log('leave', el)
  let translateXValue = 0
  leaveIntervalId = setInterval(() => {
    translateXValue++
    el.style.transform = `translateX(${translateXValue}px)`
    if (translateXValue >= 30) {
      clearInterval(leaveIntervalId)
      done() // done()を呼び出して明示的にアニメーションが終わることを伝える
    }
  }, 20)
}
function afterLeave(el) {
  console.log('afterLeave', el)
}

// v-showの時だけ有効（v-ifの時は無効、理由はアニメーションがenterからleaveまでは一つの要素になっていて、次のenterからは新しい要素になるため）
function leaveCancelled(el) {
  console.log('leaveCanceled', el)
  clearInterval(leaveIntervalId)
}
</script>
<template>
  <button @click="isShow = !isShow">switch</button>

  <Transition
    name="fade"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
  >
    <div v-show="isShow">Hello</div>
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
