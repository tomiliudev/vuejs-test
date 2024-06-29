<script setup>
const [model, modifiers] = defineModel({
  type: String,
  default: 'default',
  get(value) {
    return value
  },
  set(value) {
    if (modifiers.uppercase) {
      return value.toUpperCase()
    }
    return value
  }
})
const [titleName, modifiers2] = defineModel('titleName', {
  type: String,
  required: true,
  set(value) {
    if (modifiers2.uppercase) {
      return value.toUpperCase()
    }
    return value
  }
})
</script>

<template>
  <h1>Child</h1>
  <input v-model="model" type="text" />
  <p>model: {{ model }}</p>
  <p>modifiers: {{ modifiers }}</p>

  <input v-model="titleName" type="text" />
  <p>Child titleName : {{ titleName }}</p>
</template>
