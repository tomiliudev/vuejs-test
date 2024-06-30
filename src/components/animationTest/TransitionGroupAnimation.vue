<script setup>
import { ref } from 'vue'
const fruits = ref(['apple', 'banana', 'watermelon'])
const inputFruit = ref('')
function addFruit() {
  fruits.value.unshift(inputFruit.value)
  inputFruit.value = ''
}
</script>
<template>
  <input v-model="inputFruit" type="text" />
  <button @click="addFruit">add</button>
  <TransitionGroup tag="div">
    <div v-for="(fruit, index) in fruits" :key="fruit" @click="fruits.splice(index, 1)">
      {{ fruit }}
    </div>
  </TransitionGroup>
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
  position: absolute; /* 要素が消える時でも周りの要素がアニメーション再生されるようにするため */
}

/* 表示したり、非表示になったりする要素の周りの要素のアニメーションを制御 */
.v-move {
  transition: transform 1s;
}
</style>
