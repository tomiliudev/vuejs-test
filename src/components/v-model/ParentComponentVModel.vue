<script setup>
import { ref } from 'vue'
import ChildComponentVModel from './ChildComponentVModel.vue'

const parentInput = ref('')
const userInput = ref('')
const titleInput = ref('')
</script>

<template>
  <h1>Parent</h1>
  <input type="text" v-model="parentInput" />
  <p>ParentInput : {{ parentInput }}</p>
  <ChildComponentVModel v-model.uppercase="userInput" v-model:title-name.uppercase="titleInput" />
  <p>userInput : {{ userInput }}</p>
  <p>titleInput : {{ titleInput }}</p>
</template>
