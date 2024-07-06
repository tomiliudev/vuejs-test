<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>

<template>
  <h1>Pinia</h1>
  <button @click="counterStore.counter++">+</button>
  <button @click="counterStore.increment">increment</button>
  <button @click="counterStore.counter = 0">reset</button>
  <p>{{ counterStore.counter }}</p>
  <p>count > 0 ? {{ counterStore.isYes }}</p>
</template>

<style scoped></style>
