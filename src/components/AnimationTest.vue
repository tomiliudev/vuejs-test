<script setup>
import { ref } from 'vue'
const isShow = ref(true)
</script>
<template>
  <button @click="isShow = !isShow">isShow</button>

  <Transition
    enter-active-class="animate__animated animate__shakeX"
    leave-active-class="animate__animated animate__flash"
  >
    <div v-if="isShow">Hello</div>
  </Transition>
</template>
<style scoped></style>
