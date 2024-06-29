<script setup>
import { ref } from 'vue'
import { useRefLimitHistory } from '@/composables/UseRefLimitHistory.js'

const count = ref(0)
const { history, undo } = useRefLimitHistory(count, ref(3))

const userInput = ref('')
const { history: userInputHistory, undo: userInputUndo } = useRefLimitHistory(userInput, 5)
</script>
<template>
  <button @click="count++">+</button>
  <button @click="undo">undo</button>
  <p>count : {{ count }}</p>
  <p>history: {{ history }}</p>
  <input v-model="userInput" type="text" />
  <button @click="userInputUndo">userInputUndo</button>
  <p>userInput: {{ userInput }}</p>
  <p>userInputHistory: {{ userInputHistory }}</p>
</template>
